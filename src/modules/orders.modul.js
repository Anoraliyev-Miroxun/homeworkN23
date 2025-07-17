import mongoose, {Schema,model,Types} from 'mongoose';


const schemaOrders=new Schema({
    soni:{type:Number},
    total_price:{type:Number},
    date:{type:Date,default:Date.now}, 
    user_id:{type:mongoose.Schema.Types.ObjectId,default:()=>new mongoose.Types.ObjectId() },
    book_id:{type:Schema.Types.ObjectId,ref:"Books"}
    
});

const Orders=model("Orders",schemaOrders);

export default Orders;