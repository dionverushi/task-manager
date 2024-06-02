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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const create_project_dto_1 = require("./dto/create-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const swagger_1 = require("@nestjs/swagger");
const page_options_dto_1 = require("../../common/dto/page-options.dto");
const project_response_dto_1 = require("./dto/project-response.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const api_response_decorator_1 = require("../../common/decorators/api-response.decorator");
const message_dto_1 = require("../../common/dto/message.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const user_entity_1 = require("../user/user.entity");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    findAll(query, user) {
        return this.projectService.findAll(query, user);
    }
    findOne(id) {
        return this.projectService.findOne(+id);
    }
    create(body) {
        return this.projectService.create(body);
    }
    update(body) {
        return this.projectService.update(body);
    }
    async remove(id) {
        await this.projectService.remove(+id);
        return new message_dto_1.MessageDto('Project has been deleted!');
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.Get)(),
    (0, api_response_decorator_1.ApiMultipleResponse)({ type: project_response_dto_1.ProjectResponseDto }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_options_dto_1.PageOptionsDto, user_entity_1.User]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: project_response_dto_1.ProjectResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: project_response_dto_1.ProjectResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: project_response_dto_1.ProjectResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: message_dto_1.MessageDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "remove", null);
exports.ProjectController = ProjectController = __decorate([
    (0, swagger_1.ApiTags)('Project'),
    (0, swagger_1.ApiExtraModels)(project_response_dto_1.ProjectResponseDto),
    (0, common_1.Controller)('project'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map