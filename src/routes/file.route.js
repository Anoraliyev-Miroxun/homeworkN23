import { Router } from "express";
// import { upload } from "../config/index.js";
import { fileController } from "../controllers/index.js";
import {fileUpload} from '../middleweares/file-uploads.js';

const router = Router();

router.post("/upload",fileUpload.array("file",5), fileController.fileUpload);

export default router;
