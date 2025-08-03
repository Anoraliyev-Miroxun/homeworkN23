import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/success-res.js';
import KursVideo from '../models/kurslar-video.model.js';
import Kurslar from '../models/kurslar.model.js';
import {fileUpload} from '../middlewares/file-uploads.js';


class KursVideoController extends BaseController {
    constructor() {
        super(Kurslar, ["kurs_id"])
    }

    async createKursVideo(req, res, next) {
        try {
            const { kurs_id } = req.body;
            await BaseController.checkById(Kurslar, kurs_id);


            const data = [];

            if (req.file) {
                const file = req.file;
                const save = await KursVideo.create({
                    store_name: file.filename,
                    original_name: file.originalname,
                    mime_type: file.mimetype,
                    path: file.path,
                    size: file.size,
                    kurs_id
                })

                data.push(save)
            }
            if (req.files) {
                if (Array.isArray(req.files)) {
                    const files = req.files;
                    for (const file of files) {
                        const save = await KursVideo.create({
                            store_name: file.filename,
                            original_name: file.originalname,
                            mime_type: file.mimetype,
                            path: file.path,
                            size: file.size,
                            kurs_id
                        })
                        data.push(save)

                    }

                }

            }

            if (typeof req.files === "object") {
                const files = Object.values(req.files).flat();
                for (const file of files) {
                    const save = await KursVideo.create({
                        store_name: file.filename,
                        original_name: file.originalname,
                        mime_type: file.mimetype,
                        path: file.path,
                        size: file.size,
                        kurs_id
                    })
                    data.push(save)

                }
            }




            return successRes(res, data, 201);
        } catch (error) {
            next(error)
        }
    }



}

export default new KursVideoController();
