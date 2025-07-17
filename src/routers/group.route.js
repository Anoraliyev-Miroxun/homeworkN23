import groupsController from '../controller/groups.controller.js';
import {Router} from 'express';




const routerGroups=Router();

routerGroups
    .post("/",groupsController.createGroup)
    .get("/",groupsController.getGroup)
    .get("/:id",groupsController.getAllGroup)
    .patch("/:id",groupsController.updateGroup)
    .delete("/:id",groupsController.deleteGroup)




export default routerGroups;