import {Router} from 'express';
import kursController from '../controllers/kurslar.controller.js';
import { AuthGuar } from '../guards/auth.guard.js';
import { roleGuard } from '../guards/role.guard.js';
import {Roles} from '../const/index.js';
import egaController from '../controllers/ega.controller.js';
import {validate} from '../middlewares/validate.js';
import kursValidation from '../validations/KursValidation.js';






const router=Router();

router
    .post("/",AuthGuar,validate(kursValidation.create),roleGuard(Roles.SUPERADMIN,Roles.ADMIN,Roles.EGA),kursController.createKurs)

    .get("/",kursController.getAll)
    .get("/:id",kursController.getById)

    .patch("/update/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,Roles.EGA),validate(kursValidation.update),kursController.update)

    .delete("/delete/:id",AuthGuar,roleGuard(Roles.SUPERADMIN,Roles.ADMIN,Roles.EGA),egaController.delete)
    

export default router;
