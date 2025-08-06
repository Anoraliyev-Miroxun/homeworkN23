import BaseController from '../controller/bases.controller.js';
import joinController from '../controller/join.controller.js';
import { Router } from 'express';
const tableController = new BaseController();
const router = Router();


router
    .get("/get",joinController.join)
    .post("/:table", tableController.create)
    .get("/:table", tableController.getAll)
    .get("/getbyid/:table/:id", tableController.getById)
    .patch("/patch/:table/:id", tableController.update)
    .delete("/delete/:table/:id", tableController.deletee)

export default router;