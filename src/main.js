import {connectDb} from './db/index.js';
import express from 'express';
import {config} from 'dotenv';
import routerUnversitet from './routers/unversitet.route.js';
import routerGroups from './routers/group.route.js';
import routerTalaba from './routers/talaba.route.js';

config();


const PORT=Number(process.env.PORT);

const app=express();

app.use(express.json())

app.use("/unversitet",routerUnversitet)
app.use("/groups",routerGroups)
app.use("/talaba",routerTalaba)

await connectDb();



app.listen(PORT,()=>console.log("server shu portda ishlayapti",PORT))

