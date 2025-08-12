import Joi from "joi";

class CategoryValidation {
    create() {
        return Joi.object({
            name: Joi.string()
                .min(2)
                .max(100)
                .required()
                .messages({
                    "string.empty": "Name is required",
                    "string.min": "Name must be at least 2 characters",
                    "string.max": "Name must be less than or equal to 100 characters"
                }),

            image: Joi.string()
                .uri()
                .optional()
                .messages({
                    "string.uri": "Image must be a valid URI"
                })
        });
    }

    update() {
        return Joi.object({
            name: Joi.string()
                .min(2)
                .max(100)
                .optional()
                .messages({
                    "string.min": "Name must be at least 2 characters",
                    "string.max": "Name must be at most 100 characters"
                }),

            image: Joi.string()
                .uri()
                .optional()
                .messages({
                    "string.uri": "Image must be a valid URI"
                })
        });
    }
}

export default new CategoryValidation();