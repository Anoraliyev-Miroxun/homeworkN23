import Joi from "joi";

class ImageValidation {
    create() {
        return Joi.object({
            kurs_id: Joi.string()
                .required()
                .regex(/^[0-9a-fA-F]{24}$/)
                .message("kurs_id must be a valid ObjectId"),

        });
    }

    update() {
        return Joi.object({
            kurs_id: Joi.string()
                .required()
                .regex(/^[0-9a-fA-F]{24}$/)
                .message("kurs_id must be a valid ObjectId"),

        });
    }
}

export default new ImageValidation();