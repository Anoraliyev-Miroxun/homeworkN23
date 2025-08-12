import User from '../models/users.model.js';
import { AppError } from '../error/AppError.js';
import { successRes } from '../utils/successRes.js';
import { BaseController } from './base.controller.js';
import token from '../utils/Token.js';
import config from '../config/index.js';
import { generateOtp } from '../utils/generet-otp.js';
import { sendOtpToMali } from '../utils/send-email.js';
import redis from '../utils/Redis.js';
import crypto from '../utils/Crypto.js';

class UserController extends BaseController {
    constructor() {
        super(User,["hamyon",""])
    }

    async createUser(req, res, next) {
        try {
            const { email, userName, phoneNumber, password } = req.body;
            const exsistEmai = await User.findOne({ email });
            if (exsistEmai) {
                throw new AppError("bu eamil bilan oldin royhatdan otilgan", 409)
            }
            const exsistPhoneNumber = await User.findOne({ phoneNumber });
            if (exsistPhoneNumber) {
                throw new AppError("bu telefon nomer bilan oldin royhatdan otilgan", 409)
            }
            const exsistUserName = await User.findOne({ userName })
            if (exsistUserName) {
                throw new AppError("bu userName bilan oldin royhatdan otilgan", 409)
            }
            const hashedPassword = await crypto.encrypt(password);
            delete req.body.password;
            const userCreate = {
                ...req.body, hashedPassword
            }
            delete userCreate.password
            const natija = await User.create(userCreate);
            return successRes(res, natija, 201)
        } catch (error) {
            next(error)
        }
    }



    async singIn(req, res, next) {
        try {
            const { password, userName } = req.body;
            const user = await User.findOne({ userName });
            const ismatchPassword = await crypto.dectypt(password, user?.hashedPassword ?? '');
            if (!ismatchPassword) {
                throw new AppError("username or password incorrect", 400);
            };

            const payload = {
                id: user._id, role: user.role, isActive: user.isActive
            };
            const accsesToken = token.genereteAccessToken(payload);
            const refreshToken = token.genereteRefreshToken(payload);
            token.writeToCookie(res, "refreshTokenUser", refreshToken, 30)

            return successRes(res, { token: accsesToken, user })
        } catch (error) {
            next(error)
        }
    }




    async generetNewToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenUser;
            if (!refreshToken) {
                throw new AppError("Avtorizetion error", 401);

            };

            const verifyedToken = token.verifyToken(refreshToken, config.Token.REFRESH_KEY);

            if (!verifyedToken) {
                throw new AppError("refresh token expeir", 401);

            };

            const user = await User.findById(verifyedToken?.id);
            if (!user) {
                throw new AppError("forbidden user", 403);
            };

            const payload = {
                id: user.id, role: user.role, isActive: user.isActive
            };

            const acsesToken = token.genereteAccessToken(payload);
            return successRes(res, {
                token: acsesToken
            })

        } catch (error) {
            next(error)
        }
    }




    async singOut(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenUser;
            if (!refreshToken) {
                throw new AppError("refresh token not found", 401);
            };

            const verifyedToken = token.verifyToken(refreshToken, config.Token.REFRESH_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token experi", 401);
            };

            const user = await User.findById(verifyedToken?.id);
            if (!user) {
                throw new AppError("forbidden user", 403);
            };

            res.clearCookie("refreshTokenUser");
            return successRes(res, {})
        } catch (error) {
            next(error)
        };
    };




    async updateUser(req, res, next) {
        try {
            const id = req.params.id;
            const user = await BaseController.checkById(User, id);
            const { userName, email, password } = req.body;
            if (userName) {
                const exsist = await User.findOne({ userName });
                console.log(exsist)
                if (exsist && exsist.userName !== userName) {
                    throw new AppError("userName arely exsist", 409)
                }
            }
            if (email) {
                const exsist = await User.findOne({ email });
                if (exsist && exsist.email !== email) {
                    throw new AppError("email arely exsist", 409)
                }
            }
            let hashedPassword = user.hashedPassword;
            if (password) {
                if (req.user?.role != user.role) {
                    throw new AppError("not access to change password for user", 403)
                }
                hashedPassword = await crypto.encrypt(password);
                delete req.body.password;
            }
            const updateAdmin = await User.findByIdAndUpdate(id, {
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
            const user = await BaseController.checkById(User, id);
            const { oldPassword, newPassword } = req.body;
            const ismatchPassword = await crypto.dectypt(oldPassword, user.hashedPassword);
            if (!ismatchPassword) {
                throw new AppError("incorecct old password", 400)
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const updateUser = await User.findByIdAndUpdate(id, { hashedPassword }, { new: true });
            return successRes(res, updateUser)
        } catch (error) {
            next(error)
        }
    }




    async forgetPassword(req, res, next) {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            if (!email) {
                throw new AppError("email not found", 404)
            }
            const otp = generateOtp();
            sendOtpToMali(email, otp);
            await redis.setData(email, otp);
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
            const { email, otp } = req.body;
            const checkOtp = await redis.getData(email)
            if (String(checkOtp) !== String(otp)) {
                throw new AppError("otp incorecct or expire", 400)
            };
            await redis.deleteData(email);
            return successRes(res, {
                confirmPasswordUrl: config.CONFIRM_PASSWORD_URL,
                requestMethod: "PATCH",
                email
            })

        } catch (error) {
            next(error)
        }
    }

    async confirmPassword(req, res, next) {
        try {
            const { email, newPassword } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                throw new AppError("user not found ", 404)
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const updateUser = await User.findByIdAndUpdate(user._id, { hashedPassword }, { new: true });
            return successRes(res, updateUser);
        } catch (error) {
            next(error)
        }
    }


}

export default new UserController();