import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/successRes.js';
import Product from "../models/product.model.js";
import Image from '../models/image.model.js';


class ImageController extends BaseController {
    constructor() {
        super(Product, ["product_id"])
    }

    async createImage(req, res, next) {
        try {
            const { product_id } = req.body;
            await BaseController.checkById(Product, product_id);
            console.log(req.body)


            const data = [];

            if (req.file) {
                const file = req.file;
                const save = await Image.create({
                    store_name: file.filename,
                    original_name: file.originalname,
                    mime_type: file.mimetype,
                    path: file.path,
                    size: file.size,
                    product_id
                })

                data.push(save)
            }
            if (req.files) {
                if (Array.isArray(req.files)) {
                    const files = req.files;
                    for (const file of files) {
                        const save = await Image.create({
                            store_name: file.filename,
                            original_name: file.originalname,
                            mime_type: file.mimetype,
                            path: file.path,
                            size: file.size,
                            product_id
                        })
                        data.push(save)

                    }

                }

            }

            if (typeof req.files === "object") {
                const files = Object.values(req.files).flat();
                for (const file of files) {
                    const save = await Image.create({
                        store_name: file.filename,
                        original_name: file.originalname,
                        mime_type: file.mimetype,
                        path: file.path,
                        size: file.size,
                        product_id
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

export default new ImageController();
