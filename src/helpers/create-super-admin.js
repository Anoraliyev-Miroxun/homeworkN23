import connectDb from '../db/index.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';
import configEnv from '../config/config.env.js';
import { disconnect } from 'mongoose';


(async function(){
    try {
        await connectDb();
        const hashedPassword=await crypto.encrypt(configEnv.SUPERADMIN_PASSWORD);
        await Admin.create({
            username:configEnv.SUPERADMIN_USERNAME,
            hashedPassword,
            email:configEnv.SUPERADMIN_EMAIL,
            role:"SUPERADMIN"
        })

        console.log('super admin yaratildi');
        await disconnect();
    } catch (error) {
        console.log("error super admin create bolmadi",error)
    }
}());