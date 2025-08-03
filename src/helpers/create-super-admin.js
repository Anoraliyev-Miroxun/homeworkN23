import connectDb from '../db/index.js';
import Admin from '../models/admin.model.js';
import crypto from '../utils/Crypto.js';
import configEnv from '../config/index.js';
import { disconnect } from 'mongoose';


(async function(){
    try {
        await connectDb();
        const hashedPassword=await crypto.encrypt(configEnv.Admin.SUPERADMIN_PASSWORD);
        await Admin.create({
            username:configEnv.Admin.SUPERADMIN_USERNAME,
            hashedPassword,
            email:configEnv.Admin.SUPERADMIN_EMAIL,
            role:"SUPERADMIN"
        })

        console.log('super admin yaratildi');
        await disconnect();
    } catch (error) {
        console.log("error super admin create bolmadi",error)
    }
}());