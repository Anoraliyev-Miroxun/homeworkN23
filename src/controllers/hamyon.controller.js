import { BaseController } from "./base.controller.js";
import User from '../models/users.model.js';
import Hamyon from "../models/hamyon.model.js";
import { successRes } from "../utils/successRes.js";



class HamyonController extends BaseController {
    constructor(){
        super(Hamyon,["user_id"])
    }
    async createHamyon(req, res, next) {
        try {
            const user_id = req.user?.id;
            await BaseController.checkById(User, user_id);
            const data = await Hamyon.create(req.body);
            return successRes(res, data, 201)
        } catch (error) {
            next(error)
        }

    }
}

export default new HamyonController();
