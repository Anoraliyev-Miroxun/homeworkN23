import { isValidObjectId } from 'mongoose';
import { successRes } from '../utils/success-res.js';
import { AppError } from '../error/AppError.js';


export class BaseController {
    constructor(model,papulateFields=[]) {
        this.model = model,
        this.papulateFields=papulateFields
    };

    create = async (req, res, next) => {
        try {
            const data = await this.model.create(req.body);
            return successRes(res, data, 201);
        } catch (error) {
            next(error)
        }
    }

    getById = async (req, res, next) => {
        try {
            const id = req.params.id;
            await BaseController.checkById(this.model,id)
            let query= this.model.findById(id);
            const fields=this.papulateFields;
            if(fields?.length){
                fields.forEach(field=>query.populate(field))
            }
            console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ")
            const data=await query.exec();
            console.log("sssssssssssssssssssssssssss")
            return successRes(res, data)
        } catch (error) {
            next(error)
        }
    }

    getAll = async (req, res,next) => {
        try {
            const fields=this.papulateFields;
            let query=this.model.find();
            if(fields?.length){
                fields.forEach(field=>query.populate(field))
            }
            const data=await query.exec();
            return successRes(res, data)
        } catch (error) {
            next(error)
        }
    }

    update = async (req, res, next) => {
        try {
            const id = req.params.id;
            await BaseController.checkById(this.model,id)
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

    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            await BaseController.checkById(this.model,id)
            const dataa = await this.model.findById(id);
            if (!dataa) {
                throw new AppError("not found", 404);

            };
            await this.model.findByIdAndDelete(id);
            return successRes(res, {})
        } catch (error) {
            next(error)
        }
    }


    static async checkById(schema, id) {
        if (!isValidObjectId(id)) {
            throw new AppError("invalid objectid", 400)
        }

        const data = await schema.findById(id);
        if (!data) {
            throw new AppError("not found", 404)
        }
        return data;
    }
}