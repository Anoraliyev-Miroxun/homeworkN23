import express from 'express';
import config from './config/index.js';
import { application } from './app.js';


const app = express();

const port = config.PORT;


await application(app)

app.listen(port, () => console.log("bu server shu portda ishlayapti", port));