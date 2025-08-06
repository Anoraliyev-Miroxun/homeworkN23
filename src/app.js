import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import winstonExpress from 'express-winston';
import { join } from 'path';
import router from './routers/index.route.js';
import connectDb from './db/index.js';

import { globalErrorHandle } from './error/global-error-handle.js';
import logger from './helpers/log/logger.js';
import expressWinston from 'express-winston';
import { errorPage } from './error/page-not-found.error.js';

export async function application(app) {

    app.use(cors({
        origin: "*"
    }))

    app.use(helmet());

    app.use(express.json());

    app.use(cookieParser())

    app.use("/api/kursvideo", express.static(join(process.cwd(), "uploads")))

    await connectDb();

    app.use("/api", router);

    app.use(errorPage)

    app.use(globalErrorHandle);

    app.use(expressWinston.logger({
        winstonInstance: logger,
        msg: 'HTTP {{req.url}} {{req.method}}',
        meta: true
    }))

    app.use(winstonExpress.errorLogger({
        winstonInstance: logger
    }))

}