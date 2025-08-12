import {BaseController} from './base.controller.js';
import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import Saller from '../models/users.model.js';
import {successRes} from '../utils/successRes.js';









class ProductController extends BaseController {
    constructor() {
        super(Product,["category_id","saller_id"])
    }

    async createProduct(req, res, next) {
        try {
            
            const { saller_id, category_id } = req.body;
            await BaseController.checkById(Saller, saller_id);
            await BaseController.checkById(Category, category_id);
            const kurs = await Product.create({...req.body,image:req?.file?.filename ?? ""});
            return successRes(res, kurs, 201);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }



}

export default new ProductController();