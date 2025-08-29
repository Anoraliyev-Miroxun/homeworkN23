import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Mijoz } from 'src/mijoz/entities/mijoz.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Order,Mijoz,Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
