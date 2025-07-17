import unversitetController from '../controller/unversitet.controller.js';
import {Router} from 'express';


const routerUnversitet=Router();

routerUnversitet
    .post("/",unversitetController.createUnversitet)
    .get("/",unversitetController.getUnversitet)
    .get("/:id",unversitetController.getByIdUnversitet)
    .patch("/:id",unversitetController.updateUnversitet)
    .delete("/:id",unversitetController.deleteUnversitet)



export default routerUnversitet;