import logger from '../helpers/logs/logger.js';

export const globalErrorHandle=(err,req,res,next)=>{
    const statusCode=err.statusCode|| 500;
    const messaga=err.messaga || "invalit server error";

    logger.error(`${statusCode} ${messaga}`)

    return res.status(statusCode).json({
        statusCode,
        messaga
    })
}