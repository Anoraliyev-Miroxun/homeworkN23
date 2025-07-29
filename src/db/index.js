import {connect} from 'mongoose';
import configEnv from '../config/config.env.js';

const connectDb=async ()=>{
    try {
        await connect(configEnv.mongo_uri);
        console.log("databazaga yahshi ulandi");
    } catch (error) {
        console.log("databazaga ulanmadi",error);
        process.exit(1);
    }
};


export default connectDb;