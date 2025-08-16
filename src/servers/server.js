import {Sequelize} from 'sequelize';
import {envConfig} from '../configs/index.js';

export const sequelize=new Sequelize(envConfig.db.database,envConfig.db.username,envConfig.db.password,{
    host:envConfig.db.host,
    port:envConfig.db.port,
    dialect:"postgres",
    logging:false
})