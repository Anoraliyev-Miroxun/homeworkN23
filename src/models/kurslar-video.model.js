import { Schema, model } from "mongoose";

const KursVideoSchema = new Schema({
    title: { type: String, required: true, },
    videoUrl: { type: String,unique:true},
    kurs_id: { type: Schema.Types.ObjectId, ref: "Kurslar" }
}, { timestamps: true, versionKey: false });

const KursVideo = model('KursVideo', KursVideoSchema);
export default KursVideo;



