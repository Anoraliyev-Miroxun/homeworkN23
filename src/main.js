import express from 'express';
import {config} from 'dotenv';
import {connectDb} from './config/db.connect.js';
import routerBooks from './routers/books.route.js';
import routerMualif from './routers/mualiflar.route.js';
import routerOrders from './routers/orders.route.js';


config();
const app=express();
const PORT=process.env.PORT;

app.use(express.json());

app.use("/books",routerBooks);
app.use("/mualif",routerMualif);
app.use("/orders",routerOrders);

await connectDb();
app.listen(PORT,()=>console.log("bu server shu portda ishlayapti",PORT));



