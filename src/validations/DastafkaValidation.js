import Joi from "joi";

class DastafkaValidation {
    create() {
        return Joi.object({
            address: Joi.string().min(3).max(255).required(),
            order_id: Joi.string().custom(objectId).required()
        });
    }

    update() {
        return Joi.object({
            address: Joi.string().min(3).max(255),
            order_id: Joi.string().custom(objectId)
        });
    }
}

export default new DastafkaValidation();