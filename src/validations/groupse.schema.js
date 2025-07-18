import Joi from "joi";


export const groupsSchema=Joi.object({
    name:Joi.string().max(100).min(2).required(),
    oquvchilarSoni:Joi.number().max(100).min(8),
    unversitet_id:Joi.string()
});



export const groupsSchemaUpdate=Joi.object({
    name:Joi.string().max(100).min(2),
    oquvchilarSoni:Joi.number().max(100).min(8),
    unversitet_id:Joi.string()
});