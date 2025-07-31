import {Router} from 'express';
import categoryController from '../controllers/category.controller.js';




const router=Router();

router
    .post("/",categoryController.createCategory)
    .get("/",categoryController.getAll)
    .get("/:id",categoryController.getById)
    

export default router;
