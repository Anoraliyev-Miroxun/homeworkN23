import {Router} from 'express';
import orderController from '../controllers/order.controller.js';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import {Roles} from '../const/index.js';
import {validate} from '../middlewares/validate.js';
import orderValidation from '../validations/OrderValidation.js';






const router=Router();

router
    .post("/",AuthGuar,validate(orderValidation.create),orderController.createOrder)

    .get("/",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN),orderController.getAll)
    .get("/:id",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN),orderController.getById)

    .patch("/update/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN),validate(orderValidation.update),orderController.update)

    .delete("/delete/:id",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN),orderController.delete)
    

export default router;
