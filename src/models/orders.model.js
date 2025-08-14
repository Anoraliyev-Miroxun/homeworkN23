import {DataTypes} from 'sequelize';
import sequelize from '../db/index.js';

const Order=sequelize.define("Order",{
    address:{type:DataTypes.STRING,
        allowNull:false
    },
    mahsulot_soni:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default Order;
