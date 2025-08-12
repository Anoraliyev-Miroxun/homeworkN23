import {config} from 'dotenv';

config();

export default{
    PORT:String(process.env.PORT),
    MONGO_URI:String(process.env.MONGO_URI),
    Token:{
        ACSES_TOKEN_KEY:String(process.env.ACSES_TOKEN_KEY),
        ACSES_TOKEN_TIME:String(process.env.ACSES_TOKEN_TIME),
        REFRESH_KEY:String(process.env.REFRESH_TOKEN_KEY),
        REFRESH_TIME:String(process.env.REFRESH_TOKEN_TIME)
    },
    Admin:{
        SUPERADMIN_USERNAME:String(process.env.SUPERADMIN_USERNAME),
        SUPERADMIN_PASSWORD:String(process.env.SUPERADMIN_PASSWORD),
        SUPERADMIN_EMAIL:String(process.env.SUPERADMIN_EMAIL)
    },
    Emil:{
        MAIL_HOST:String(process.env.MAIL_HOST),
        MAIL_PORT:String(process.env.MAIL_PORT),
        MAIL_USER:String(process.env.MAIL_USER),
        MAIL_PASS:String(process.env.MAIL_PASS)
    },

    Redis:{
        REDIS_HOST:String(process.env.REDIS_HOST),
        REDIS_PORT:String(process.env.REDIS_PORT),
        REDIS_PASSWORD:String(process.env.REDIS_PASSWORD)
    },

    CONFIRM_PASSWORD_URL:String(process.env.CONFIRM_PASSWORD_URL)

}

// MAIL_HOST=smtp.gmail.com 
// MAIL_PORT=587
// MAIL_USER=miroxunanaraliyev@gmail.com
// MAIL_PASS=vbihqtpfwroiieow

// REDIS_HOST=127.0.0.1
// REDIS_PORT=6379
// REDIS_PASSWORD=7777
