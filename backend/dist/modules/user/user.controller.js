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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const create_user_dto_1 = require("./dto/create-user.dto");
const role_guard_1 = require("../../common/guards/role.guard");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const user_role_enum_1 = require("../../common/constants/user-role.enum");
const page_options_dto_1 = require("../../common/dto/page-options.dto");
const swagger_1 = require("@nestjs/swagger");
const user_response_dto_1 = require("./dto/user-response.dto");
const api_response_decorator_1 = require("../../common/decorators/api-response.decorator");
const update_user_dto_1 = require("./dto/update-user.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const user_entity_1 = require("./user.entity");
const message_dto_1 = require("../../common/dto/message.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll(query) {
        return this.userService.findAll(query);
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    createOne(body) {
        return this.userService.createOne(body);
    }
    createEmployee(body) {
        const data = body;
        data.role = user_role_enum_1.UserRole.EMPLOYEE;
        return this.userService.createOne(data);
    }
    updateOne(body, user) {
        return this.userService.updateOne(body, user);
    }
    async deleteOne(id, user) {
        await this.userService.deleteOne(+id, user);
        return new message_dto_1.MessageDto('User has been deleted!');
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, api_response_decorator_1.ApiMultipleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_dto_1.PageOptionsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createOne", null);
__decorate([
    (0, common_1.Post)('employee'),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Put)(),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.MANAGER),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: user_response_dto_1.UserResponseDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.MANAGER),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: message_dto_1.MessageDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteOne", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiExtraModels)(user_response_dto_1.UserResponseDto),
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    __param(0, (0, common_1.Inject)(user_service_1.UserService)),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map