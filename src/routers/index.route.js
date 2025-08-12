import {Router} from 'express';
import routerSaller from './saller.route.js';
import routerMijoz from './mijoz.route.js';
import routerAdmin from './admin.route.js';
import routerCategory from './category.route.js';
import routerProduct from './product.route.js';
import routerOrder from './order.route.js';
import routerHamyon from './hamyon.route.js';
import routerDastafka from './dastafka.route.js';
import routerImage from './image.route.js';

const router=Router();

router
    .use("/saller",routerSaller)
    .use("/mijoz",routerMijoz)
    .use("/admin",routerAdmin)

    .use("/category",routerCategory)

    .use("/product",routerProduct)

    .use("/order",routerOrder)

    .use("/hamyon",routerHamyon)

    .use("/dastafka",routerDastafka)

    .use("/image",routerImage)

    
export default router;

