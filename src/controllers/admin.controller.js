import { BaseController } from './base.controller.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';
import token from '../utils/Token.js';
import configEnv from '../config/config.env.js';
import { AppError } from '../error/AppError.js';
import { successRes } from '../utils/success-res.js';


class AdminController extends BaseController {
    constructor() {
        super(Admin)
    };

    async createAdmin(req, res) {
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

    async singIn(req, res) {
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

    async generetNewToken(req, res) {
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
            return successRes(res,{
                token:acsesToken
            })

        } catch (error) {
            next(error)
        }
    }



    async singOut(req, res) {
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
            return successRes(res,{})
        } catch (error) {
            next(error)
        };
    };

}

export default new AdminController();
