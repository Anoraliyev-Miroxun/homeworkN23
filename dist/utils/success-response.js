"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getsuccessRes = void 0;
const getsuccessRes = (data, statusCode = 200) => {
    return {
        statusCode,
        message: 'success',
        data,
    };
};
exports.getsuccessRes = getsuccessRes;
//# sourceMappingURL=success-response.js.map