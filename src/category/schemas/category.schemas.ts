import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
  versionKey: false,
  virtuals: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Category extends Document {
  @Prop({ required: true })
  name: string;
}

const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.virtual('products', {
  ref:"Category",
  foreignField:"categoryId",
  localField:"_id"
});

export { CategorySchema };
