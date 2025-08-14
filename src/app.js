import express from 'express';
import sequelize from './db/index.js';
import { configEnv } from './config/config.js';
import {globalErrorHandle} from './error/global-error-handle.js';
import router from './routers/table.route.js';

const PORT = Number(configEnv.port);
const app = express();

export class Application {
    static async connectDb() {
        try {
            await sequelize.authenticate();
            console.log("databazaga ulandi");

            sequelize.sync({ alter: true });
            console.log("tables synced....")

        } catch (error) {
            console.log('app.js da hato chiqdi catchga tushdi', error);
            process.exit(1);
        }
    }

    static async startApp() {
        await this.connectDb();
        app.use(express.json());
        app.use('/market',router);
        app.use(globalErrorHandle)
        app.listen(PORT, () => console.log("bu server shu portda ishlayapti", PORT));
    }
}


