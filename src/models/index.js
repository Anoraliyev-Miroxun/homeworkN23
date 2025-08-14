import Mijoz from './mijoz.model.js';
import Product from './product.model.js';
import Saller from './saller.model.js';
import Order from './orders.model.js';

Mijoz.hasMany(Order,{foreignKey:"mijoz_id",onDelete:"CASCADE",onUpdate:"CASCADE"})
Order.belongsTo(Mijoz,{foreignKey:"mijoz_id"})
Saller.hasMany(Product,{foreignKey:"saller_id",onDelete:"CASCADE",onUpdate:"CASCADE"})
Product.belongsTo(Saller,{foreignKey:"saller_id"})
Product.hasMany(Order,{foreignKey:"product_id"})
Order.belongsTo(Product,{foreignKey:"product_id"})


export {Mijoz,Product,Saller,Order}