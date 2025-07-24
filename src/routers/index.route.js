import routerAdmin from './admin.route.js';
import {Router} from 'express';

const router=Router();

router.use("/admin",routerAdmin)

export default router;
