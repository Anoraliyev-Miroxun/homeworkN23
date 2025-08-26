import { Column, DataType, Table, Model, ForeignKey, BelongsTo, AllowNull } from "sequelize-typescript";
import { CategoryModel } from "src/category/models/category.model";
import { SallerModel } from "src/saller/models/saller.model";

interface IProduct {
    id?: number;
    name: string;
    soni: number;
    price?: number;
    category_id:number;
    saller_id:number;
}

@Table({ tableName: "Product" })
export class ProductModel extends Model<IProduct> {


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    soni: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;

    @ForeignKey(() => CategoryModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    category_id: number;

    @BelongsTo(() => CategoryModel)
    category: CategoryModel;

    @ForeignKey(()=>SallerModel)
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })

    saller_id:number;
    @BelongsTo(()=>SallerModel)
    saller:SallerModel
}







// import { Model } from "sequelize";
// import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
// import { Col } from "sequelize/lib/utils";
// import { CategoryModel } from "src/category/models/category.model";
// interface IProduct {
//     id?: number,
//     name: string,
//     soni: number,
//     price: number
// }

// @Table({ tableName: "Product" })
// export class ProductModel extends Model<IProduct> {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     name: string;

//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false,
//     })

//     soni: number

//     @Column({
//         type: DataType.INTEGER,

//     })

//     price: number;

//     @ForeignKey(() => CategoryModel)
//     @Column({
//         type:DataType.INTEGER,
//         allowNull:false
//     })

//     category_id:number;

//     @BelongsTo(()=>CategoryModel)
//     category:CategoryModel;



// }
