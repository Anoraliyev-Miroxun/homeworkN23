import {createTransport} from 'nodemailer';
import config from '../config/index.js';


export const sendOtpToMali=(mail,otp)=>{
    const transporter=createTransport({
        port:config.Emil.MAIL_PORT,
        host:config.Emil.MAIL_HOST,
        auth:{
            user:config.Emil.MAIL_USER,
            pass:config.Emil.MAIL_PASS

        },
        secure:false,
    })
    const mailOptions={
        from:config.Emil.MAIL_USER,
        to:mail,
        subject:"market plase gullar",
        text:otp
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}