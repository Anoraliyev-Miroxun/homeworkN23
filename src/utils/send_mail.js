import { createTransport } from "nodemailer";
import {envConfig} from '../configs/index.js';

export const sendOTPToMail = (mail, otp) => {
    const transporter = createTransport({
        port: envConfig.email.PORT,
        host: envConfig.email.HOST,
        auth: {
            user: envConfig.email.USER,
            pass: envConfig.email.PASS
        },
        secure: false
    });
    const mailOptions = {
        from: envConfig.email.USER,
        to: mail,
        subject: 'burger bot',
        text: otp
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
}