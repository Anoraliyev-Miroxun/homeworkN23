import {Router} from 'express';
import sallerController from '../controllers/seller.controller.js';
import {uploadFile} from '../middlewares/file-uload.js';
import sallerValidation from '../validations/SallerValidation.js';
import {validate} from '../middlewares/validate.js';




const router=Router();

router
    .post("/",uploadFile.single("file"),sallerController.createSaller)
    .post("/singin",validate(sallerValidation.signin),sallerController.singIn)
    .post("/token",sallerController.generetNewToken)
    .post("/signout",sallerController.singOut)

    .get("/",sallerController.getAll)
    .get("/:id",sallerController.getById)

    .patch("/:id",sallerController.update)

    .delete("/:id",sallerController.delete)


export default router;
