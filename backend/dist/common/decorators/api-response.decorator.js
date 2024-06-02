"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMultipleResponse = exports.ApiSingleResponse = exports.RESPONSE_KEY = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
exports.RESPONSE_KEY = 'dto';
const ApiSingleResponse = ({ type, status = 200, description = '', }) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.RESPONSE_KEY, type), (0, swagger_1.ApiOkResponse)({
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
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }));
};
exports.ApiSingleResponse = ApiSingleResponse;
const ApiMultipleResponse = ({ type, status = 200, description = '', }) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.RESPONSE_KEY, type), (0, swagger_1.ApiOkResponse)({
        description,
        schema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                },
                meta: {
                    type: 'object',
                    properties: {
                        page: {
                            type: 'number',
                            default: 1,
                        },
                        take: {
                            type: 'number',
                            default: 10,
                        },
                        itemCount: {
                            type: 'number',
                            default: 10,
                        },
                        pageCount: {
                            type: 'number',
                            default: 1,
                        },
                        hasPreviousPage: {
                            type: 'boolean',
                            default: false,
                        },
                        hasNextPage: {
                            type: 'boolean',
                            default: false,
                        },
                    },
                },
                data: {
                    type: 'array',
                    items: { $ref: (0, swagger_1.getSchemaPath)(type) },
                },
            },
        },
    }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }));
};
exports.ApiMultipleResponse = ApiMultipleResponse;
//# sourceMappingURL=api-response.decorator.js.map