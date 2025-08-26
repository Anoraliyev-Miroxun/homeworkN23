import { Column, DataType, HasMany, Table, Model } from "sequelize-typescript";
import { ProductModel } from "src/product/models/product.model";

interface ICategory {
  id?: number;
  name: string;
}

@Table({ tableName: "Category" })
export class CategoryModel extends Model<ICategory> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => ProductModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  products: ProductModel[];
}



































// import { Column, DataType, HasMany, Table, Model } from "sequelize-typescript";
// import { ProductModel } from "src/product/models/product.model";

// interface ICategory {
//     id?: number,
//     name: string,

// }


// @Table({ tableName: "Category" })
// export class CategoryModel extends Model<ICategory, Omit<ICategory, "id">> {
//     @Column({
//         type: DataType.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     })
//     id: number;

//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//         unique: true,
//     })
//     name: string;

//     @HasMany(() => ProductModel, {
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//     })
//     products: ProductModel[];
// }
