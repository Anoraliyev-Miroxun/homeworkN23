import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Mijoz } from "src/mijoz/entities/mijoz.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, NumericType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity("Order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int" })
    soni: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Mijoz, (mijoz) => mijoz.orders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    mijoz: Mijoz;

    @ManyToMany(() => Product, (product) => product.order,{eager:true})
    @JoinTable()
    product: Product[];


}
