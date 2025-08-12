import {BaseController} from './base.controller.js';
import Category from '../models/category.model.js';
import {AppError} from '../error/AppError.js';
import {successRes} from '../utils/successRes.js';
import Dastafka from '../models/dastafka.model.js';
import Order from '../models/order.model.js';








class DastafkaController extends BaseController {
    constructor() {
        super(Dastafka,["order_id"])
    }

    async createDastafka(req, res, next) {
        try {
            const { order_id } = req.body;
            const order=await BaseController.checkById(Order,order_id);
            console.log(order)
            const dastafka = await Dastafka.create(req.body);
            console.log(dastafka)
            return successRes(res, dastafka, 201);
        } catch (error) {
            next(error)
        }
    }


}

export default new DastafkaController();