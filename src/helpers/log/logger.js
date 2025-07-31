import winston from "winston";
import 'winston-mongodb';
import config from '../../config/index.js'

const logger=winston.createLogger({
    level:'info',
    transports:[
        new winston.transports.File({filename:"logs/error.log",level:'error'}),
        new winston.transports.File({filename:"logs/combined.log"}),
        // new winston.transports.MongoDB({
        //     db:config.mongo_uri,
        //     collection:'error-log',
        //     level:'error',
        //     options: { useUnifiedTopology: true }
        // })
    ],
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
});

export default logger;
