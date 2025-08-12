import {Router} from 'express';
import {authGuard} from '../guards/auth-guards.js';
import {validate} from '../middleware/validate.js';
import {roleGuards} from '../guards/roule-guards.js';
import {Role} from '../const/reol-const.js';
import categoryValidation from '../validations/CategoryValidation.js';
import categoryController from '../controllers/category.controller.js';






const router = Router();

router
    .post("/", authGuard, roleGuards(Role.Admin, Role.Superadmin), categoryController.createCategory)

    .get("/", categoryController.getAll)

    .get("/:id", categoryController.getById)

    .patch("/patch/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin), categoryController.update)

    .delete("/delete/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin), categoryController.delete)


export default router;