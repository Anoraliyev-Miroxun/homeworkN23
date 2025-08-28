import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("../interface/success-response").IResponse>;
    findAll(): Promise<import("../interface/success-response").IResponse>;
    findOne(id: string): Promise<import("../interface/success-response").IResponse>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("../interface/success-response").IResponse>;
    remove(id: string): Promise<import("../interface/success-response").IResponse>;
}
