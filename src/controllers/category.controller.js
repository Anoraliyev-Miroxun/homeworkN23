import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/success-res.js';
import Category from '../models/category.model.js';
import { AppError } from "../error/AppError.js";
import { populate } from "dotenv";


class CategoryController extends BaseController {
    constructor() {
        super(Category,[{path:"kurslar",populate:{path:"ega_id"}}])
    }

    async createCategory(req, res, next) {
        try {
            const { name } = req.body;
            const exsistName = await Category.findOne({ name });
            if (exsistName) {
                throw new AppError("category arley exsist", 409);
            };
            const category = await Category.create({
                name,
                image:req?.file?.filename?? ""
            });
            successRes(res, category, 201);
        } catch (error) {
            next(error)
        }
    }


}

export default new CategoryController();
