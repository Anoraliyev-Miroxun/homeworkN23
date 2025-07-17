
import app from './app.js';
import {connectDb,envConfig} from './config/index.js';

const PORT=envConfig.port;



await connectDb();

app.listen(PORT,()=>console.log("bu server shu portda ishlayapti",PORT))