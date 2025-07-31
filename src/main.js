import express from 'express';
import configEnv from './config/index.js';
import { application } from './app.js';

const app = express();

const PORT = configEnv.port;

await application(app)

app.listen(PORT, () => console.log("bu server shu portda ishlayapti", PORT));
