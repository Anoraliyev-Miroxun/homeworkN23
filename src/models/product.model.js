import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number },
    quantity: { type: Number },
    description: { type: String },
    saller_id: { type: Schema.Types.ObjectId, ref: 'User' },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category' }

}, { timestamps: true, versionKey: false,
    virtuals:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

ProductSchema.virtual("rasmlar",{
    ref:"Image",
    localField:"_id",
    foreignField:"product_id"
})

ProductSchema.virtual("order",{
    ref:"Order",
    localField:"_id",
    foreignField:'product_id'
})

const Product = model('Product', ProductSchema);
export default Product;