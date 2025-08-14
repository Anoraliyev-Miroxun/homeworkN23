import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';


const Mijoz=sequelize.define("Mijoz",{
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Mijoz;
