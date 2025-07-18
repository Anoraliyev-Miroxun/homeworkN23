import Unversitet from '../modules/unersitet.modul.js';
import mongoose, { isValidObjectId } from 'mongoose';
import { unversitetSchema, unversitetSchemaUpdate } from '../validations/index.js';

export class UnversitetController {
    async createUnversitet(req, res) {
        try {
            const { error } = unversitetSchema.validate(req.body)
            if (error) {
                return res.status(400).json({
                    statusCode: 400,
                    message: error.message
                });
            };

            const exsistUnversitet = await Unversitet.findOne({ name: req.body.name });
            console.log(exsistUnversitet);
            if (exsistUnversitet) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "bunday unversitet alaqachon bor"
                })
            }


            const yangiUnversitet = await Unversitet.create(req.body);

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


    async getUnversitet(req, res) {
        try {
            const hammaUnversitet = await Unversitet.aggregate([
                {
                    $lookup: {
                        from: "groupses",
                        localField: "_id",
                        foreignField: "unversitet_id",
                        as: "groupsInfo"
                    }
                },
                {
                    $unwind: "$groupsInfo"
                },
                {
                    $lookup: {
                        from: "talabas",
                        localField: "groupsInfo._id",
                        foreignField: "group_id",
                        as: "talabaInfo"
                    }
                },
                {
                    $unwind: "$talabaInfo"
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        group_name: "$groupsInfo.name",
                        talaba_name: '$talabaInfo.name'
                    }
                }
            ]);
            console.log(hammaUnversitet)
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: hammaUnversitet
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                statusCode: 500,
                message: error.message || "unversitet.controller.js da catchga tushdi"
            })
        }
    }



    async getByIdUnversitet(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Unversitet.aggregate([
                {
                    $match: { _id: new mongoose.Types.ObjectId(id) }
                },
                {
                    $lookup: {
                        from: "groupses",
                        localField: "_id",
                        foreignField: "unversitet_id",
                        as: "groupsInfo"
                    }
                },
                {
                    $unwind: "$groupsInfo"
                },
                {
                    $lookup: {
                        from: "talabas",
                        localField: "groupsInfo._id",
                        foreignField: "group_id",
                        as: "talabaInfo"
                    }
                },
                {
                    $unwind: "$talabaInfo"
                },
                {
                    $project: {
                        _id: 0,
                        name: 1,
                        group_name: "$groupsInfo.name",
                        talaba_name: '$talabaInfo.name'
                    }
                }
            ]);
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



    async updateUnversitet(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }

            const { error } = unversitetSchemaUpdate.validate(req.body)
            if (error) {
                return res.status(400).json({
                    statusCode: 400,
                    message: error.message
                });
            };
            const hammaUnversitet = await Unversitet.findById(id);
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            const ynagilanganUnversitet = await Unversitet.findByIdAndUpdate(id, req.body, { new: true })

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


    async deleteUnversitet(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(400).json({
                    statusCode: 400,
                    message: "id hato kritildi qaytadan urining"
                })
            }


            const hammaUnversitet = await Unversitet.findById(id)
            if (!hammaUnversitet) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "bunday id dagi unversitet topilmadi"
                })
            }

            await Unversitet.findByIdAndDelete(id)
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



const unversitetController = new UnversitetController();
export default unversitetController;
