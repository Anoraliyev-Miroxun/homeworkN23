import adminController from '../controllers/admin.controller.js';
import { Router } from 'express';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import adminValidation from '../validations/AdminValidation.js';
import { validate } from '../middlewares/validate.js';
import { requestLimiter } from '../utils/reques-limit.js';

const router = Router();

router
    .post("/", AuthGuar, roleGuard("SUPERADMIN"), validate(adminValidation.create), adminController.createAdmin)
    .post("/singin",requestLimiter(60,10),validate(adminValidation.singin), adminController.singIn)
    .post("/token", adminController.generetNewToken)
    .post("/singout", AuthGuar, adminController.singOut)
    .get("/", AuthGuar, roleGuard("SUPERADMIN"), adminController.getAll)
    .get("/:id", AuthGuar, roleGuard("SUPERADMIN", "ID"), adminController.getById)
    .patch("/password/:id", AuthGuar, roleGuard("SUPERADMIN", "ID"), validate(adminValidation.password), adminController.updatePasswordForAdmin)
    .patch("/:id", AuthGuar, roleGuard("SUPERADMIN", "ID"), validate(adminValidation.update), adminController.update)
    .delete("/:id", AuthGuar, roleGuard("SUPERADMIN"), adminController.delete)

export default router;
