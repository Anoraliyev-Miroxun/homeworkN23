import Joi from "joi";

class OrderValidation {

    create() {
        return Joi.object({
            status: Joi.string().valid("pending", "approved", "rejected").default("pending"),
            soni: Joi.number().required(),
            totle_price: Joi.number().required(),
            mijoz_id: Joi.string().custom(objectId).required(),
            kurs_id: Joi.string().custom(objectId).required()
        });
    }


    update() {
        return Joi.object({
            status: Joi.string().valid("pending", "approved", "rejected"),
            soni: Joi.number(),
            totle_price: Joi.number(),
            mijoz_id: Joi.string().custom(objectId),
            kurs_id: Joi.string().custom(objectId)
        });
    }
}

export default new OrderValidation();