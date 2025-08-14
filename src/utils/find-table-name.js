import {Mijoz,Order,Product,Saller} from '../models/index.js';


export const topTable=(tableName)=>{
    if(tableName=="Order"){
        return Order;
    }
    if(tableName=="Mijoz"){
        return Mijoz;
    }
    if(tableName=="Product"){
        return Product;
    }
    if(tableName=="Saller"){
        return Saller;
    }
}