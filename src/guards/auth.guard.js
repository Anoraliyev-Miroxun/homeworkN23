import configEnv from '../config/config.env.js';
import Token from '../utils/Token.js';

export const AuthGuar = async (req, res, next) => {
    try {
        const auth = req.headers?.authorization;
        if (!auth) {
            return res.status(401).json({
                statusCode: 401,
                message: "avtorizeshin error"
            })
        }
        const bearer=auth.split(" ")[0];
        const AuthToken=auth.split(" ")[1];
        if(bearer !== "Bearer" || !AuthToken){
            return res.status(401).json({
                statusCode:401,
                message:"unaftarizeate"
            })
        };
        const user=Token.verifyToken(AuthToken,configEnv.Token.ACCESS_TOKEN_KEY);
        req.user=user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            statusCode: 500,
            message: "internal server error"
        })
    }
}