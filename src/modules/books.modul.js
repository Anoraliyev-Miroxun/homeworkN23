import {Schema,model} from 'mongoose';


const schemaBooks=new Schema({
    nomi:{type:String,required:true,unique:true},
    janri:{type:String},
    narxi:{type:Number},
    nechtaBor:{type:Number,default:0},
    nechtaSotilgan:{type:Number,default:0},
    mualif_id:{type:Schema.Types.ObjectId,ref:"Mualif"}
});


const Books=model("Books",schemaBooks);
export default Books;