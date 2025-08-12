import {connect} from 'mongoose';
import config from '../config/index.js';


const connectDb=async()=>{
    try {
        await connect(config.MONGO_URI)
        console.log("databazaga yahshi ulandi")
    } catch (error) {
        console.log("databazaga ulanmadi hato")
        process.exit(1);
    }
}

export default connectDb;
