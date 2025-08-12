import {Router} from 'express';
import userController from '../controllers/user.controller.js';
import {authGuard} from '../guards/auth-guards.js';
import {roleGuards} from '../guards/roule-guards.js';
import {Role} from '../const/reol-const.js';
import {validate} from '../middleware/validate.js';
import userValidation from '../validations/UserValidation.js';
import {requestLimiter} from '../utils/reqest-limit.js';

const router=Router();

router
    .post("/",userController.createUser)
    .post("/singin",requestLimiter(60,8),userController.singIn)
    .post("/token",userController.generetNewToken)
    .post("/singout",authGuard,userController.singOut)

    .get("/",authGuard,roleGuards(Role.Superadmin,Role.Admin),userController.getAll)
    .get("/:id",authGuard,roleGuards(Role.Admin,Role.Superadmin,"ID"),userController.getById)

    .patch("/password/:id",authGuard,roleGuards(Role.Admin,Role.Superadmin,"ID"),userController.updatePasswordForAdmin)
    .patch("/forget-password",userController.forgetPassword)
    .patch("/confirm-otp",userController.confirmOtp)
    .patch("/confirm-password",userController.confirmPassword)
    .patch("/:id",authGuard,roleGuards(Role.Admin,Role.Superadmin,"ID"),userController.updateUser)


export default router;
