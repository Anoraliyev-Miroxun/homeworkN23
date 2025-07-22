import adminController from '../controllers/admin.controller.js';
import {Router} from 'express';

const router=Router();

router
    .post("/",adminController.createAdmin)
    .post("/singin",adminController.singIn)
    .get("/",adminController.getAll)
    .get("/:id",adminController.getById)
    .patch("/:id",adminController.update)
    .delete("/:id",adminController.delete)

export default router;
