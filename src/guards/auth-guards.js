import config from '../config/index.js';
import { AppError } from '../error/AppError.js';
import token from '../utils/Token.js';

export const authGuard = async (req, res, next) => {
    try {
        const auth = req.headers?.authorization;

        if (!auth) {
            throw new AppError("avarizeshin error", 401)
        }

        const bearer = auth.split(" ")[0];
        const authToken = auth.split(" ")[1];
        if (bearer != "Bearer" || !authToken) {
            throw new AppError("unaftarizate", 401)
        }
        const user = token.verifyToken(authToken, config.Token.ACSES_TOKEN_KEY)
        req.user=user;
        next();
    } catch (error) {
        next(error)
    }
}