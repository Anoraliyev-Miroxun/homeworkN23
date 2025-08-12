import jwt from 'jsonwebtoken';
import config from '../config/index.js';


class Token{
    genereteAccessToken(payload){
        return jwt.sign(payload,config.Token.ACSES_TOKEN_KEY,{
            expiresIn:config.Token.ACSES_TOKEN_TIME
        })
    }

    genereteRefreshToken(payload){
        return jwt.sign(payload,config.Token.REFRESH_KEY,{
            expiresIn:config.Token.REFRESH_TIME
        })
    }

    writeToCookie(res,key,value,expirDay){
        res.cookie(key,value,{
            httpOnly:true,
            secure:true,
            maxAge:Number(expirDay)*24*60*60*1000
        })
    }

    verifyToken(token,secretKey){
        return jwt.verify(token,secretKey)
    }
}


export default new Token();
