import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    soni: { type: Number},
    totle_price: { type:Number },
    mijoz_id: { type: Schema.Types.ObjectId, ref: 'User' },
    product_id: { type: Schema.Types.ObjectId, ref: "Product" }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

OrderSchema.virtual('dastafka',{
    ref:"Dastafka",
    localField:"_id",
    foreignField:"order_id"
})

const Order = model('Order', OrderSchema);
export default Order;



