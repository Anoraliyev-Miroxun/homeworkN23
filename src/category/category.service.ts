import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryModel } from './models/category.model';
import { IResponse } from 'src/interface/success-response';
import { getSuccessResponse } from 'src/utils/get-success-response';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(CategoryModel) private readonly categoryModel: typeof CategoryModel
    ) { }

    async create(createCategoryDto: CreateCategoryDto): Promise<IResponse> {
        const existName = await this.categoryModel.findOne({ where: { name: createCategoryDto.name } });
        if (existName) {
            throw new ConflictException("Product name alredy exyst")
        }
        const yangiProduct = await this.categoryModel.create(createCategoryDto)
        return getSuccessResponse(yangiProduct, 201);

    }

    async findAll(): Promise<IResponse> {
        const data = await this.categoryModel.findAll();
        return getSuccessResponse(data)
    }

    async findOne(id: number): Promise<IResponse> {
        const user = await this.categoryModel.findByPk(id, { include: { all: true } })
        if (!user) {
            throw new NotFoundException("category not found")
        }

        return getSuccessResponse(user);
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<IResponse> {
        if (updateCategoryDto.name) {
            const user = await this.categoryModel.findOne({ where: { name: updateCategoryDto.name } })
            if (user) {
                throw new ConflictException("name alredy exyst")
            }
        }

        const updateData = await this.categoryModel.update(updateCategoryDto, { where: { id }, returning: true })
        if(updateData[0]===0){
            throw new NotFoundException("category not found")
        }
        return getSuccessResponse(updateData[1][0])
    }

    async remove(id: number): Promise<IResponse> {
        const data=await this.categoryModel.destroy({where:{id}});
        if(!data){
            throw new NotFoundException("category not found")
        }

        return getSuccessResponse({})
    }
}
