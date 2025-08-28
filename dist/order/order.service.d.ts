import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './model/order.model';
import { Model } from 'mongoose';
import { ProductService } from 'src/product/product.service';
export declare class OrderService {
    private readonly orderModel;
    private readonly productService;
    constructor(orderModel: Model<Order>, productService: ProductService);
    create(createOrderDto: CreateOrderDto): Promise<import("../interface/success-response").IResponse>;
    findAll(): Promise<import("../interface/success-response").IResponse>;
    findOne(id: string): Promise<import("../interface/success-response").IResponse>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("../interface/success-response").IResponse>;
    remove(id: string): Promise<import("../interface/success-response").IResponse>;
}
