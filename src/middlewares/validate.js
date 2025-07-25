export const validate=(schemaValidate)=>{
    return async function(req,res,next){
        try {
            const validate=schemaValidate();
            const {error}=validate.validate(req.body);
            if(error){
                return res.status(422).json({
                    statusCode:422,
                    message:error.details[0]?.message ?? "error chiqdi validateda"
                })
            }
            next();
        } catch ( error) {
            return res.status(500).json({
                statusCode:500,
                message:"invterval server error"
            })
        }
    }
}