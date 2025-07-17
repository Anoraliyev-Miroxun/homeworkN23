import {connect} from 'mongoose';
import {envConfig} from './env.config.js';


export const connectDb=async (req,res)=>{
    try {
        await connect(envConfig.mongoUri)
        console.log("databazaga ulandi")
    } catch (error) {
        console.log(error)
        console.log("databazaga ulanmadi")
    }
}