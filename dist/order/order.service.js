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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_model_1 = require("./model/order.model");
const mongoose_2 = require("mongoose");
const product_service_1 = require("../product/product.service");
const success_response_1 = require("../utils/success-response");
let OrderService = class OrderService {
    orderModel;
    productService;
    constructor(orderModel, productService) {
        this.orderModel = orderModel;
        this.productService = productService;
    }
    async create(createOrderDto) {
        const product = await this.productService.findOne(createOrderDto.productId);
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        const newOrder = await this.orderModel.create(createOrderDto);
        return (0, success_response_1.getsuccessRes)(newOrder);
    }
    async findAll() {
        const data = await this.orderModel.find();
        return (0, success_response_1.getsuccessRes)(data);
    }
    async findOne(id) {
        const data = await this.orderModel.findById(id);
        if (!data) {
            throw new common_1.NotFoundException("order not found");
        }
        return (0, success_response_1.getsuccessRes)(data);
    }
    async update(id, updateOrderDto) {
        if (updateOrderDto.productId) {
            await this.productService.findOne(updateOrderDto.productId);
        }
        const updateOrder = await this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
        if (!updateOrder) {
            throw new common_1.NotFoundException("order not found");
        }
        return (0, success_response_1.getsuccessRes)(updateOrder);
    }
    async remove(id) {
        const data = await this.orderModel.findByIdAndDelete(id);
        if (!data) {
            throw new common_1.NotFoundException("order not found");
        }
        return (0, success_response_1.getsuccessRes)({});
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_model_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        product_service_1.ProductService])
], OrderService);
//# sourceMappingURL=order.service.js.map