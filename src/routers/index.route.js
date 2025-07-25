import routerAdmin from './admin.route.js';
import {Router} from 'express';
import {errorPage} from '../error/page-not-found.error.js';

const router=Router();

router
    .use("/admin",routerAdmin)
    .use(errorPage)

export default router;
