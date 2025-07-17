import {connect} from 'mongoose';
import {config} from 'dotenv';

config();

export const connectDb=async ()=>{
    try {
        await connect(process.env.MONGO_URL)
        console.log("databazaga ulanildi")
    } catch (error) {
        console.log(error)
        console.log("databazaga ulanmadi")
    }
}