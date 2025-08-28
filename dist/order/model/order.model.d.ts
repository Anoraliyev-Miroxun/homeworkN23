import mongoose, { Document } from "mongoose";
export declare class Order extends Document {
    nechta: number;
    productId: mongoose.Schema.Types.ObjectId;
}
declare const orderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order, any, {}> & Order & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Order> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export { orderSchema };
