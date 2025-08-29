import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { getsuccessRes } from 'src/utils/succes-response';
import {In} from 'typeorm';
import { TreeRepositoryUtils } from 'typeorm/browser';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productPepo: Repository<Product>,
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>
  ) { }
  async create(createProductDto: CreateProductDto) {
    const yangiProduct = this.productPepo.create(createProductDto);
    await this.productPepo.save(yangiProduct)
    return getsuccessRes(yangiProduct)
  }

  async findAll() {
    const data = await this.productPepo.find({
      relations: {
        order:{
          mijoz:true
        },
        
      },
      order:{createdAt:"DESC"}
    })
    return getsuccessRes(data)
  }

  async findOne(id: number) {
    const data = await this.productPepo.findOne({ where: { id },
      relations:{order:{mijoz:true}}
     })
    if (!data) {
      throw new NotFoundException("poduct not found")
    }
    return getsuccessRes(data)
  }


  async update(id: number, updateProductDto: UpdateProductDto) {
    const { orderIds, ...rest } = updateProductDto;
    const prodcut=await this.productPepo.findOne({where:{id}});
    if(!prodcut){
      throw new NotFoundException("product not found")
    }
    let order=prodcut.order;
    if (orderIds) {
      const existOrder = await this.orderRepo.findBy({id:In(orderIds)});
      if (existOrder.length !== orderIds.length) {
        throw new NotFoundException("order not found")
      }
      order=existOrder;
      delete updateProductDto.orderIds;
    }
    await this.productPepo.update({ id }, { ...rest,order})
    const data=await this.productPepo.findOne({where:{id},
      relations:["order"]
    });

    return getsuccessRes(data??prodcut)


  }

  async remove(id: number) {
    const data=await this.productPepo.delete({id})
    if(!data){
      throw new NotFoundException('product not found')
    }

    return getsuccessRes(data)
  }
}
