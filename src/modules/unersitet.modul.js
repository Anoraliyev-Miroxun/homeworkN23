import {Schema,Types,model} from 'mongoose';


const schemaUnversitet=new Schema({
    name:{type:String,required:true,unique:true},
    fakultet:{type:String}
    
},{timestamps:true,
    virtuals:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});


schemaUnversitet.virtual("groups",{
    ref:"Groupse",
    localField:"_id",
    foreignField:"unversitet_id"
})





const Unversitet=model("Unversitet",schemaUnversitet);

export default Unversitet;



// import { Schema, Types, model } from 'mongoose';


// const schemaGroup = new Schema({
//     name: { type: String, required: true, unique: true },
//     oquvchilarSoni: { type: Number },
//     unversitet_id: { type: Schema.Types.ObjectId, ref: "Unversitet" }
// }, {
//     timestamps: true,
//     virtuals: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
// });

// schemaGroup.virtual("talaba_id", {
//     ref: "Talaba",
//     localField: "_id",
//     foreignField: "group_id"
// })

// const Groupse = model("Groupse", schemaGroup);

// export default Groupse;








// import { Schema, Types, model } from 'mongoose';


// const schemaTalaba = new Schema({
//     name: { type: String, required: true, unique: true },
//     fakultet: { type: String },
//     group_id: { type: Schema.Types.ObjectId, ref: "Groups" }
// }, { timestamps: true, });

// const Talaba = model("Talaba", schemaTalaba);

// export default Talaba;
