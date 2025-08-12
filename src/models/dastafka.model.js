import { Schema, model } from "mongoose";

const DastafkaSchema = new Schema({
    address: { type: String, required: true },
    order_id: { type: Schema.Types.ObjectId,ref:"Order" }
}, {
    timestamps: true,
    versionKey: false,
    virtuals: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

const Dastafka = model('Dastafka', DastafkaSchema);
export default Dastafka;