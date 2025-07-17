import talabaController from '../controller/talaba.controller.js';
import {Router} from 'express';


const routerTalaba=Router();

routerTalaba
    .post("/",talabaController.createTalaba)
    .get("/",talabaController.getTalaba)
    .get("/:id",talabaController.getAllTalaba)
    .patch("/:id",talabaController.updateTalaba)
    .delete("/:id",talabaController.deleteTalaba)



export default routerTalaba;