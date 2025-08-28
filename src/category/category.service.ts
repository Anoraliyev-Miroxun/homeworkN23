import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schemas';
import { Model } from 'mongoose';
import { getsuccessRes } from 'src/utils/success-response';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    ) { }
    async create(createCategoryDto: CreateCategoryDto) {
        const yaniCateogory = await this.categoryModel.create(createCategoryDto)
        return getsuccessRes(yaniCateogory, 201)
    }

    async findAll() {
        const data = await this.categoryModel.find().populate("products");
        return getsuccessRes(data)
    }

    async findOne(id: string) {
        const data = await this.categoryModel.findById(id).populate("products");
        if (!data) {
            throw new NotFoundException("category not found")
        }
        return getsuccessRes(data)
    }

    async update(id: string, updateCategoryDto: UpdateCategoryDto) {
        const updateCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true })
        if (!updateCategory) {
            throw new NotFoundException("category not found")
        }
        return getsuccessRes(updateCategory)
    }

    async remove(id: string) {
        const deleteCategory=await this.categoryModel.findByIdAndDelete(id)
        if(!deleteCategory){
            throw new NotFoundException("category not found")
        }

        return getsuccessRes({})
    }
}
