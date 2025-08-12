import config from '../config/index.js';
import {disconnect} from 'mongoose';
import connectDb from '../db/mongodb.js';
import crypto from '../utils/Crypto.js';
import User from '../models/users.model.js';
import { Role } from '../const/reol-const.js';


(async function(){
    try {
        await connectDb();
        const hashedPassword=await crypto.encrypt(config.Admin.SUPERADMIN_PASSWORD);
        await User.create({
            userName:config.Admin.SUPERADMIN_USERNAME,
            hashedPassword,
            email:config.Admin.SUPERADMIN_EMAIL,
            role:Role.Superadmin,
            phoneNumber:"+998900996602",
            fullName:"Eshmat Toshmatov",
            isActive:true,
            address:"Toshkent"
        })

        console.log('super admin yaratildi');
        await disconnect();
    } catch (error) {
        console.log("error super admin create bolmadi",error)
    }
}());