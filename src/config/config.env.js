import { config } from 'dotenv';


config();

export default {
    port: Number(process.env.PORT),
    mongo_uri: String(process.env.MONGO_URI),
    Admin:{
    SUPERADMIN_USERNAME: String(process.env.SUPERADMIN_USERNAME),
    SUPERADMIN_PASSWORD: String(process.env.SUPERADMIN_PASSWORD),
    SUPERADMIN_EMAIL: String(process.env.SUPERADMIN_EMAIL)
    },
    Token:{
        ACCESS_TOKEN_KEY:String(process.env.ACCESS_TOKEN_KEY),
        ACCESS_TOKEN_TIME:String(process.env.ACCESS_TOKEN_TIME),
        REFRESH_TOKEN_KEY:String(process.env.REFRESH_TOKEN_KEY),
        REFRESH_TOKEN_TIME:String(process.env.REFRESH_TOKEN_TIME)
    }
};

// export default {
//     PORT: Number(process.env.PORT),
//     MONGO_URI: String(process.env.MONGO_URI),
//     ADMIN: {
//         SUPERADMIN_USERNAME: String(process.env.SUPERADMIN_USERNAME),
//         SUPERADMIN_PASSWORD: String(process.env.SUPERADMIN_PASSWORD),
//         SUPERADMIN_EMAIL: String(process.env.SUPERADMIN_EMAIL),
//     },
//     TOKEN: {
//         ACCESS_TOKEN_KEY: String(process.env.ACCESS_TOKEN_KEY),
//         ACCESS_TOKEN_TIME: String(process.env.ACCESS_TOKEN_TIME),
//         REFRESH_TOKEN_KEY: String(process.env.REFRESH_TOKEN_KEY),
//         REFRESH_TOKEN_TIME: String(process.env.REFRESH_TOKEN_TIME)
//     }
// }