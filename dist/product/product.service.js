"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./model/product.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const success_response_1 = require("../utils/success-response");
const category_service_1 = require("../category/category.service");
let ProductService = class ProductService {
    productModel;
    categoryService;
    constructor(productModel, categoryService) {
        this.productModel = productModel;
        this.categoryService = categoryService;
    }
    async create(createProductDto) {
        const yanigProduct = await this.productModel.create(createProductDto);
        return (0, success_response_1.getsuccessRes)(yanigProduct);
    }
    async findAll() {
        const data = await this.productModel.find().populate("categoryId");
        return (0, success_response_1.getsuccessRes)(data);
    }
    async findOne(id) {
        const data = await this.productModel.findById(id).populate("categoryId");
        if (!data) {
            throw new common_1.NotFoundException('product not found');
        }
        return (0, success_response_1.getsuccessRes)(data);
    }
    async update(id, updateProductDto) {
        const { categoryId } = updateProductDto;
        if (categoryId) {
            await this.categoryService.findOne(categoryId);
        }
        const product = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });
        if (!product) {
            throw new common_1.NotFoundException("product not found");
        }
        return (0, success_response_1.getsuccessRes)(product);
    }
    async remove(id) {
        const product = await this.productModel.findByIdAndDelete(id);
        if (!product) {
            throw new common_1.NotFoundException("product not found");
        }
        return (0, success_response_1.getsuccessRes)({});
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        category_service_1.CategoryService])
], ProductService);
//# sourceMappingURL=product.service.js.map