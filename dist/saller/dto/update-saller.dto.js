"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSallerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_saller_dto_1 = require("./create-saller.dto");
class UpdateSallerDto extends (0, mapped_types_1.PartialType)(create_saller_dto_1.CreateSallerDto) {
}
exports.UpdateSallerDto = UpdateSallerDto;
//# sourceMappingURL=update-saller.dto.js.map