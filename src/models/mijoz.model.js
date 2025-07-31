import { Schema, model } from "mongoose";

const MijozSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    wallet: { type: Number, default: 0 }
}, {
    timestamps: true,
    versionKey: false,
    virtuals: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

MijozSchema.virtual('order', {
    ref: "Order",
    localField: '_id',
    foreignField: 'mijoz_id'
});

const Mijoz = model('Mijoz', MijozSchema);
export default Mijoz;



