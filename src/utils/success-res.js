export const successRes=async(res,resData,statusCode=200)=>{
    return res.status(statusCode).json({
        statusCode,
        message:"succes",
        data:resData
    })
}