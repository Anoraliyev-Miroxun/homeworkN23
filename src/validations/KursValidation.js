import Joi from "joi";

class KursValidation {

    create() {
        return Joi.object({
            title: Joi.string()
                .min(2)
                .max(200)
                .required()
                .messages({
                    "string.empty": "Title is required",
                    "string.min": "Title must be at least 2 characters",
                    "string.max": "Title must be at most 200 characters"
                }),

            price: Joi.number()
                .min(0)
                .required()
                .messages({
                    "number.base": "Price must be a number",
                    "number.min": "Price must be a non-negative number"
                }),

            quantity: Joi.number()
                .integer()
                .min(0)
                .required()
                .messages({
                    "number.base": "Quantity must be a number",
                    "number.min": "Quantity must be a non-negative number"
                }),

            description: Joi.string()
                .max(1000)
                .allow("", null)
                .optional(),

            ega_id: Joi.string()
                .required()
                .messages({
                    "string.empty": "Ega ID is required"
                }),

            category_id: Joi.string()
                .required()
                .messages({
                    "string.empty": "Category ID is required"
                })
        });
    }

    
    update() {
        return Joi.object({
            title: Joi.string()
                .min(2)
                .max(100)
                .optional(),

            price: Joi.number()
                .min(0)
                .optional(),

            quantity: Joi.number()
                .min(0)
                .optional(),

            description: Joi.string()
                .max(1000)
                .optional(),

            ega_id: Joi.string()
                .optional(),

            category_id: Joi.string()
                .optional()

        });
    }
}

export default new KursValidation();