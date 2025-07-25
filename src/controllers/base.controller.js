import { isValidObjectId } from 'mongoose';
import { successRes } from '../utils/success-res.js';

import {AppError} from '../error/AppError.js';


export class BaseController {
    constructor(model) {
        this.model = model
    };

    create = async (req, res) => {
        try {
            const data = await this.model.create(req.body);
            return successRes(res, data, 201);
        } catch (error) {
            next(error)
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                throw new AppError("invalid objectId", 400);
            };
            const data = await this.model.findById(id);
            if (!data) {
                throw new AppError("not found", 404);

            };

            return successRes(res, data)
        } catch (error) {
            next(error)
        }
    }

    getAll = async (req, res) => {
        try {
            const data = await this.model.find();
            return successRes(res, data)
        } catch (error) {
            next(error)
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                throw new AppError("invalid objectId", 400);

            };
            const dataa = await this.model.findById(id);
            if (!dataa) {
                throw new AppError("not found", 404);

            };
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true });
            return successRes(res, data)
        } catch (error) {
            next(error)
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                throw new AppError("invalid objectId", 400);

            };
            const dataa = await this.model.findById(id);
            if (!dataa) {
                throw new AppError("not found", 404);

            };
            await this.model.findByIdAndDelete(id);
            return successRes(res,{})
        } catch (error) {
            next(error)
        }
    }
}