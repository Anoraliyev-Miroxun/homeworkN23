import Joi from 'joi';
import { Role } from '../const/reol-const.js';

class UserValidation {
    create() {
        return Joi.object({
            fullName: Joi.string()
                .min(3)
                .max(100),

            userName: Joi.string()
                .min(3)
                .max(50),
                
            phoneNumber: Joi.string().max(100),

            password: Joi.string().max(),
            email: Joi.string()
                .email(),

            role: Joi.string()
                .valid(Role.Admin, Role.Mijoz, Role.Sotuvchi),

            isActive: Joi.boolean(),

            address: Joi.string()
                .max(200)
        });
    }

    singin() {
        return Joi.object({
            username: Joi.string().required().messages({
                'string.base': `"username" must be a string`,
                'any.required': `"username" is required`
            }),
            password: Joi.string().required().messages({
                'string.base': `"password" must be a string`,
                'any.required': `"password" is required`
            }),
        });
    }

    update() {
        return Joi.object({
            fullName: Joi.string().min(3).max(100),
            userName: Joi.string().alphanum().min(3).max(30),
            phoneNumber: Joi.string().pattern(/^[0-9]{9,15}$/),
            email: Joi.string().email(),
            role: Joi.string().valid(Role.Superadmin, Role.Admin, Role.Mijoz, Role.Sotuvchi),
            isActive: Joi.boolean(),
            address: Joi.string().max(255),
            // devices: Joi.array().items(
            //     Joi.object({
            //         deviceId: Joi.string().required(),
            //         deviceName: Joi.string().required(),
            //         ip: Joi.string().ip(),
            //     })
            // ),
        })
    }


    updatePassword() {
        return Joi.object({
            oldPassword: Joi.string()
                .min(6)
                .required()
                .messages({
                    'string.base': `"oldPassword" matn bo'lishi kerak`,
                    'string.empty': `"oldPassword" bo'sh bo'lmasligi kerak`,
                    'string.min': `"oldPassword" kamida 6 ta belgidan iborat bo'lishi kerak`,
                    'any.required': `"oldPassword" majburiy maydon`
                }),
            newPassword: Joi.string()
                .min(6)
                .required()
                .messages({
                    'string.base': `"newPassword" matn bo'lishi kerak`,
                    'string.empty': `"newPassword" bo'sh bo'lmasligi kerak`,
                    'string.min': `"newPassword" kamida 6 ta belgidan iborat bo'lishi kerak`,
                    'any.required': `"newPassword" majburiy maydon`
                }),
        });
    }

    forgetPasswrod() {
        return Joi.object({
            email: Joi.string().email().required().messages({
                "string.base": "Email noto‘g‘ri formatda",
                "string.email": "Email manzil noto‘g‘ri",
                "any.required": "Email bo‘sh bo‘lmasligi kerak"
            })
        });
    }

    confirmOtp() {
        return Joi.object({
            email: Joi.string().email().required().messages({
                'string.email': 'Email noto‘g‘ri formatda',
                'string.empty': 'Email bo‘sh bo‘lishi mumkin emas',
                'any.required': 'Email majburiy'
            }),
            otp: Joi.string().length(6).required().messages({
                'string.length': 'OTP aniq 6 raqamdan iborat bo‘lishi kerak',
                'string.empty': 'OTP bo‘sh bo‘lishi mumkin emas',
                'any.required': 'OTP majburiy'
            })
        });
    }

    confirmPassword() {
        return Joi.object({
            email: Joi.string().email().required().messages({
                'string.email': 'Email noto‘g‘ri formatda',
                'string.empty': 'Email bo‘sh bo‘lishi mumkin emas',
                'any.required': 'Email majburiy'
            }),
            newPassword: Joi.string().min(6).required().messages({
                'string.min': 'Yangi parol kamida 6 ta belgidan iborat bo‘lishi kerak',
                'string.empty': 'Yangi parol bo‘sh bo‘lishi mumkin emas',
                'any.required': 'Yangi parol majburiy'
            })
        });
    }

    updatePasswordForAdmin() {
        return Joi.object({
            oldPassword: Joi.string().min(6).required().messages({
                'string.min': 'Eski parol kamida 6 ta belgidan iborat bo‘lishi kerak',
                'string.empty': 'Eski parol bo‘sh bo‘lishi mumkin emas',
                'any.required': 'Eski parol majburiy'
            }),
            newPassword: Joi.string().min(6).required().messages({
                'string.min': 'Yangi parol kamida 6 ta belgidan iborat bo‘lishi kerak',
                'string.empty': 'Yangi parol bo‘sh bo‘lishi mumkin emas',
                'any.required': 'Yangi parol majburiy'
            })
        });
    }


}

export default new UserValidation();
