import routerAdmin from './admin.route.js';
import {Router} from 'express';
import {errorPage} from '../error/page-not-found.error.js';

import routeKurs from './kurslar.route.js';
import routeCategory from './category.route.js';
import routeEga from './ega.route.js';
import routerOrder from './order.route.js';
import routerKursvideo from './kurs-video.route.js';
import routerMijoz from './mijoz.route.js';

const router=Router();

router
    .use("/admin",routerAdmin)
    .use("/ega",routeEga)
    .use("/category",routeCategory)
    .use("/kurs",routeKurs)
    .use("/order",routerOrder)
    .use("/kursvideo",routerKursvideo)
    .use("/mijoz",routerMijoz)
    .use(errorPage)


export default router;
