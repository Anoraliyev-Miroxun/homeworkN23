import {Router} from 'express';
import {authGuard} from '../guards/auth-guards.js';
import {validate} from '../middleware/validate.js';
import {roleGuards} from '../guards/roule-guards.js';
import {Role} from '../const/reol-const.js';
import hamyonValidation from '../validations/HamyonValidation.js';
import hamyonController from '../controllers/hamyon.controller.js';






const router = Router();

router
    .post("/", authGuard, roleGuards(Role.Admin, Role.Superadmin,Role.Mijoz,Role.Sotuvchi), hamyonController.createHamyon)

    .get("/",authGuard,roleGuards(Role.Admin, Role.Superadmin), hamyonController.getAll)

    .get("/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), hamyonController.getById)

    .patch("/patch/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"),hamyonController.update)

    .delete("/delete/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), hamyonController.delete)


export default router;

