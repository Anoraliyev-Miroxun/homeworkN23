import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './model/product.model';
import { InjectModel } from '@nestjs/mongoose';
import { get, Model } from 'mongoose';
import { getsuccessRes } from 'src/utils/success-response';
import { CategoryService } from 'src/category/category.service';
import { privateDecrypt } from 'crypto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel:Model<Product>,
private readonly categoryService:CategoryService ){}
  async create(createProductDto: CreateProductDto) {
    const yanigProduct = await this.productModel.create(createProductDto)
    return getsuccessRes(yanigProduct)
  }

  async findAll() {
    const data=await this.productModel.find().populate("categoryId");
    return getsuccessRes(data)
  }

  async findOne(id: string) {
    const data=await this.productModel.findById(id).populate("categoryId");
    if(!data){
      throw new NotFoundException('product not found')
    }
    return getsuccessRes(data)
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const {categoryId}=updateProductDto;
    if(categoryId){
      await this.categoryService.findOne(categoryId)
    }

    const product=await this.productModel.findByIdAndUpdate(id,updateProductDto,{new:true});
    if(!product){
      throw new NotFoundException("product not found")
    }

    return getsuccessRes(product)
  }

  async remove(id: string) {
    const product=await this.productModel.findByIdAndDelete(id);
    if(!product){
      throw new NotFoundException("product not found")
    }
    
    return getsuccessRes({});
  }
}
