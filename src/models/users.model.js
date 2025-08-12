import {model,Schema} from 'mongoose';
import {Role} from '../const/reol-const.js';



const usersSchema=new Schema({
    fullName:{type:String,unique:true},
    userName:{type:String,require:true,unique:true},
    phoneNumber:{type:String,unique:true},
    hashedPassword:{type:String},
    email:{type:String,require:true,unique:true},
    role:{type:String,enum:[Role.Superadmin,Role.Admin,Role.Mijoz,Role.Sotuvchi],default:Role.Mijoz},
    isActive:{type:Boolean,default:false},
    address:{type:String}
},{timestamps:true,
    versionKey:false,
    virtuals:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

usersSchema.virtual("hamyon",{
    ref:"Hamyon",
    localField:"_id",
    foreignField:"user_id"
})

usersSchema.virtual("order",{
    ref:"Order",
    localField:"_id",
    foreignField:"mijoz_id"
})

usersSchema.virtual("product",{
    ref:"Product",
    localField:"_id",
    foreignField:"saller_id"
})



const User=model("User",usersSchema);

export default User;