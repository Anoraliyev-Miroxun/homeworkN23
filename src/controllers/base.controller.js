import { isValidObjectId } from 'mongoose';


export class BaseController {
    constructor(model) {
        this.model = model
    };

    create = async (req, res) => {
        try {
            const data = await this.model.create(req.body);
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error || "internal server error"
            })
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "invalid objectId"
                })
            };
            const data = await this.model.findById(id);
            if (!data) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "not found"
                })
            };

            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data
            });
        } catch (error) {
            return res.status(500).json({
                statuCode: 500,
                message: error || "internal server error"
            })
        }
    }

    getAll = async (req, res) => {
        try {
            const data = await this.model.find();
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data
            });
        } catch (error) {
            return res.status(500).json({
                statuCode: 500,
                message: error || "internal server error"
            })
        }
    }

    update = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "invalid objectId"
                })
            };
            const dataa = await this.model.findById(id);
            if (!dataa) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "not found"
                })
            };
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true });
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data
            });
        } catch (error) {
            return res.status(500).json({
                statuCode: 500,
                message: error || "internal server error"
            })
        }
    }

    delete = async (req, res) => {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "invalid objectId"
                })
            };
            const dataa = await this.model.findById(id);
            if (!dataa) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "not found"
                })
            };
         await this.model.findByIdAndDelete(id);
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data:{}
            });
        } catch (error) {
            return res.status(500).json({
                statuCode: 500,
                message: error || "internal server error"
            })
        }
    }
}