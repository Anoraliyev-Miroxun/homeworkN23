import logger from '../helpers/log/logger.js';

export const globalErrorHandle=(err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message =err.message || "interval server error";

    logger.error(`${statusCode} ${message}`)

    return res.status(statusCode).json({
        statusCode,
        message
    })
}







// git init && git remote add origin <remote-repo-url> 
// && git remote -v && git add . && git commit -m 'matn' 
// && git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'


