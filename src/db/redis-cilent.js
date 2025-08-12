import {createClient} from 'redis';
import config from '../config/index.js';

const redisCilent=createClient({
    socket:{
        host:config.Redis.REDIS_HOST,
        port:config.Redis.REDIS_PORT
    },
    password:config.Redis.REDIS_PASSWORD
})


redisCilent.on("error",(err)=>console.log('Error on connecting to redis', err))

await redisCilent.connect();

export default redisCilent;