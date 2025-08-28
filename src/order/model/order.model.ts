import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timeStamp } from "console";
import mongoose, { Document } from "mongoose";


@Schema({
    timestamps: true, versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    virtuals: true
})
export class Order extends Document {
    @Prop({ required: true })
    nechta: number;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Product"})
    productId:mongoose.Schema.Types.ObjectId;

}


const orderSchema=SchemaFactory.createForClass(Order)

export {orderSchema}