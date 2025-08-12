import {hash,compare} from 'bcrypt';

class Crypt{
    encrypt(data){
        return hash(data,7)
    }

    dectypt(data,encryptData){
        return compare(data,encryptData)
    }
}

export default new Crypt();
