import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): Promise<import("../interface/success-response").IResponse>;
    findAll(): Promise<import("../interface/success-response").IResponse>;
    findOne(id: string): Promise<import("../interface/success-response").IResponse>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("../interface/success-response").IResponse>;
    remove(id: string): Promise<import("../interface/success-response").IResponse>;
}
