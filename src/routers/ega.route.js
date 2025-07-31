import {Router} from 'express';
import egaController from '../controllers/ega.controller.js';




const router=Router();

router
    .post("/",egaController.createEga)
    .get("/",egaController.getAll)
    .get("/:id",egaController.getById)


export default router;
