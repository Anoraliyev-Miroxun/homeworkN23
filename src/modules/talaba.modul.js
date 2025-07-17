import { Schema, Types, model } from 'mongoose';


const schemaTalaba = new Schema({
    name: { type: String, required: true, unique: true },
    fakultet: { type: String },
    group_id: { type: Schema.Types.ObjectId, ref: "Groupse" }
}, { timestamps: true, });

const Talaba = model("Talaba", schemaTalaba);

export default Talaba;