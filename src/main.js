import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import {errorHandle} from './middlewares/error.middleware.js';
import router from './routers/table.route.js';

const app=new Koa();
const port=7777;

app.use(bodyparser());

app.use(errorHandle);

app.use(router.routes())
    .use(router.allowedMethods())


app.listen(port,()=>console.log("bu server shu portda ishlayapti",port))

