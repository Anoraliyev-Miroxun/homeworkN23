import express from 'express';
import configEnv from './config/config.env.js';
import router from './routers/index.route.js';
import  connectDb  from './db/index.js';
import {globalErrorHandle} from './error/global-error-handle.js';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app=express();
const PORT=configEnv.port;

app.use(cors({
    origin:"*"
}))
app.use(helmet());
app.use(express.json());
app.use(cookieParser())

await connectDb();

app.use("/api",router);

app.use(globalErrorHandle);

app.listen(PORT,()=>console.log("bu server shu portda ishlayapti",PORT));
