import {Router} from 'express';
import mualifController from '../controllers/mualiflar.controller.js';


const router=Router();

router
    .post("/",mualifController.createMualif)
    .get("/",mualifController.getMualif)
    .get("/engboy",mualifController.engBoyMualif) // 3-shart
    .get("/:id",mualifController.getByIdMualif)
    .patch("/:id",mualifController.patchMualif)
    .delete("/:id",mualifController.deleteMualif)


export default router;

