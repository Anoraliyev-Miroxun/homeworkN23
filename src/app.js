import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressWinston from 'express-winston';

import connectDb from './db/mongodb.js';
import logger from './helpers/logs/logger.js';
import winstonExpress from 'express-winston';
import { errorPage } from "./error/page-notfound.js";
import { globalErrorHandle } from './error/global-error-handle.js';
import router from './routers/index.route.js';
import { join } from 'path';


export async function application(app) {
    app.use(cors({
        origin: "*"
    }))

    app.use(helmet())

    app.use(cookieParser())

    app.use("/api/image", express.static(join(process.cwd(), "uploads")))

    app.use(express.json())

    await connectDb();

    app.use("/api", router)

    app.use(errorPage)

    app.use(globalErrorHandle);

    app.use(expressWinston.logger({
        winstonInstance: logger,
        msg: "HTTP {{req.url}} {{req.method}}",
        meta: true
    }))

    app.use(winstonExpress.errorLogger({
        winstonInstance: logger
    }))



}