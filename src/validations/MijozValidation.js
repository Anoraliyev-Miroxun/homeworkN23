import Joi from "joi";

class MijozValidation {
    create() {
        return Joi.object({
            userName: Joi.string()
                .min(3)
                .max(30)
                .required()
                .messages({
                    "string.base": "userName matn bolishi kerak",
                    "string.empty": "userName bosh bolmasligi kerak",
                    "any.required": "userName kiritilishi shart",
                }),

            fullName: Joi.string()
                .min(3)
                .max(100)
                .required()
                .messages({
                    "string.base": "fullName matn bolishi kerak",
                    "string.empty": "fullName bosh bolmasligi kerak",
                    "any.required": "fullName kiritilishi shart",
                }),

            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.email": "email notogri formatda",
                    "any.required": "email kiritilishi shart",
                }),

            password: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.min": "Parol kamida 6 ta belgidan iborat bolishi kerak",
                    "any.required": "Parol (hashedPassword) kiritilishi shart",
                }),

            isActive: Joi.boolean()
                .optional(),

            wallet: Joi.number()
                .min(0)
                .optional()
        });
    }

    update() {
        return Joi.object({
            userName: Joi.string()
                .min(3)
                .max(30)
                .messages({
                    "string.base": "userName matn bo‘lishi kerak",
                    "string.min": "userName eng kamida 3 ta belgidan iborat bo‘lishi kerak",
                    "string.max": "userName eng ko‘pi bilan 30 ta belgidan iborat bo‘lishi kerak",
                }),

            fullName: Joi.string()
                .min(3)
                .max(100)
                .messages({
                    "string.base": "fullName matn bo‘lishi kerak",
                    "string.min": "fullName eng kamida 3 ta belgidan iborat bo‘lishi kerak",
                    "string.max": "fullName eng ko‘pi bilan 100 ta belgidan iborat bo‘lishi kerak",
                }),

            email: Joi.string()
                .email()
                .messages({
                    "string.email": "email noto‘g‘ri formatda",
                }),

            hashedPassword: Joi.string()
                .min(6)
                .messages({
                    "string.min": "Parol kamida 6 ta belgidan iborat bo‘lishi kerak",
                }),

            isActive: Joi.boolean(),

            wallet: Joi.number()
                .min(0)
                .messages({
                    "number.min": "wallet manfiy bo‘lmasligi kerak"
                })
        });
    }

    singin() {
        return Joi.object({
            userName: Joi.string()
                .required()
                .messages({
                    "string.base": "userName matn bo‘lishi kerak",
                    "any.required": "userName majburiy",
                }),

            password: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.base": "password matn bo‘lishi kerak",
                    "string.min": "password kamida 6 ta belgidan iborat bo‘lishi kerak",
                    "any.required": "password majburiy",
                })
        });
    }

    updatePassword() {
        return Joi.object({
            oldPassword: Joi.string()
                .required()
                .messages({
                    "string.base": "Eski parol noto‘g‘ri formatda",
                    "any.required": "Eski parol majburiy",
                }),

            newPassword: Joi.string()
                .min(6)
                .required()
                .messages({
                    "string.base": "Yangi parol noto‘g‘ri formatda",
                    "string.min": "Yangi parol kamida 6 ta belgidan iborat bo‘lishi kerak",
                    "any.required": "Yangi parol majburiy",
                })
        });
    }

    forgetPassword() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.base": "Email noto‘g‘ri formatda",
                    "string.email": "To‘g‘ri email kiriting",
                    "any.required": "Email majburiy maydon",
                })
        });
    }

    confirmOtp() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.base": "Email noto‘g‘ri formatda",
                    "string.email": "To‘g‘ri email kiriting",
                    "any.required": "Email majburiy maydon",
                }),
            otp: Joi.string()
                .length(6)
                .required()
                .messages({
                    "string.base": "OTP noto‘g‘ri formatda",
                    "string.length": "OTP 6 ta belgidan iborat bo‘lishi kerak",
                    "any.required": "OTP majburiy maydon",
                })
        });
    }

    confirmPassword() {
        return Joi.object({
            email: Joi.string()
                .email()
                .required()
                .messages({
                    "string.base": "Email noto‘g‘ri formatda",
                    "string.email": "To‘g‘ri email kiriting",
                    "any.required": "Email majburiy maydon",
                }),
            newPassword: Joi.string()
                .min(6)
                .max(32)
                .required()
                .messages({
                    "string.base": "Parol noto‘g‘ri formatda",
                    "string.min": "Parol kamida 6 belgidan iborat bo‘lishi kerak",
                    "string.max": "Parol 32 belgidan oshmasligi kerak",
                    "any.required": "Yangi parol majburiy maydon",
                })
        });
    }
}

export default new MijozValidation();