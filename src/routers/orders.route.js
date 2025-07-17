import {Router} from 'express';
import ordersController from '../controllers/orders.controller.js';


const router=Router();

router
    .post("/",ordersController.createOrders)
    .get("/",ordersController.getOrders)
    .get("/:id",ordersController.getByIdOrders)
    .patch("/:id",ordersController.patchOrders)
    .delete("/:id",ordersController.deleteOrders)


export default router;
