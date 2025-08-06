import { Schema, model } from "mongoose";

const KursVideoSchema = new Schema({
    kurs_id: { type: Schema.Types.ObjectId, ref: "Kurslar" },

    original_name: {
        type: String,
        required: true,
    },

    // Serverda saqlangan nomi
    store_name: {
        type: String,
        required: true,
    },

    // MIME turi
    mime_type: {
        type: String,
        required: true,
    },

    // Fayl hajmi (baytlarda)
    size: {
        type: Number,
        required: true,
    },

    // Faylning serverdagi yo‘li
    path: {
        type: String,
        required: true,
    },

}, { timestamps: true, versionKey: false });

const KursVideo = model('KursVideo', KursVideoSchema);
export default KursVideo;



