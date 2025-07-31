import { Schema, model } from "mongoose";
import { Roles } from "../const/index.js";


const EgaSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    wallet: { type: Number, default: 0 },
    image: { type: String },
    role: { type: String, default: Roles.EGA },
}, {
    timestamps: true,
    versionKey: false,
    virtuals: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

EgaSchema.virtual('kurslar', {
    ref: 'Kurslar',
    localField: '_id',
    foreignField: 'ega_id'
});

const Ega = model('Ega', EgaSchema);
export default Ega;