import jwt from 'jsonwebtoken';
import configEnv from '../config/config.env.js';

class Token{
    generetAccessToken(payload){
        return jwt.sign(payload,configEnv.Token.ACCESS_TOKEN_KEY,{
            expiresIn:configEnv.Token.ACCESS_TOKEN_TIME
        })
    };

    generetRefreshToken(payload){
        return jwt.sign(payload,configEnv.Token.REFRESH_TOKEN_KEY,{
            expiresIn:configEnv.Token.REFRESH_TOKEN_TIME
        })
    };

    writeToCookie(res,key,value,expireDay){
        res.cookie(key,value,{
            httpOnly:true,
            secure:true,
            maxAge:Number(expireDay)*24*60*60*1000
        })
    };

    verifyToken(token,secretKey){
        return jwt.verify(token,secretKey)
    };

    
}

export default new Token();
