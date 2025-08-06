import express from 'express';
import router from './routers/tables.route.js';


const port=2222;
const app=express();

app.use(express.json());
app.use("/postgres",router)
app.listen(port,()=>console.log("server shu portda ishlayapti",port));