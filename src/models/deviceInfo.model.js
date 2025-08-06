import { model, Schema } from 'mongoose';

export const deviceInfoSchema = new Schema({
    deviceId: { type: String, unique: true },
    osName: { type: String },
    clientType: { type: String },
    clientName: { type: String },
    deviceType: { type: String }
}, { timestamps: true})