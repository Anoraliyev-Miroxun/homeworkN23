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
exports.SallerController = void 0;
const common_1 = require("@nestjs/common");
const saller_service_1 = require("./saller.service");
const create_saller_dto_1 = require("./dto/create-saller.dto");
const update_saller_dto_1 = require("./dto/update-saller.dto");
let SallerController = class SallerController {
    sallerService;
    constructor(sallerService) {
        this.sallerService = sallerService;
    }
    create(createSallerDto) {
        return this.sallerService.create(createSallerDto);
    }
    findAll() {
        return this.sallerService.findAll();
    }
    findOne(id) {
        return this.sallerService.findOne(+id);
    }
    update(id, updateSallerDto) {
        return this.sallerService.update(+id, updateSallerDto);
    }
    remove(id) {
        return this.sallerService.remove(+id);
    }
};
exports.SallerController = SallerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saller_dto_1.CreateSallerDto]),
    __metadata("design:returntype", void 0)
], SallerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SallerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SallerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_saller_dto_1.UpdateSallerDto]),
    __metadata("design:returntype", void 0)
], SallerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SallerController.prototype, "remove", null);
exports.SallerController = SallerController = __decorate([
    (0, common_1.Controller)('saller'),
    __metadata("design:paramtypes", [saller_service_1.SallerService])
], SallerController);
//# sourceMappingURL=saller.controller.js.map