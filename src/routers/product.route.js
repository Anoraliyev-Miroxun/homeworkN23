import {Router} from 'express';
import productValidation from '../validations/ProductValidation.js';
import {validate} from '../middleware/validate.js';
import {authGuard} from '../guards/auth-guards.js';
import {roleGuards} from '../guards/roule-guards.js';
import { Role } from '../const/reol-const.js';
import productController from '../controllers/product.controller.js';









const router=Router();

router
    .post("/",authGuard,roleGuards(Role.Superadmin,Role.Admin,Role.Sotuvchi),productController.createProduct)

    .get("/",productController.getAll)
    .get("/:id",productController.getById)

    .patch("/update/:id",authGuard,roleGuards(Role.Superadmin,Role.Admin,Role.Sotuvchi),productController.update)

    .delete("/delete/:id",authGuard,roleGuards(Role.Superadmin,Role.Admin,Role.Sotuvchi),productController.delete)
    

export default router;


