import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schemas';
import { Model } from 'mongoose';
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<import("../interface/success-response").IResponse>;
    findAll(): Promise<import("../interface/success-response").IResponse>;
    findOne(id: string): Promise<import("../interface/success-response").IResponse>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("../interface/success-response").IResponse>;
    remove(id: string): Promise<import("../interface/success-response").IResponse>;
}
