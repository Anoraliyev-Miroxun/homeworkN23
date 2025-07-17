import Talaba from '../modules/talaba.modul.js';
import { isValidObjectId } from 'mongoose';
class TalabaController {
    async createTalaba(req, res) {
        try {
            const exsistTalaba = await Talaba.findOne({ name: req.body.name });
            if (exsistTalaba) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "bunday unversitet alaqachon bor"
                })
            }


            const yangiUnversitet = await Talaba.create(req.body);

            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: yangiUnversitet
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }


    async getTalaba(req, res) {
        try {
            const hammaUnversitet = await Talaba.find().populate({path:"group_id",populate:{path:"unversitet_id"}});
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: hammaUnversitet
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }



    async getAllTalaba(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Talaba.findById(id).populate({path:"group_id",populate:{path:"unversitet_id"}});
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: hammaUnversitet
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }



    async updateTalaba(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Talaba.findById(id);
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            const ynagilanganUnversitet = await Talaba.findOneAndUpdate(id, req.body, { new: true }).populate({path:"group_id",populate:{path:"unversitet_id"}});
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: ynagilanganUnversitet
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }



    async deleteTalaba(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Talaba.findById(id).populate({path:"group_id",populate:{path:"unversitet_id"}});
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            await Talaba.findByIdAndDelete(id)
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: {}
            });

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }

}



const talabaController=new TalabaController();

export default talabaController;