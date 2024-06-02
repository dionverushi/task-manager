"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorDto = exports.ApiSingleDto = exports.ApiPaginateDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiPaginateDto = ({ type, status = 200, description = '', }) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        description,
        status,
        schema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                },
                meta: {
                    type: 'object',
                    properties: {
                        total: {
                            type: 'number',
                        },
                        page: {
                            type: 'number',
                        },
                        pageSize: {
                            type: 'number',
                        },
                        totalPages: {
                            type: 'number',
                        },
                    },
                },
                data: {
                    type: 'array',
                    items: { $ref: (0, swagger_1.getSchemaPath)(type) },
                },
            },
        },
    }));
};
exports.ApiPaginateDto = ApiPaginateDto;
const ApiSingleDto = ({ type, status = 200, description = '', }) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        description,
        status,
        schema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                },
                data: {
                    $ref: (0, swagger_1.getSchemaPath)(type),
                },
            },
        },
    }));
};
exports.ApiSingleDto = ApiSingleDto;
const ApiErrorDto = ({ status = 200, description = '', }) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        description,
        status,
        schema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                },
                data: {
                    type: 'array',
                    items: { type: 'string' },
                },
            },
        },
    }));
};
exports.ApiErrorDto = ApiErrorDto;
//# sourceMappingURL=pagination.dto.js.map