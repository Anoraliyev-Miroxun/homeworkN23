

import Groupse from '../modules/group.modul.js';
import { isValidObjectId } from 'mongoose';



class GroupsController {
    async createGroup(req, res) {
        try {
            const exsistGroups = await Groupse.findOne({ name: req.body.name });
            if (exsistGroups) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "bunday groups alaqachon bor"
                })
            }


            const yangiGroups = await Groupse.create(req.body);

            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: yangiGroups
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "groups.controller.js da catchga tushdi"
            })
        }
    }


    async getGroup(req, res) {
        try {
            const hammaGroups = await Groupse.find().populate("unversitet_id").populate("talaba_id");
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: hammaGroups
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }



    async getAllGroup(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Groupse.findById(id).populate("unversitet_id").populate("talaba_id")
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



    async updateGroup(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Groupse.findById(id);
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            const ynagilanganUnversitet = await Groupse.findOneAndUpdate(id, req.body, { new: true }).populate("unversitet_id").populate("talaba_id")
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



    async deleteGroup(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Groupse.findById(id).populate("unversitet_id").populate("talaba_id")
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            await Groupse.findByIdAndDelete(id)
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




const groupsController=new GroupsController();

export default groupsController;


