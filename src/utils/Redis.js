import redisCilent from '../db/redis-cilent.js';

class Redis{
    async setData(key,value,time=300){
        return redisCilent.set(key,value,{
            EX:time
        })
    }
    
    async getData(key){
        return redisCilent.get(key)
        
    }

    async deleteData(key){
        return redisCilent.del(key)
    }
}

export default new Redis();
