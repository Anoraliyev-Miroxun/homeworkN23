import { AppError } from '../error/AppError.js';

export const roleGuards = (...roles) => {
    return async function (req, res, next) {
        try {
            if ((req.user?.role && roles.includes(req.user?.role))
                || (roles.includes("ID") && req.params?.id === req.user?.id)) {
                return next();

            }
            throw new AppError("forbiden user", 403)

        } catch (error) {
            next(error)

        }
    }

}