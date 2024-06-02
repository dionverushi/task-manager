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
exports.ProjectTypeController = void 0;
const common_1 = require("@nestjs/common");
const project_type_service_1 = require("./project_type.service");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const user_role_enum_1 = require("../../common/constants/user-role.enum");
const api_response_decorator_1 = require("../../common/decorators/api-response.decorator");
const swagger_1 = require("@nestjs/swagger");
const project_type_dto_1 = require("./dto/project_type.dto");
let ProjectTypeController = class ProjectTypeController {
    constructor(projectTypeService) {
        this.projectTypeService = projectTypeService;
    }
    findAll() {
        return this.projectTypeService.findAll();
    }
    createOne(name) {
        return this.projectTypeService.create(name);
    }
};
exports.ProjectTypeController = ProjectTypeController;
__decorate([
    (0, common_1.Get)(),
    (0, api_response_decorator_1.ApiMultipleResponse)({ type: project_type_dto_1.ProjectTypeResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: project_type_dto_1.ProjectTypeResponseDto }),
    __param(0, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTypeController.prototype, "createOne", null);
exports.ProjectTypeController = ProjectTypeController = __decorate([
    (0, swagger_1.ApiTags)('Project Type'),
    (0, swagger_1.ApiExtraModels)(project_type_dto_1.ProjectTypeResponseDto),
    (0, common_1.Controller)('project_type'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.ADMIN, user_role_enum_1.UserRole.MANAGER),
    __param(0, (0, common_1.Inject)(project_type_service_1.ProjectTypeService)),
    __metadata("design:paramtypes", [project_type_service_1.ProjectTypeService])
], ProjectTypeController);
//# sourceMappingURL=project_type.controller.js.map