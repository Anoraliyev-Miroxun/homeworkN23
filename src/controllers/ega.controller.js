import { BaseController } from "./base.controller.js";
import { AppError } from "../error/AppError.js"; 
import crypto from '../utils/Crypto.js';
import {successRes} from '../utils/success-res.js';
import token from '../utils/Token.js';
import configEnv from '../config/index.js';
import Ega from "../models/ega.model.js";

class EgaController extends BaseController{
    constructor(){
        super(Ega,["kurslar"])
    }

    async createEga(req,res,next){
        try {
            const {userName,email,password}=req.body;
            const exsistEmail=await Ega.findOne({email});
            if(exsistEmail){
                throw new AppError("email already exsist",409)
            }
            const exsistUserName=await Ega.findOne({userName});
            if(exsistUserName){
                throw new AppError("phoneNumber already exsist",409);
            }
            const hashedPassword=await crypto.encrypt(password);
            delete req.body.password;
        
            const newEga=await Ega.create({
                ...req.body,
                hashedPassword,
                image:req?.file?.filename??""
            });

            return successRes(res,newEga,201)
        } catch (error) {
            next(error)
        }
    }

    async singIn(req, res, next) {
        try {
            const { password,userName } = req.body;
            const ega = await Ega.findOne({userName });

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


}

export default new EgaController();
