import { Schema, model } from "mongoose";

const KurslarSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    ega_id: { type: Schema.Types.ObjectId, ref: 'Ega' },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true, versionKey: false,
    virtuals:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

KurslarSchema.virtual("kursVideo",{
    ref:"KursVideo",
    localField:"_id",
    foreignField:"kurs_id"
})

KurslarSchema.virtual("order",{
    ref:"Order",
    localField:"_id",
    foreignField:'kurs_id'
})

const Kurslar = model('Kurslar', KurslarSchema);
export default Kurslar;



