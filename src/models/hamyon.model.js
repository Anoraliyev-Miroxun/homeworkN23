import {model,Schema} from 'mongoose';

const HamyonSchema=new Schema({
    card_number:{type:String,require:true,unique:true},
    hisob:{type:Number,required:true,default:0},
    user_id:{type:Schema.Types.ObjectId,ref:'User'}
},{timestamps:true,versionKey:false,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

HamyonSchema.virtual("user",{
    ref:"User",
    localField:"user_id",
    foreignField:"_id"
})

const Hamyon=model("Hamyon",HamyonSchema);

export default Hamyon;