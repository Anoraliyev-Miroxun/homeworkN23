import Joi from 'joi';


export const unversitetSchema=Joi.object({
    name:Joi.string().max(200).min(2).required(),
    fakultet:Joi.string().max(200).min(2)
});



export const unversitetSchemaUpdate=Joi.object({
    name:Joi.string().max(200).min(2),
    fakultet:Joi.string().max(200).min(2)
})