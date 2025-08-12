import {Router} from 'express';
import orderValidation from '../validations/OrderValidation.js';
import {validate} from '../middleware/validate.js';
import {authGuard} from '../guards/auth-guards.js';
import {roleGuards} from '../guards/roule-guards.js';
import { Role } from '../const/reol-const.js';
import orderController from '../controllers/order.controller.js';









const router=Router();

router
    .post("/",authGuard,roleGuards(Role.Mijoz),orderController.createOrder)

    .get("/",authGuard,roleGuards(Role.Mijoz,Role.Admin,Role.Superadmin,Role.Sotuvchi),orderController.getAll)
    .get("/:id",authGuard,roleGuards(Role.Mijoz,Role.Admin,Role.Superadmin,Role.Sotuvchi),orderController.getById)

    .patch("/update/:id",authGuard,roleGuards(Role.Superadmin,Role.Mijoz),orderController.update)

    .delete("/delete/:id",authGuard,roleGuards(Role.Superadmin,Role.Admin,Role.Mijoz),orderController.delete)
    

export default router;


