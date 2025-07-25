export const roleGuard=(...role)=>{
    return async function(req,res,next){
        try {
            if((req.user?.role && role.includes(req.user.role))
              || (role.includes("ID")&& req.params?.id===req.user?.id)){
                return next();
            }

            return res.status(403).json({
                statusCode:403,
                message:"forbiden user"
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:"interval server error"
            })
        }
    }
}