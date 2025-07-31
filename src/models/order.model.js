import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    mijoz_id: { type: Schema.Types.ObjectId, ref: 'Mijoz' },
    kurs_id: { type: Schema.Types.ObjectId, ref: "Kurslar" }
}, { timestamps: true, versionKey: false });

const Order = model('Order', OrderSchema);
export default Order;



