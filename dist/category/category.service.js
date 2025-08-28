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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const category_schemas_1 = require("./schemas/category.schemas");
const mongoose_2 = require("mongoose");
const success_response_1 = require("../utils/success-response");
let CategoryService = class CategoryService {
    categoryModel;
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const yaniCateogory = await this.categoryModel.create(createCategoryDto);
        return (0, success_response_1.getsuccessRes)(yaniCateogory, 201);
    }
    async findAll() {
        const data = await this.categoryModel.find().populate("products");
        return (0, success_response_1.getsuccessRes)(data);
    }
    async findOne(id) {
        const data = await this.categoryModel.findById(id).populate("products");
        if (!data) {
            throw new common_1.NotFoundException("category not found");
        }
        return (0, success_response_1.getsuccessRes)(data);
    }
    async update(id, updateCategoryDto) {
        const updateCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true });
        if (!updateCategory) {
            throw new common_1.NotFoundException("category not found");
        }
        return (0, success_response_1.getsuccessRes)(updateCategory);
    }
    async remove(id) {
        const deleteCategory = await this.categoryModel.findByIdAndDelete(id);
        if (!deleteCategory) {
            throw new common_1.NotFoundException("category not found");
        }
        return (0, success_response_1.getsuccessRes)({});
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schemas_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
//# sourceMappingURL=category.service.js.map