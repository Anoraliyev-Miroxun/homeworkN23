import Joi from "joi";

class OrderValidation {
    create() {
        return Joi.object({
            status: Joi.string()
                .valid("pending", "approved", "rejected")
                .optional()
                .messages({
                    "any.only": "Status must be one of: pending, approved, rejected"
                }),

            mijoz_id: Joi.string()
                .required()
                .messages({
                    "string.empty": "Mijoz ID is required"
                }),

            kurs_id: Joi.string()
                .required()
                .messages({
                    "string.empty": "Kurs ID is required"
                })
        });
    }

    update() {
        return Joi.object({
            status: Joi.string()
                .valid("pending", "approved", "rejected")
                .optional()
                .messages({
                    "any.only": "Status must be one of: pending, approved, rejected",
                }),

            mijoz_id: Joi.string()
                .optional()
                .custom(objectIdValidator, "ObjectId Validation"),

            kurs_id: Joi.string()
                .optional()
                .custom(objectIdValidator, "ObjectId Validation")
        });
    }
}

export default new OrderValidation();