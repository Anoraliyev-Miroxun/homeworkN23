import { BaseController } from "./base.controller.js";
import { AppError } from "../error/AppError.js";
import crypto from '../utils/Crypto.js';
import { successRes } from '../utils/success-res.js';
import token from '../utils/Token.js';
import configEnv from '../config/index.js';
import Ega from "../models/ega.model.js";
import { generateOtp } from '../utils/generate-otp.js';
import { sendOtpToMali } from '../utils/send-mail.js';
import Redis from "../utils/Redis.js";
import config from '../config/index.js';
import deviceInfo from '../utils/DeviceInfo.js';

class EgaController extends BaseController {
    constructor() {
        super(Ega, ["kurslar"])
    }

    async createEga(req, res, next) {
        try {
            const { userName, email, password } = req.body;
            const exsistEmail = await Ega.findOne({ email });
            if (exsistEmail) {
                throw new AppError("email already exsist", 409)
            }
            const exsistUserName = await Ega.findOne({ userName });
            if (exsistUserName) {
                throw new AppError("phoneNumber already exsist", 409);
            }
            const hashedPassword = await crypto.encrypt(password);
            delete req.body.password;

            const newEga = await Ega.create({
                ...req.body,
                hashedPassword,
                image: req?.file?.filename ?? ""
            });

            return successRes(res, newEga, 201)
        } catch (error) {
            next(error)
        }
    }

    async singIn(req, res, next) {
        try {
            const { password, userName } = req.body;
            const ega = await Ega.findOne({ userName });

            const ismatchPassword = await crypto.decrypt(password, ega?.hashedPassword ?? '');
            if (!ismatchPassword) {
                throw new AppError("phoneNumber or password incorrect", 400);

            };

            const payload = {
                id: ega._id, role: ega.role, isActive: ega.isActive
            };
            const accsesToken = token.generetAccessToken(payload);
            const refreshToken = token.generetRefreshToken(payload);
            token.writeToCookie(res, "refreshTokenEga", refreshToken, 30)
            const device =deviceInfo.encrypt(req.headers["user-agent"]);
            ega.devices.push(device)

            return successRes(res, { token: accsesToken, ega })

        } catch (error) {
            next(error)
        }
    }

    async generetNewToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenEga;
            if (!refreshToken) {
                throw new AppError("Avtorizetion error", 401);
            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token expeir", 401);
            };

            const ega = await Ega.findById(verifyedToken?.id);
            if (!ega) {
                throw new AppError("forbidden user", 403);
            };

            const payload = {
                id: ega.id, role: ega.role, isActive: ega.isActive
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
            const refreshToken = req.cookies?.refreshTokenEga;
            if (!refreshToken) {
                throw new AppError("refresh token not found", 401);
            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token experi", 401);
            };

            const ega = await Ega.findById(verifyedToken?.id);
            if (!ega) {
                throw new AppError("forbidden user", 403);
            };

            res.clearCookie("refreshTokenEga");
            return successRes(res, {})
        } catch (error) {
            next(error)
        };
    };

    async updateEga(req, res, next) {
        try {
            const id = req.params.id;
            const ega = await BaseController.checkById(Ega, id);
            const { userName, password, email } = req.body;
            if (userName) {
                const exsist = await Ega.findOne({ userName });
                if (exsist) {
                    throw new AppError("userName arlery exsist", 409)
                }
            }

            if (email) {
                const exsist = await Ega.findOne({ email });
                if (exsist) {
                    throw new AppError("email arlery exsist", 409)
                }
            }

            let hashedPassword = ega.hashedPassword;
            if (password) {
                if (req?.user.role != ega.role) {
                    throw new AppError("not access chenge for admin or ega", 403)
                }
                hashedPassword = await crypto.encrypt(password);
                delete req.body.password
            };
            const updateEga = await Ega.findByIdAndUpdate(id, { ...req.body, hashedPassword }, { new: true });
            return successRes(res, updateEga)
        } catch (error) {
            next(error)
        }
    }

    async updatePasswordEga(req, res, next) {
        try {
            const id = req.params.id;
            const { oldPassword, newPassword } = req.body;
            const ega = await BaseController.checkById(Ega, id);
            const isMatedPassword = await crypto.decrypt(oldPassword, ega.hashedPassword)
            if (!isMatedPassword) {
                throw new AppError("incorect old password", 400)
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const updatePassword = await Ega.findByIdAndUpdate(id, { hashedPassword }, { new: true });
            return successRes(res, updatePassword)
        } catch (error) {
            next(error)
        }
    }

    async forgetPassword(req, res, next) {
        try {
            const { email } = req.body;
            const ega = await Ega.findOne({ email })
            if (!ega) {
                throw new AppError("email not found")
            }
            const otp = generateOtp();
            sendOtpToMali(email, otp);
            Redis.setData(email, otp);
            return successRes(
                res, {
                email, otp,
                expireOtp: '5minut'
            }
            )
        } catch (error) {
            next(error)
        }
    }

    async confirmOtp(req, res, next) {
        try {
            const { email, otp } = req.body;
            const checkOtp = await Redis.getData(email)
            if (otp != checkOtp) {
                throw new AppError("otp notogri", 400)
            }
            await Redis.deleteData(email);
            return successRes(res, {
                confirmPasswordOtp: config.CONFIRM_PASSWORD_URL,
                reqMethod: "PATCH",
                email
            })
        } catch (error) {
            next(error)
        }
    }

    async confirmPassword(req, res, next) {
        try {
            const { email, newPassword } = req.body;
            const ega = await Ega.findOne({ email });
            if (!ega) {
                throw new AppError("bunday foydalanuchi topilmadi", 404)
            }

            const hashedPassword = await crypto.encrypt(newPassword);
            const updatePassword = await Ega.findByIdAndUpdate(ega._id, { hashedPassword }, { new: true });
            return successRes(res, updatePassword);
        } catch (error) {
            next(error)
        }
    }



}

export default new EgaController();
