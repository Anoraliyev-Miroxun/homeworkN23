import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/successRes.js';
import Order from '../models/order.model.js';
import Product from "../models/product.model.js";
import Hamyon from '../models/hamyon.model.js';
import { AppError } from "../error/AppError.js";
import User from "../models/users.model.js";
import { Role } from "../const/reol-const.js";
import userController from '../controllers/user.controller.js';
import { contentSecurityPolicy } from "helmet";


class OrderController extends BaseController {
    constructor() {
        super(Order, ["product_id", "mijoz_id"]);
        this.ozgaruvchi=null;
    }

    async createOrder(req, res, next) {
        try {
            const { mijoz_id, product_id } = req.body;
            const product = await BaseController.checkById(Product, product_id);
            await BaseController.checkById(User, mijoz_id);
            const totle_price = (product?.price * req.body?.soni);

            const order = await Order.create({
                ...req.body,
                totle_price
            });
            return successRes(res, order, 201);
        } catch (error) {
            next(error)
        }
    }





}

export default new OrderController();