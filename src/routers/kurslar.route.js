import {Router} from 'express';
import kursController from '../controllers/kurslar.controller.js';




const router=Router();

router
    .post("/",kursController.createKurs)
    .get("/",kursController.getAll)
    .get("/:id",kursController.getById)
    

export default router;
