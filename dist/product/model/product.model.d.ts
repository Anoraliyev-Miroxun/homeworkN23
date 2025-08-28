import mongoose from "mongoose";
export declare class Product extends mongoose.Document {
    name: string;
    soni: number;
    price: number;
    categoryId: mongoose.Schema.Types.ObjectId;
}
declare const productSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<Product> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export { productSchema };
