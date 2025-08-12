import Joi from "joi";

class HamyonValidation {
    create() {
        return Joi.object({
            card_number: Joi.string().required().messages({
                'any.required': 'card_number majburiy',
                'string.base': 'card_number faqat matn bo‘lishi kerak',
            }),
            hisob: Joi.number().min(0).default(0).messages({
                'number.base': 'hisob raqam bo‘lishi kerak',
                'number.min': 'hisob 0 dan kam bo‘lmasligi kerak',
            }),
            user_id: Joi.string().hex().length(24).required().messages({
                'any.required': 'user_id majburiy',
                'string.hex': 'user_id noto‘g‘ri formatda',
                'string.length': 'user_id 24 belgidan iborat bo‘lishi kerak',
            }),
        });
    }

    update() {
        return Joi.object({
            card_number: Joi.string().optional().messages({
                'string.base': 'card_number faqat matn bo‘lishi kerak',
            }),
            hisob: Joi.number().min(0).optional().messages({
                'number.base': 'hisob raqam bo‘lishi kerak',
                'number.min': 'hisob 0 dan kam bo‘lmasligi kerak',
            }),
            user_id: Joi.string().hex().length(24).optional().messages({
                'string.hex': 'user_id noto‘g‘ri formatda',
                'string.length': 'user_id 24 belgidan iborat bo‘lishi kerak',
            }),
        });
    }
}

export default new HamyonValidation();