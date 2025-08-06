import {Router} from 'express';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import {Roles} from '../const/index.js';
import {validate} from '../middlewares/validate.js';
import mijozController from '../controllers/mijoz.controller.js';
import mijozValidation from '../validations/MijozValidation.js';
import {requestLimiter} from '../utils/reques-limit.js';






const router=Router();

router
    .post("/",validate(mijozValidation.create),mijozController.createMijoz)
    .post("/singin",requestLimiter(60,8),validate(mijozValidation.singin),mijozController.singin)
    .post("/token",mijozController.generetNewToken)
    .post("/singout",mijozController.singOut)

    .get("/",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN),mijozController.getAll)
    .get("/:id",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN,"ID"),mijozController.getById)

    .patch("/update/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),validate(mijozValidation.update),mijozController.update)
    .patch("/password/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),validate(mijozValidation.updatePassword),mijozController.updatePasswordForMijoz)
    .patch("/forget-password",validate(mijozValidation.forgetPassword),mijozController.forgetPassword)
    .patch("/confirm-otp",validate(mijozValidation.confirmOtp),mijozController.confirmOTP)
    .patch("/confirm-password",validate(mijozValidation.confirmPassword),mijozController.confirmPassword)

    .delete("/delete/:id",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN,"ID"),mijozController.delete)
    

export default router;
