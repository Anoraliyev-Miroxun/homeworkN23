import {config} from 'dotenv';
import {connect} from 'mongoose';
config();

export const connectDb=async (req,res)=>{
    try {
        await connect(process.env.MONGO_URL)
        console.log("databaza ulandi")
    } catch (error) {
        console.log("hatolik databazaga ulanmadi chetga tushdi index.js")
        process.exit(1)
    }
}