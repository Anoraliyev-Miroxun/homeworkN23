import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './model/order.model';
import { OrderModule } from './order.module';
import { ProductModule } from 'src/product/product.module';
import { Model } from 'mongoose';
import { ProductService } from 'src/product/product.service';
import { throwDeprecation } from 'process';
import { getServers } from 'dns';
import { getsuccessRes } from 'src/utils/success-response';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    private readonly productService: ProductService
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const product=await this.productService.findOne(createOrderDto.productId);
    if(!product){
      throw new NotFoundException('product not found')
    }
    const newOrder=await this.orderModel.create(createOrderDto);
    return getsuccessRes(newOrder)
  }

  async findAll() {
    const data=await this.orderModel.find()
    return getsuccessRes(data)
  }

  async findOne(id: string) {
    const data=await this.orderModel.findById(id);
    if(!data){
      throw new NotFoundException("order not found");
    }
    return getsuccessRes(data);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    if(updateOrderDto.productId){
      await this.productService.findOne(updateOrderDto.productId)
    }
    const updateOrder=await this.orderModel.findByIdAndUpdate(id,updateOrderDto,{new:true});
    if(!updateOrder){
      throw new NotFoundException("order not found")
    }
    return getsuccessRes(updateOrder)
  }

  async remove(id: string) {
    const data=await this.orderModel.findByIdAndDelete(id);
    if(!data){
      throw new NotFoundException("order not found")
    }

    return getsuccessRes({})
  }
}
