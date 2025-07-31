import {createClient} from 'redis';
import configEnv from '../config/index.js';

const redisCilent=createClient({
    socket:{
        host:configEnv.REDIS.HOST,
        port:configEnv.REDIS.PORT
    },
    password:configEnv.REDIS.PASSWORD
})


redisCilent.on("error",(err)=>console.log('Error on connecting to redis', err))

await redisCilent.connect();

export default redisCilent;