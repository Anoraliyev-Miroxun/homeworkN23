import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("Mijoz")
export class Mijoz {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    name:string;

    @Column({type:"varchar"})
    email:string;

    @Column({type:"integer"})
    age:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @OneToMany(()=>Order,(order)=>order.mijoz)
    orders:Order[];
}


