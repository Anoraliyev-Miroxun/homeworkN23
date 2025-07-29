import Joi from 'joi';

class AdminValidation{
    static passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    create(){
        return Joi.object({
            username:Joi.string().required(),
            password:Joi.string().required().pattern(AdminValidation.passwordRegex),
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
            password:Joi.string().pattern(AdminValidation.passwordRegex),
            email:Joi.string()
        });
    };

    password(){
        return Joi.object({
            oldPassword:Joi.string().required(),
            newPassword:Joi.string().pattern(AdminValidation.passwordRegex).required()
        });
    };
    

    forgetPassword(){
        return Joi.object({
            email:Joi.string().email().required()
        })
    }

    confirmOTP(){
        return Joi.object({
            email:Joi.singin().email().required(),
            otp:Joi.string().length(6).required()
        })
    }

    confirmPassword(){
        return Joi.object({
            email: Joi.string().email().required(),
            newPassword: Joi.string().pattern(AdminValidation.passwordRegex).required()
        })
    }
}

export default new AdminValidation();