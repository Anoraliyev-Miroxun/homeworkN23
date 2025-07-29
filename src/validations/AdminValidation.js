import Joi from 'joi';

class AdminValidation{
    static passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    

    create(){
        return Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required().pattern(AdminValidation.passRegex),
            email:Joi.string().required()
        });
    };


    singin(){
        return Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required()
        });
    }

    update(){
        return Joi.object({
            username:Joi.string(),
            password:Joi.string().pattern(AdminValidation.passRegex),
            email:Joi.string()
        });
    };

    password(){
        return Joi.object({
            oldPassword:Joi.string().required(),
            newPassword:Joi.string().pattern(AdminValidation.passRegex).required()
        });
    };
    
}

export default new AdminValidation();