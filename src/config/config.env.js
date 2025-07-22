import { config } from 'dotenv';

config();

export default {
    port: Number(process.env.PORT),
    mongo_uri: String(process.env.MONGO_URI),
    SUPERADMIN_USERNAME: String(process.env.SUPERADMIN_USERNAME),
    SUPERADMIN_PASSWORD: String(process.env.SUPERADMIN_PASSWORD),
    SUPERADMIN_EMAIL: String(process.env.SUPERADMIN_EMAIL)
};