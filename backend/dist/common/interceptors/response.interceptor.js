"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const page_meta_dto_1 = require("../dto/page-meta.dto");
const api_response_decorator_1 = require("../decorators/api-response.decorator");
function isList(value) {
    if (Array.isArray(value)) {
        if (value.length >= 2 && typeof value[1] === 'number') {
            return true;
        }
    }
    return false;
}
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((res) => this.responseHandler(res, context)), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(() => this.errorHandler(err, context))));
    }
    errorHandler(exception, context) {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            status: 'error',
            statusCode: status,
            path: request.url,
            message: exception.message,
            result: exception,
        });
    }
    responseHandler(data, context) {
        const ctx = context.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();
        const type = Reflect.getMetadata(api_response_decorator_1.RESPONSE_KEY, context.getHandler());
        const response = {
            status: res.statusCode,
            data,
        };
        if (isList(response.data)) {
            response.meta = new page_meta_dto_1.PageMetaDto({
                itemCount: response.data[1],
                pageOptionsDto: req.query,
            });
            response.data = response.data[0];
        }
        if (!!type) {
            response.data = (0, class_transformer_1.instanceToPlain)((0, class_transformer_1.plainToInstance)(type, response.data, {
                excludeExtraneousValues: true,
            }));
        }
        return response;
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map