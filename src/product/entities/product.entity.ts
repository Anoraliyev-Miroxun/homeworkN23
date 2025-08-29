import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, NumericType, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity("Product")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar"})
    name:string;

    @Column({type:"integer"})
    narxi:number;

    @Column({type:"integer"})
    umumiysoni:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToMany(()=>Order,(order)=>order.product)
    order:Order[];



}
