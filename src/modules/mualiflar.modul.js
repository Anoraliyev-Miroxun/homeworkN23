import {Schema,model} from 'mongoose';


const schemaMualif=new Schema({
    name:{type:String,required:true},
    country:{type:String},
    age:{type:Number}
});


const Mualif=model("Mualif",schemaMualif);
export default Mualif;









// import {Schema,model} from 'mongoose';


// const schemaBooks=new Schema({
//     nomi:{type:String,required:true,unique:true},
//     janri:{type:String},
//     narxi:{type:Number},
//     nechtaBor:{type:Number,default:0},
//     nechtaSotilgan:{type:Number,default:0},
//     mualif_id:{type:Schema.Types.ObjectId,ref:"Mualif"}
// });


// const Books=model("Books",schemaBooks);
// export default Books;










// import mongoose, {Schema,model,Types} from 'mongoose';


// const schemaOrders=new Schema({
//     soni:{type:Number},
//     total_price:{type:Number},
//     date:{type:Date,default:Date.now}, 
//     user_id:{type:mongoose.Schema.Types.ObjectId,default:()=>new mongoose.Types.ObjectId() },
//     book_id:{type:Schema.Types.ObjectId,ref:"Books"}
    
// });

// const Orders=model("Orders",schemaOrders);

// export default Orders;