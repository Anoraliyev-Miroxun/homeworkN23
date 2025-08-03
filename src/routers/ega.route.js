import {Router} from 'express';
import egaController from '../controllers/ega.controller.js';
import {validate} from '../middlewares/validate.js';
import EgaValidation from '../validations/EgaValidation.js';
import {requestLimiter} from '../utils/reques-limit.js';
import { AuthGuar } from '../guards/auth.guard.js';
import {roleGuard} from '../guards/role.guard.js';
import { Roles } from '../const/index.js';





const router=Router();

router
    .post("/",validate(EgaValidation.createEga),egaController.createEga)
    .post("/singin",requestLimiter(60,10),validate(EgaValidation.signin),egaController.singIn)
    .post("/token",egaController.generetNewToken)
    .post("singout",egaController.singOut)

    .get("/",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.EGA,Roles.ADMIN),egaController.getAll)
    .get("/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),egaController.getById)

    .patch("/password/:id",AuthGuar,validate(EgaValidation.passwordChenge),roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),egaController.updatePasswordEga)
    .patch("/update/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),validate(EgaValidation.update),egaController.updateEga)
    .patch("/forget-password",validate(EgaValidation.forgetPassword),egaController.forgetPassword)
    .patch("/confirm-otp",validate(EgaValidation.confirmOtp),egaController.confirmOtp)
    .patch("/confirm-password",validate(EgaValidation.confirmPassword),egaController.confirmPassword)

    .delete("/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,"ID"),egaController.delete)


export default router;
