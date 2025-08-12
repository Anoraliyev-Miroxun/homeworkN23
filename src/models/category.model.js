import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String }
}, {
    timestamps: true,
    versionKey: false,
    virtuals: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

CategorySchema.virtual('product', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category_id'
});

const Category = model('Category', CategorySchema);
export default Category;