import Books from '../modules/books.modul.js';
import { isValidObjectId } from 'mongoose';

class BooksController {
    async createBook(req, res) {
        try {
            const tekshir = await Books.findOne({ nomi: req.body.nomi });
            if (tekshir) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "bunday kitob allaqachon bor"
                })
            }
            const yangiKitob = await Books.create(req.body);
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: yangiKitob
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }



    async getBookMualif(req, res) {
        try {
            // 1111111111111111-sharttttttttttttttttttttttttttttttt
            const hammasi = await Books.aggregate([
                {
                    $group: {
                        _id: "$mualif_id",
                        ktoblarSoni: { $sum: 1 }
                    }
                },
                {
                    $lookup: {
                        from: "mualifs",
                        localField: "_id",
                        foreignField: "_id",
                        as: "mualifInfo"
                    }
                },
                {
                    $unwind: "$mualifInfo"
                },
                {
                    $project: {
                        _id: 0,
                        mualif: "$mualifInfo.name",
                        ktoblarSoni: 1,
                    }
                }

            ]);


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


    async getBook(req, res) {
        try {

            const hammasi = await Books.aggregate([
                {
                    $lookup: {
                        from: "mualifs",
                        localField: "mualif_id",
                        foreignField: "_id",
                        as: "mualifInfo"
                    }
                },
                {
                    $unwind: "$mualifInfo"
                },
                {
                    $lookup: {
                        from: "orders",
                        localField: "_id",
                        foreignField: "book_id",
                        as: "ordersInfo"
                    }

                },
                {
                    $unwind: "$ordersInfo"
                },
                {
                    $project: {
                        _id: 0,
                        nomi: 1,
                        mualif: "$mualifInfo.name",
                        orders: "$ordersInfo.total_price"
                    }
                }

            ]);
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





    async getByIdBook(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Books.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "books not found"
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



    async patchBook(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Books.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "books not found"
                })
            }

            const updateById = await Books.findByIdAndUpdate(id, req.body, { new: true })
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




    async deleteBook(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Books.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "books not found"
                })
            }

            await Books.findByIdAndDelete(id)
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








    async getBookJanr(req, res) {
        try {

            // 222222222222222222222-sharttttttttttttttttttttttt
            const hammasi = await Books.aggregate([
                {
                    $group: {
                        _id: "$janri",
                        umumiySotilgan: { $sum: 1 }
                    }
                },
                {
                    $sort: { umumiySotilgan: -1 }
                },
                {
                    $limit: 5
                },
                {
                    $project: {
                        _id: 0,
                        janr: "$_id",
                        umumiySotilgan: 1
                    }
                }
            ]);



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











    async getBookAvgPrice(req, res) {
        try {

            // 444444444444444444444444-sharttttttttttttttttttttttt
            const hammasi = await Books.aggregate([
                {
                    $group: {
                        _id: "$janri",
                        ortachaNarx: { $avg: "$narxi" }
                    },

                },
                {
                    $project: {
                        _id:0,
                        janri: "$_id",
                        ortachaNarx: 1
                    }
                }
            ]);



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

}

const booksController = new BooksController();
export default booksController;












// 222222222222222222222-sharttttttttttttttttttttttt
// const hammasi=await Books.aggregate([
//     {
//         $group:{
//             _id:"$janri",
//             umumiySotilgan:{$sum:1}
//         }
//     },
//     {
//         $sort:{umumiySotilgan:-1}
//     },
//     {
//         $limit:5
//     },
//     {
//         $project:{
//             _id:0,
//             janr:"$_id",
//             umumiySotilgan:1
//         }
//     }
// ]);

