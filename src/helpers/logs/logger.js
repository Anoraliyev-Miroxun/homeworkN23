import winston from 'winston';
import "winston-mongodb";
import config from '../../config/index.js';

// const customTime=winston.format((info)=>{
//     const date=new Date();
//     info.timestamp=data.toLocaleString("en-GB",{timeZone:"Asia/Tashkent",hour12:false})
//     return info
// })


const logger=winston.createLogger({
    level:"info",
    transports:[
        new winston.transports.File({filename:"logs/error.log",level:'error'}),
        new winston.transports.File({filename:"logs/combined.log"}),
    

        new winston.transports.MongoDB({
            db:config.MONGO_URI,
            collection:"errorLogs",
            level:"error"
        })
    ],
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )


})

export default logger;