import {AppError} from './AppError.js';



export const errorPage=async(res,req,next)=>{
    throw new AppError("page not found",404);
}