import express from 'express';
import configEnv from './config/config.env.js';
import router from './routers/index.route.js';
import  connectDb  from './db/index.js';
import {globalErrorHandle} from './error/global-error-handle.js';

const app=express();
const PORT=configEnv.port;
app.use(express.json())
app.use("/api",router)

await connectDb();
app.use(globalErrorHandle);

app.listen(PORT,()=>console.log("bu server shu portda ishlayapti",PORT));
