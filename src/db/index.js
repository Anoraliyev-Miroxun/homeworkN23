import {configEnv} from '../config/config.js';
import {Sequelize} from 'sequelize';


const sequelize=new Sequelize(
    configEnv.db.db,
    configEnv.db.user,
    configEnv.db.pass,
    {
        host:configEnv.db.host,
        dialect:"postgres",
        port:Number(configEnv.db.port_db)?? 5432,
        logging:false
    }
)

export default sequelize;
