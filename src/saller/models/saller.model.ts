import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductModel } from 'src/product/models/product.model';

interface ISaller {
  id?: number;
  full_name: string;
  email: string;
  image_url?: string;
}

@Table({ tableName: 'authors' })
export class SallerModel extends Model<ISaller> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  image_url: string;

  @HasMany(() => ProductModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  books: ProductModel[];
}