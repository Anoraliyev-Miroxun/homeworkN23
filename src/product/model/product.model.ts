import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({timestamps:true,versionKey:false,
    virtuals:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})
export class Product extends mongoose.Document {
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    soni:number;

    @Prop({required:true})
    price:number;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Category"})
    categoryId:mongoose.Schema.Types.ObjectId;

}

const productSchema=SchemaFactory.createForClass(Product)

productSchema.virtual("orders",{
    ref:"Order",
    localField:"_id",
    foreignField:"productId"
});

export {productSchema};
