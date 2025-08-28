import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './model/product.model';
import { Model } from 'mongoose';
import { CategoryService } from 'src/category/category.service';
export declare class ProductService {
    private readonly productModel;
    private readonly categoryService;
    constructor(productModel: Model<Product>, categoryService: CategoryService);
    create(createProductDto: CreateProductDto): Promise<import("../interface/success-response").IResponse>;
    findAll(): Promise<import("../interface/success-response").IResponse>;
    findOne(id: string): Promise<import("../interface/success-response").IResponse>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("../interface/success-response").IResponse>;
    remove(id: string): Promise<import("../interface/success-response").IResponse>;
}
