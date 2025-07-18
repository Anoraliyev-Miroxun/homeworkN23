import Joi from "joi";



export const talabaSchema=Joi.object({
    name:Joi.string().required().max(100).min(2),
    fakultet:Joi.string().min(2).max(300),
    group_id:Joi.string().max(25).min(23)
});



export const talabaSchemaUpdate = Joi.object({
    name: Joi.string().max(100).min(2),
    fakultet: Joi.string().min(2).max(300),
    group_id: Joi.string().max(30).min(23)
});

