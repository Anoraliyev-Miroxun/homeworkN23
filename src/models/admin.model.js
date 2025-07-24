import {Schema,model} from 'mongoose';


const schemaAdmin=new Schema({
    username:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    isActive:{type:Boolean,default:true},
    hashedPassword:{type:String},
    role:{type:String,enum:["SUPERADMIN","ADMIN"],default:"ADMIN"}
},{timestamps:true,versionKey:false});


const Admin=model("Admin",schemaAdmin);
export default Admin;