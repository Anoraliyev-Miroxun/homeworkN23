import {Router} from 'express';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import {Roles} from '../const/index.js';
import {validate} from '../middlewares/validate.js';
import kursvideoController from '../controllers/kursvideo.controller.js';
import kursvideoValidation from '../validations/KursvideoValidation.js';
import {fileUpload} from '../middlewares/file-uploads.js';






const router=Router();

router
    .post("/",fileUpload.array("file",5),AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN,Roles.EGA),validate(kursvideoValidation.create),kursvideoController.createKursVideo)

    .get("/",kursvideoController.getAll)
    .get("/:id",kursvideoController.getById)

    .patch("/update/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,Roles.EGA),validate(kursvideoValidation.update),kursvideoController.update)

    .delete("/delete/:id",AuthGuar,roleGuard(Roles.ADMIN,Roles.SUPERADMIN,Roles.EGA),kursvideoController.delete)
    

export default router;
