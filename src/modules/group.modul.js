import { Schema, Types, model } from 'mongoose';


const schemaGroup = new Schema({
    name: { type: String, required: true, unique: true },
    oquvchilarSoni: { type: Number },
    unversitet_id: { type: Schema.Types.ObjectId, ref: "Unversitet" }
}, {
    timestamps: true,
    virtuals: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

schemaGroup.virtual("talaba_id", {
    ref: "Talaba",
    localField: "_id",
    foreignField: "group_id"
})

const Groupse = model("Groupse", schemaGroup);

export default Groupse;