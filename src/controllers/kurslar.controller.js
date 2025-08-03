import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/success-res.js';
import Kurslar from '../models/kurslar.model.js';
import Ega from "../models/ega.model.js";
import Category from "../models/category.model.js";


class KurslarController extends BaseController {
    constructor() {
        super(Kurslar,["category_id","ega_id"])
    }

    async createKurs(req, res, next) {
        try {
            const { ega_id, category_id } = req.body;
            await BaseController.checkById(Ega, ega_id);
            await BaseController.checkById(Category, category_id);
            const kurs = await Kurslar.create({...req.body,image:req?.file?.filename});
            successRes(res, kurs, 201);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }



}

export default new KurslarController();
