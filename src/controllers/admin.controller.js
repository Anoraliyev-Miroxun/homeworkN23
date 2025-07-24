import { BaseController } from './base.controller.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';
import adminSchema from '../validations/AdminValidation.js';
import token from '../utils/Token.js';
import configEnv from '../config/config.env.js';


class AdminController extends BaseController {
    constructor() {
        super(Admin)
    };

    async createAdmin(req, res) {
        try {
            const { username, password, email } = req.body;
            const exsistUsername = await Admin.findOne({ username })
            if (exsistUsername) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "not found"
                })
            };
            console.log('nima gap')
            const exsistEmail = await Admin.findOne({ email })
            if (exsistEmail) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "not found"
                })
            };
            const hashedPassword = await crypto.encrypt(password)
            const admin = await Admin.create({
                email,
                hashedPassword,
                username
            });

            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: admin
            })
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: "catchda hato chiqdi"
            });
        }
    }

    async singIn(req, res) {
        try {
            const { password, username } = req.body;
            const admin = await Admin.findOne({ username });
            
            const ismatchPassword = await crypto.decrypt(password, admin?.hashedPassword ?? '');
            if (!ismatchPassword) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "password yoki username hato qayta uring"
                })
            };

            const payload = {
                id: admin._id, role: admin.role, isActive: admin.isActive
            };
            const accsesToken = token.generetAccessToken(payload);
            const refreshToken = token.generetRefreshToken(payload);
            token.writeToCookie(res, "refreshTokenKey", refreshToken, 30)


            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: {
                    token: accsesToken,
                    admin
                }
            })

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error
            })
        }
    }

    async generetNewToken(req, res) {
        try {
            const refreshToken = req.cookies?.refreshTokenKey;
            console.log(req.cookies);
            if (!refreshToken) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "token not found"
                })
            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            console.log(verifyedToken)

            if (!verifyedToken) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "refresh token exipre"
                })
            };

            const admin = await Admin.findById(verifyedToken?.id);
            if (!admin) {
                return res.status(403).json({
                    statusCode: 403,
                    message: "forbidenn user"
                })
            };

            const payload = {
                id: admin.id, role: admin.role, isActive: admin.isActive
            };

            const acsesToken = token.generetAccessToken(payload);
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: {
                    acssesToken: acsesToken
                }
            });

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error || "internal server error"
            })
        }
    }



    async singOut(req, res) {
        try {
            const refreshToken = req.cookies?.refreshTokenKey;
            if (!refreshToken) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "token not found"
                })
            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                return res.status(401).json({
                    statusCode: 401,
                    message: "refresh token exipre"
                })
            };

            const admin = await Admin.findById(verifyedToken?.id);
            if (!admin) {
                return res.status(403).json({
                    statusCode: 403,
                    message: "forbidenn user"
                })
            };

            res.clearCookie("refreshTokenKey");
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data:{}
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: "internal server error"
            });
        };
    };

}

export default new AdminController();
