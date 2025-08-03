import { BaseController } from "./base.controller.js";
import { successRes } from '../utils/success-res.js';
import Order from '../models/order.model.js';
import Kurslar from '../models/kurslar.model.js';
import Mijoz from '../models/mijoz.model.js';


class OrderController extends BaseController {
    constructor() {
        super(Order,["kurs_id","mijoz_id"])
    }

    async createOrder(req, res, next) {
        try {
            const {mijoz_id,kurs_id}=req.body;
            await BaseController.checkById(Kurslar,kurs_id);
            await BaseController.checkById(Mijoz,mijoz_id);
            const order=await Order.create(req.body);
            return successRes(res,order,201);
        } catch (error) {
            next(error)
        }
    }

    



}

export default new OrderController();
