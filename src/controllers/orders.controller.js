import Orders from '../modules/orders.modul.js';
import Books from '../modules/books.modul.js';
import { isValidObjectId } from 'mongoose';



class OrdersController {
    async createOrders(req, res) {
        try {
            const book=await  Books.findById(req.body.book_id);
            if(!book){
                return res.status(404).json({
                    message:"hatolik bunday didagi kitob yoq"
                });
            };

            const yangiOrders = await Orders.create({
                ...req.body,
                total_price:req.body.soni*book.narxi
            });
            return res.status(201).json({
                statusCode: 201,
                message: "success",
                data: yangiOrders
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error.message
            })
        }
    }



    async getOrders(req, res) {
        try {
            const hammasi = await Orders.aggregate([
                {
                    grops
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



    async getByIdOrders(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Orders.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "orders not found"
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



    async patchOrders(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Orders.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "orders not found"
                })
            }

            const updateById = await Orders.findByIdAndUpdate(id, req.body, { new: true })
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




    async deleteOrders(req, res) {
        try {
            const id = req.params.id;
            if (!isValidObjectId(id)) {
                return res.status(409).json({
                    statusCode: 409,
                    message: "Invalid ObjectId"
                })
            }

            const ById = await Orders.findById(id);
            if (!ById) {
                return res.status(404).json({
                    statusCode: 404,
                    message: "orders not found"
                })
            }

            await Orders.findByIdAndDelete(id)
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

const ordersController = new OrdersController();
export default ordersController;
