import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IResponse } from 'src/interface/success-response';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './models/product.model';
import { CategoryModel } from 'src/category/models/category.model';
import { CategoryService } from 'src/category/category.service';
import { getSuccessResponse } from 'src/utils/get-success-response';
import { SallerService } from 'src/saller/saller.service';
import { SallerModel } from 'src/saller/models/saller.model';



@Injectable()
export class ProductService {

  constructor(@InjectModel(ProductModel) private readonly productModel: typeof ProductModel,
    private readonly categoryService: CategoryService,
  private readonly sallerService:SallerService) { }


  async create(createProductDto: CreateProductDto): Promise<IResponse> {
    await this.categoryService.findOne(createProductDto.category_id)
    await this.sallerService.findOne(createProductDto.saller_id)
    const product = await this.productModel.create(createProductDto);
    return getSuccessResponse(product, 201)
  }

  async findAll(): Promise<IResponse> {
    const data = await this.productModel.findAll({ include: { model: CategoryModel } })
    return getSuccessResponse(data)
  }

  async findOne(id: number): Promise<IResponse> {
    const data = await this.productModel.findByPk(id, { include:[ { model: CategoryModel },{model:SallerModel}] })
    if (!data) {
      throw new NotFoundException("prodcut not found")
    }

    return getSuccessResponse(data);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<IResponse> {
    if(updateProductDto.category_id){
      await this.categoryService.findOne(updateProductDto.category_id)
    }
    if(updateProductDto.saller_id){
      await this.sallerService.findOne(updateProductDto.saller_id)
    }
    const product =await this.productModel.update(updateProductDto,{where:{id},returning:true})
    if(product[0]===0){
      throw new NotFoundException("poduct not found")
    }

    return getSuccessResponse(product[1][0])

  }

  async remove(id: number):Promise<IResponse> {
    
    const prodcut=await this.productModel.destroy({where:{id}})
    if(!prodcut){
      throw new NotFoundException("product not found")
    }
    return getSuccessResponse({})
  }
}
