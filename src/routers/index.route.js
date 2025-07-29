import routerAdmin from './admin.route.js';
import {Router} from 'express';
import {errorPage} from '../error/page-not-found.error.js';
import sallerRouter from './saller.route.js';

const router=Router();

router
    .use("/admin",routerAdmin)
    .use("/saller",sallerRouter)
    .use(errorPage)


export default router;
