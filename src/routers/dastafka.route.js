import {Router} from 'express';
import {authGuard} from '../guards/auth-guards.js';
import {validate} from '../middleware/validate.js';
import {roleGuards} from '../guards/roule-guards.js';
import {Role} from '../const/reol-const.js';
import dastafkaValidation from '../validations/DastafkaValidation.js';
import dastafkaController from '../controllers/dastafka.controller.js';






const router = Router();

router
    .post("/", authGuard, roleGuards(Role.Mijoz), dastafkaController.createDastafka)

    .get("/",authGuard,roleGuards(Role.Admin, Role.Superadmin), dastafkaController.getAll)

    .get("/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin), dastafkaController.getById)

    .patch("/patch/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), validate(dastafkaValidation.update), dastafkaController.update)

    .delete("/delete/:id", authGuard, roleGuards(Role.Admin, Role.Superadmin,"ID"), dastafkaController.delete)


export default router;

