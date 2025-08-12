import {Router} from 'express';
import {authGuard} from '../guards/auth-guards.js';
import {validate} from '../middleware/validate.js';
import {roleGuards} from '../guards/roule-guards.js';
import {Role} from '../const/reol-const.js';
import ImageValidation from '../validations/ImageValidation.js';
import imageController from '../controllers/image.controller.js';
import {fileUpload} from '../middleware/file-uploads.js';






const router = Router();

router
    .post("/",fileUpload.array("file",5), authGuard, roleGuards(Role.Admin, Role.Superadmin,Role.Sotuvchi),imageController.createImage)

    .get("/", imageController.getAll)

    .get("/:id", imageController.getById)

    .patch("/patch/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), validate(ImageValidation.update), imageController.update)

    .delete("/delete/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), imageController.delete)


export default router;

