import {DataTypes} from 'sequelize';
import sequelize from '../db/index.js';

const Product=sequelize.define("Product",{
    name:{type:DataTypes.STRING,
        allowNull:false
    },
     
    soni:{type:DataTypes.INTEGER,
        allowNull:false
    },

    narxi:{type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default Product;
