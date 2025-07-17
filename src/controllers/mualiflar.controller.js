import Mualif from '../modules/mualiflar.modul.js';
import { isValidObjectId } from 'mongoose';


class MualifController {
    async createMualif(req, res) {
        try {

            const yangiMualif = await Mualif.create(req.body);
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: yangiMualif
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }






    async engBoyMualif(req,res){
        try {
            const hammasi=await Mualif.aggregate([
                {
                    $lookup:{
                        from:"books",
                        localField:"_id",
                        foreignField:"mualif_id",
                        as:"booksInfo"
                    }
                },
                {
                    $unwind:'$booksInfo'
                },
                {
                    $lookup:{
                        from:"orders",
                        localField:"booksInfo._id",
                        foreignField:"book_id",
                        as:"ordersInfo"
                    }
                },
                {
                    $unwind:'$ordersInfo'
                },
                {
                    $group:{
                        _id:"$name",
                        umumiyPul:{$sum:"$ordersInfo.total_price"}
                    }
                },
                {
                    $project:{
                        _id:0,
                        name:"$_id",
                        umumiyPul:1
                    }
                }
            ]);
            console.log("salommmmmmmmmmm")
        console.log(hammasi)
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: hammasi
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }








    async getMualif(req, res) {
        try {
            const hammasi=await Mualif.find();
        
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: hammasi
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }



    async getByIdMualif(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Mualif.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "mualif not found"
                })
            }

            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: ById
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }



    async patchMualif(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Mualif.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "mualif not found"
                })
            }

            const updateById = await Mualif.findByIdAndUpdate(id, req.body, { new: true })
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: updateById
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }




    // Har bir yozuvchining nechta kitobi borligini chiqaring ($lookup, $group)
    // Eng ko‘p sotilgan janrlar ($group, $sort, $limit)
    // Eng ko‘p pul ishlagan yozuvchilar ($lookup, $group, $project)
    // O‘rtacha kitob narxi janr bo‘yicha ($group, $avg)



    async deleteMualif(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Mualif.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "mualif not found"
                })
            }

            await Mualif.findByIdAndDelete(id)
            return res.status(200).json({
                statusCode: 200,
                message: "success",
                data: {}
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }

}

const mualifController = new MualifController();
export default mualifController;
