import { AppError } from '../error/AppError.js';

export const validate = (schemaValidate) => {
    return function (req, _res, next) {
        try {
            const schema = schemaValidate();


            const { error } = schema.validate(req.body);
            if (error) {
                throw new AppError(error?.details[0].message || "error input validation", 422);
            }
            next();
        } catch (error) {
            next(error)
        }
    }
}