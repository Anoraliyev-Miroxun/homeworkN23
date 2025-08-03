import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/success-res.js';
import Mijoz from '../models/mijoz.model.js';
import { AppError } from "../error/AppError.js";
import crypto from '../utils/Crypto.js';
import token from '../utils/Token.js';
import { generateOtp } from '../utils/generate-otp.js';
import { sendOtpToMali } from '../utils/send-mail.js';
import redis from '../utils/Redis.js';
import config from '../config/index.js';


class MijozController extends BaseController {
    constructor() {
        super(Mijoz, ["order"])
    }

    async createMijoz(req, res, next) {
        try {
            const { userName, password, email } = req.body;
            const exsistEmail = await Mijoz.findOne({ email })

            if (exsistEmail) {
                throw new AppError("bu email band boshqa email krting", 409)
            }

            const exsistUserName = await Mijoz.findOne({userName});
            if (exsistUserName) {
                throw new AppError("bu usename band boshqa kritig", 409)
            }
            delete req.body.password;
            const hashedPassword = await crypto.encrypt(password);
            const data = await Mijoz.create({
                ...req.body,
                hashedPassword
            });
            return successRes(res, data, 201)
        } catch (error) {
            next(error)
        }
    }

    async singin(req, res, next) {
        try {
            const { userName, password } = req.body;
            const mijozExsist = await Mijoz.findOne({ userName });

            const exsistPassword = await crypto.decrypt(password, mijozExsist.hashedPassword);
            if (!exsistPassword) {
                throw new AppError("password yoki username hato")
            };

            const payload = {
                id: mijozExsist._id,
                isActive: mijozExsist.isActive,
                fullName: mijozExsist.fullName
            }

            const accsesToken = token.generetAccessToken(payload);
            const refreshToken = token.generetAccessToken(payload);
            token.writeToCookie(res, "refreshTokenMijoz", refreshToken, 30)
            return successRes(res, {
                token: accsesToken,
                mijozExsist
            })
        } catch (error) {
            next(error)
        }
    }

    async generetNewToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenMijoz;
            if (!refreshToken) {
                throw new AppError("aftrizatsiya error", 401)
            }

            const verifyedToken = token.verifyToken(refreshToken, "refreshTonkenMijoz");
            if (!verifyedToken) {
                throw new AppError("refresh token expair", 401)
            }
            const mijoz = await Mijoz.findById(verifyedToken?.id);
            if (!mijoz) {
                throw new AppError("forbiden error", 403)
            }
            const payload = { id: mijoz._id, isActive: mijoz.isActive, fullName: mijoz.fullName };

            const accsesToken = token.generetAccessToken(payload);
            return successRes(res, {
                token: accsesToken
            })
        } catch (error) {
            next(error)
        }
    }

    async singOut(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenMijoz;
            if (!refreshToken) {
                throw new AppError('Refresh token not found', 401);
            }
            const verifiedToken = token.verifyToken(refreshToken, config.TOKEN.REFRESH_KEY);
            if (!verifiedToken) {
                throw new AppError('Refresh token expire', 401);
            }
            const mijoz = await Mijoz.findById(verifiedToken?.id);
            if (!mijoz) {
                throw new AppError('Forbidden user', 403);
            }
            res.clearCookie('refreshTokenMijoz');
            return successRes(res, {});
        } catch (error) {
            next(error)
        }
    }


    async updatePasswordForMijoz(req, res, next) {
        try {
            const id = req.params?.id;
            const mijoz = await BaseController.checkById(Mijoz, id);
            const { oldPassword, newPassword } = req.body;
            const isMatchPassword = await crypto.decrypt(oldPassword, mijoz.hashedPassword);
            if (!isMatchPassword) {
                throw new AppError('Incorrect old password', 400);
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const mijozUpdate = await Mijoz.findByIdAndUpdate(id, { hashedPassword }, { new: true });
            return successRes(res, mijozUpdate);
        } catch (error) {
            next(error);
        }
    }


    async forgetPassword(req, res, next) {
        try {
            const { email } = req.body;
            const mijoz = await Mijoz.findOne({ email });
            if (!mijoz) {
                throw new AppError('Email address is not found', 404);
            }
            const otp = generateOtp();
            sendOtpToMali(email, otp);
            await redis.setData(email, otp);
            return successRes(res, {
                email,
                otp,
                expireOTP: '5 minutes',
            });
        } catch (error) {
            next(error);
        }
    }

    async confirmOTP(req, res, next) {
        try {
            const { email, otp } = req.body;
            const checkOTP = await redis.getData(email);
            if (checkOTP != otp) {
                throw new AppError('OTP incorrect or expired', 400);
            }
            await redis.deleteData(email);
            return successRes(res, {
                confirmPasswordURL: config.CONFIRM_PASSWORD_URL,
                requestMethod: 'PATCH',
                email
            });
        } catch (error) {
            next(error);
        }
    }
    async confirmPassword(req, res, next) {
        try {
            const { email, newPassword } = req.body;
            const mijoz = await Mijoz.findOne({ email });
            if (!mijoz) {
                throw new AppError('Email address is not found', 404);
            }
            const hashedPassword = await crypto.encrypt(newPassword);
            const updatedMijoz = await Mijoz.findByIdAndUpdate(mijoz._id, { hashedPassword }, { new: true });
            return successRes(res, updatedMijoz);
        } catch (error) {
            next(error);
        }
    }


    


}

export default new MijozController();
