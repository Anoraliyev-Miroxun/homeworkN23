import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Mijoz } from 'src/mijoz/entities/mijoz.entity';
import { getsuccessRes } from 'src/utils/succes-response';
import { Product } from 'src/product/entities/product.entity';
import {In} from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
    @InjectRepository(Mijoz) private readonly mijozRepo: Repository<Mijoz>,
    @InjectRepository(Product) private readonly productRepo:Repository<Product>
  ) { }
  async create(createOrderDto: CreateOrderDto) {
    const { mijozId,productIds } = createOrderDto;
    const mijoz = await this.mijozRepo.findOne({ where: { id: mijozId } });

    if (!mijoz) {
      throw new ConflictException('Mijoz not found')
    }
    const product=await this.productRepo.findBy({id:In(productIds)});
    if(product.length!==productIds.length){
      throw new ConflictException("product not found")
    }

    const yangiOrder = this.orderRepo.create({ ...createOrderDto, mijoz ,product});
    await this.orderRepo.save(yangiOrder);
    return getsuccessRes(yangiOrder, 201)
  }

  async findAll() {
    const data = await this.orderRepo.find({
      relations: { mijoz: true,product:true },
      order: { createdAt: "DESC" }
    })
    return getsuccessRes(data)
  }

  async findOne(id: number) {
    const data = await this.orderRepo.findOne({
      where: { id },
      relations: { mijoz: true ,product:true}
    })
    if (!data) {
      throw new NotFoundException("order not found")
    }
    return getsuccessRes(data)
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const { mijozId,productIds } = updateOrderDto;
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: { mijoz: true,product:true }
    });

    if (!order) {
      throw new NotFoundException('order not found');
    }
    let product=order.product;
    let mijoz = order.mijoz;

    if (mijozId) {
      const existMijoz = await this.mijozRepo.findOne({ where: { id } });
      if (!existMijoz) {
        throw new ConflictException('mijoz not found')
      }

      mijoz = existMijoz;
      delete updateOrderDto.mijozId;
    }

    if(productIds){
      const existProducts=await this.productRepo.findBy({id:In(productIds)});
      if(existProducts.length!==productIds.length){
        throw new ConflictException("product not found")
      }
      product=existProducts;
      delete updateOrderDto.productIds;
    }

    await this.orderRepo.update({ id }, { ...updateOrderDto, mijoz,product })
    const data = await this.orderRepo.findOne({
      where: { id },
      relations: { mijoz: true,product:true}

    });
    return getsuccessRes(data??order)
  }

  async remove(id: number) {
    const data=await this.orderRepo.delete({id});
    if(!data.affected){
      throw new NotFoundException('order not found')
    }

    return getsuccessRes(data);
  }
}
