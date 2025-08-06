import { Router } from 'express';
import categoryController from '../controllers/category.controller.js';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import { Roles } from '../const/index.js';
import categoryValidation from '../validations/CategoryValidation.js';
import { validate } from '../middlewares/validate.js';




const router = Router();

router
    .post("/", AuthGuar, roleGuard(Roles.ADMIN, Roles.SUPERADMIN), validate(categoryValidation.create), categoryController.createCategory)

    .get("/", categoryController.getAll)

    .get("/:id", categoryController.getById)

    .patch("/patch/:id", AuthGuar, roleGuard(Roles.ADMIN, Roles.SUPERADMIN), validate(categoryValidation.update), categoryController.update)

    .delete("/delete/:id", AuthGuar, roleGuard(Roles.ADMIN, Roles.SUPERADMIN), categoryController.delete)


export default router;
