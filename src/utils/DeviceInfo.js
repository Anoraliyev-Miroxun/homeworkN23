import DeviceDetector from 'node-device-detector';
import CryptoJs from 'crypto-js';
import config from '../config/index.js';


const deviceDetector=new DeviceDetector();

 
class DeviceInfo{
    encrypt(userAgent){
        const device=deviceDetector.detect(userAgent)
        const info={
            osName:device?.os.name ?? "",
            clientType:device.client?.type ?? "",
            clientName:device.client?.name ?? "",
            deviceType:device.device?.type ?? ""
        }

        const signature=`${info.osName}-${info.cilentType}-${info.cilentName}-${info.deviceType}-${Date.now()}`
        const deviceId=CryptoJs.AES.encrypt(signature,config.CRYPTO_SEKRET_KEY).toString();
        info.deviceId=deviceId;
        return info
    }

    decrypt(deviceId){
        const decrypt=CryptoJs.AES.decrypt(deviceId,config.CRYPTO_SEKRET_KEY)
        const data=decrypt.toString(CryptoJS.enc.Utf8);
        return data
    }


}

export default new DeviceInfo();

// git init && git remote add origin <remote-repo-url> && 
// git remote -v && git add . && git commit -m 'matn' && 
// git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'
