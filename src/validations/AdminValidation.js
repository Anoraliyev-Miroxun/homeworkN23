import Joi from 'joi';

class AdminValidation{
    constructor(){
        this.passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    }

    create(data){
        const admin=Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required().pattern(this.passRegex),
            email:Joi.string().required()
        });

        return admin.validate(data)
    };


    singin(data){
        const admin=Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required()
        });
        return admin.validate(data)
    }

    update(data){
        const admin=Joi.object({
            username:Joi.string(),
            password:Joi.string().pattern(this.passRegex),
            email:Joi.string()
        });

        return admin.validate(data)
    };


}

export default new AdminValidation();