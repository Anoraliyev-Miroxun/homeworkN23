import { BaseController } from './base.controller.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';
import token from '../utils/Token.js';
import configEnv from '../config/index.js';
import { AppError } from '../error/AppError.js';
import { successRes } from '../utils/success-res.js';
import { generateOtp } from '../utils/generate-otp.js';
import { sendOtpToMali } from '../utils/send-mail.js';
import Redis from '../utils/Redis.js';


class AdminController extends BaseController {
    constructor() {
        super(Admin)
    };

    async createAdmin(req, res, next) {
        try {
            const { username, password, email } = req.body;
            const exsistUsername = await Admin.findOne({ username })
            if (exsistUsername) {
                throw new AppError("username arley exsist", 409);
            };
            console.log('nima gap')
            const exsistEmail = await Admin.findOne({ email })
            if (exsistEmail) {
                throw new AppError("emali address arley exsist", 409);
            };
            const hashedPassword = await crypto.encrypt(password)
            const admin = await Admin.create({
                email,
                hashedPassword,
                username
            });

            return successRes(res, admin, 201)
        } catch (error) {
            next(error)
        }
    }

    async singIn(req, res, next) {
        try {
            const { password, username } = req.body;
            const admin = await Admin.findOne({ username });

            const ismatchPassword = await crypto.decrypt(password, admin?.hashedPassword ?? '');
            if (!ismatchPassword) {
                throw new AppError("username or password incorrect", 400);

            };

            const payload = {
                id: admin._id, role: admin.role, isActive: admin.isActive
            };
            const accsesToken = token.generetAccessToken(payload);
            const refreshToken = token.generetRefreshToken(payload);
            token.writeToCookie(res, "refreshTokenKey", refreshToken, 30)


            return successRes(res, { token: accsesToken, admin })

        } catch (error) {
            next(error)
        }
    }

    async generetNewToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenKey;
            if (!refreshToken) {
                throw new AppError("Avtorizetion error", 401);

            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            console.log(verifyedToken)

            if (!verifyedToken) {
                throw new AppError("refresh token expeir", 401);

            };

            const admin = await Admin.findById(verifyedToken?.id);
            if (!admin) {
                throw new AppError("forbidden user", 403);
            };

            const payload = {
                id: admin.id, role: admin.role, isActive: admin.isActive
            };

            const acsesToken = token.generetAccessToken(payload);
            return successRes(res, {
                token: acsesToken
            })

        } catch (error) {
            next(error)
        }
    }



    async singOut(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenKey;
            if (!refreshToken) {
                throw new AppError("refresh token not found", 401);

            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token experi", 401);

            };

            const admin = await Admin.findById(verifyedToken?.id);
            if (!admin) {
                throw new AppError("forbidden user", 403);

            };

            res.clearCookie("refreshTokenKey");
            return successRes(res, {})
        } catch (error) {
            next(error)
        };
    };


    async updateAdmin(req, res, next) {
        try {
            const id = req.params.id;
            const admin = await this.checkById(id);
            const { username, email, password } = req.body;
            if (username) {
                const exsist = await Admin.findOne({ username });
                if (exsist && exsist.username !== username) {
                    throw new AppError("username arely exsist", 409)
                }
            }
            if (email) {
                const exsist = await Admin.findOne({ email });
                if (exsist && exsist.email !== email) {
                    throw new AppError("email arely exsist", 409)
                }
            }
            let hashedPassword = admin.hashedPassword;
            if (password) {
                if (req.user?.role != admin.role) {
                    throw new AppError("not access to change password for admin", 403)
                }
                hashedPassword = await crypto.encrypt(password);
                delete req.body.password;
            }

            const updateAdmin = await Admin.findByIdAndUpdate({
                ...req.body, hashedPassword
            }, { new: true });
            return successRes(res, updateAdmin)
        } catch (error) {
            next(error)
        }
    }



    async updatePasswordForAdmin(req, res, next) {
        try {
            const id = req.params.id;
            const admin = await BaseController.checkById(Admin, id);
            const { oldPassword, newPassword } = req.body;
            const ismatchPassword = await crypto.decrypt(oldPassword, admin.hashedPassword);
            if (!ismatchPassword) {
                throw new AppError("incorecct old password", 400)
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const updateAdmin = await Admin.findByIdAndUpdate(id, { hashedPassword }, { new: true });
            return successRes(res, updateAdmin)
        } catch (error) {
            next(error)
        }
    }


    async forgetPassword(req, res, next) {
        try {
            const {email} = req.body;
            const admin = await Admin.findOne({ email });
            if (!email) {
                throw new AppError("email not found", 404)
            }
            const otp = generateOtp();
            sendOtpToMali(email, otp);
            await Redis.setData(email, otp);
            return successRes(res, {
                email,
                otp,
                expireOtp: "5 minutes"
            })
        } catch (error) {
            next(error)
        }
    }

    async confirmOtp(req, res, next) {
        try {
            console.log("jk;lasdlkfja;sldkfj;lasjdlfkajl;ksdjf[ajsd;lkfja;sjdfd")
            const { email, otp } =req.body;
            const checkOtp=await Redis.getData(email)
            if(String(checkOtp)!==String(otp)){
                throw new AppError("otp incorecct or expire",400)
            };
            await Redis.deleteData(email);
            return successRes(res,{
                confirmPasswordUrl:configEnv.CONFIRM_PASSWORD_URL,
                requestMethod:"PATCH",
                email
            })
        } catch (error) {
            next(error)
        }
    }

    async confirmPassword(req,res,next){
        try {
            const {email,newPassword}=req.body;
            const admin=await Admin.findOne({email});
            if(!admin){
                throw new AppError("user not found ",404)
            }
            const hashedPassword=await crypto.encrypt(newPassword);
            const updateAdmin=await Admin.findByIdAndUpdate(admin._id,{hashedPassword},{new:true});
            return successRes(res,updateAdmin);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

}

export default new AdminController();
