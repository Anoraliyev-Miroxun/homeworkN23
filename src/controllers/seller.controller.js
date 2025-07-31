import { BaseController } from "./base.controller.js";
import Saller from '../models/seller.model.js';
import { AppError } from "../error/AppError.js"; 
import crypto from '../utils/Crypto.js';
import {successRes} from '../utils/success-res.js';
import token from '../utils/Token.js';
import configEnv from '../config/index.js';

class SallerController extends BaseController{
    constructor(){
        super(Saller)
    }

    async createSaller(req,res,next){
        try {
            const {phoneNumber,email,password}=req.body;
            const exsistEmail=await Saller.findOne({email});
            if(exsistEmail){
                throw new AppError("email already exsist",409)
            }
            const exsistPhone=await Saller.findOne({phoneNumber});
            if(exsistPhone){
                throw new AppError("phoneNumber already exsist",409);
            }
            const hashedPassword=await crypto.encrypt(password);
            delete req.body.password;
        
            const newSaller=await Saller.create({
                ...req.body,
                hashedPassword,
                image:req?.file?.filename??""
            });

            return successRes(res,newSaller,201)
        } catch (error) {
            next(error)
        }
    }

    async singIn(req, res, next) {
        try {
            const { password, phoneNumber } = req.body;
            const saller = await Saller.findOne({ phoneNumber });

            const ismatchPassword = await crypto.decrypt(password, saller?.hashedPassword ?? '');
            if (!ismatchPassword) {
                throw new AppError("phoneNumber or password incorrect", 400);

            };

            const payload = {
                id: saller._id, role: saller.role, isActive: saller.isActive
            };
            const accsesToken = token.generetAccessToken(payload);
            const refreshToken = token.generetRefreshToken(payload);
            token.writeToCookie(res, "refreshTokenSaller", refreshToken, 30)


            return successRes(res, { token: accsesToken, saller })

        } catch (error) {
            next(error)
        }
    }

    async generetNewToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshTokenSaller;
            if (!refreshToken) {
                throw new AppError("Avtorizetion error", 401);

            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token expeir", 401);

            };

            const saller = await Saller.findById(verifyedToken?.id);
            if (!saller) {
                throw new AppError("forbidden user", 403);
            };

            const payload = {
                id: saller.id, role: saller.role, isActive: saller.isActive
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
            const refreshToken = req.cookies?.refreshTokenSaller;
            if (!refreshToken) {
                throw new AppError("refresh token not found", 401);
            };

            const verifyedToken = token.verifyToken(refreshToken, configEnv.Token.REFRESH_TOKEN_KEY);
            if (!verifyedToken) {
                throw new AppError("refresh token experi", 401);

            };

            const saller = await Saller.findById(verifyedToken?.id);
            if (!saller) {
                throw new AppError("forbidden user", 403);

            };

            res.clearCookie("refreshTokenSaller");
            return successRes(res, {})
        } catch (error) {
            next(error)
        };
    };


}

export default new SallerController();
