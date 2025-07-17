import express from 'express';
import {join} from 'path';
import {pageRouter} from './routers/index.js';



const app=express();

app.use(express.static(join(process.cwd(),"public")));

app.set("view engine","ejs");
app.set("views",join(process.cwd(),"src","views"));


app.use("/",pageRouter);


export default app;
