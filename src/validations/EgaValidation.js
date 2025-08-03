import Joi from "joi";

class EgaValidation {
    static passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    static phoneRegex = /^(\+?[1-9]\d{0,3})?[-.\s]?(\(?[1-9]\d{0,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,9}$/;

    createEga() {
        return Joi.object({

            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(EgaValidation.passwordRegex).required(),
            fullName: Joi.string().required(),
            wallet: Joi.number()
        });
    }

    signin() {
        return Joi.object({
            userName: Joi.string().required(),
            password: Joi.string().required()
        });
    }

    forgetPassword() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.empty": "Email is required",
                    "string.email": "Please provide a valid email"
                })
        });
    }

    confirmOtp() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.empty": "Email is required",
                    "string.email": "Please enter a valid email"
                }),

            otp: Joi.string()
                .length(6)
                .pattern(/^\d+$/)
                .required()
                .messages({
                    "string.empty": "OTP is required",
                    "string.length": "OTP must be 6 digits",
                    "string.pattern.base": "OTP must contain only numbers"
                })
        });
    }

    confirmPassword() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.empty": "Email is required",
                    "string.email": "Please enter a valid email"
                }),

            newPassword: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.empty": "New password is required",
                    "string.min": "New password must be at least 6 characters"
                })
        });
    }

    passwordChenge() {
        return Joi.object({
            oldPassword: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.empty": "Old password is required",
                    "string.min": "Old password must be at least 6 characters"
                }),

            newPassword: Joi.string()
                .min(6)
                .required()
                .invalid(Joi.ref('oldPassword'))
                .messages({
                    "string.empty": "New password is required",
                    "string.min": "New password must be at least 6 characters",
                    "any.invalid": "New password must be different from old password"
                })
        });
    }

    update() {
        return Joi.object({
            userName: Joi.string()
                .min(3)
                .max(30)
                .trim()
                .optional(),

            fullName: Joi.string()
                .min(3)
                .max(50)
                .trim()
                .optional(),

            email: Joi.string()
                .email()
                .optional(),

            password: Joi.string()
                .min(6)
                .max(100)
                .optional(),

            isActive: Joi.boolean()
                .optional(),

            wallet: Joi.number()
                .min(0)
                .optional(),

            image: Joi.string()
                .uri()
                .optional(),

            role: Joi.string()
                .valid("admin", "superadmin", "user", "ega") // kerakli rollarni o‘zingiz sozlashingiz mumkin
                .optional()
        });
    }

    wallet() {
        return Joi.object({
            wallet: Joi.number().min(0).required()
        });
    }
}

export default new EgaValidation();