import {Router} from 'express';
import controller from '../controllers/base.controller.js';


const router=Router();

router.post("/:table",controller.create)
    .get("/:table",controller.getAll)
    .get("/:table/:id",controller.getById)
    .patch("/:table/:id",controller.update)
    .delete("/:table/:id",controller.delete)


export default router;
