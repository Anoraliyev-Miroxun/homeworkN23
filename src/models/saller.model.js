import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';


const Saller=sequelize.define("Saller",{
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

export default Saller;
