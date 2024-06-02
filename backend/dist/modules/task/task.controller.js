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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("./task.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const role_guard_1 = require("../../common/guards/role.guard");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const user_role_enum_1 = require("../../common/constants/user-role.enum");
const api_response_decorator_1 = require("../../common/decorators/api-response.decorator");
const task_response_dto_1 = require("./dto/task-response.dto");
const swagger_1 = require("@nestjs/swagger");
const page_options_dto_1 = require("../../common/dto/page-options.dto");
const project_guard_1 = require("../../common/guards/project.guard");
const current_project_decorator_1 = require("../../common/decorators/current-project.decorator");
const project_entity_1 = require("../project/entities/project.entity");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(createTaskDto, project) {
        return this.taskService.create(project, createTaskDto);
    }
    findAll(project) {
        return this.taskService.findAll(project.id);
    }
    findOne(id, project) {
        return this.taskService.findOne(+id, project.id, [
            'subTasks',
            'assignedUser',
        ]);
    }
    update(id, updateTaskDto, project) {
        return this.taskService.update(+id, project.id, updateTaskDto);
    }
    remove(id) {
        return this.taskService.remove(+id);
    }
    findAllTasksByStatus(statusId, query, project) {
        return this.taskService.findAllTasksByStatus(statusId, project.id, query);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_project_decorator_1.CurrentProject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto,
        project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER, user_role_enum_1.UserRole.EMPLOYEE),
    (0, api_response_decorator_1.ApiMultipleResponse)({ type: task_response_dto_1.StatusTasksResponseDto }),
    __param(0, (0, current_project_decorator_1.CurrentProject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER, user_role_enum_1.UserRole.EMPLOYEE),
    (0, api_response_decorator_1.ApiSingleResponse)({ type: task_response_dto_1.TaskResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_project_decorator_1.CurrentProject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER, user_role_enum_1.UserRole.EMPLOYEE),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_project_decorator_1.CurrentProject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto,
        project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, role_decorator_1.Roles)(user_role_enum_1.UserRole.MANAGER),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':statusId/tasks'),
    (0, api_response_decorator_1.ApiMultipleResponse)({ type: task_response_dto_1.TaskResponseDto }),
    __param(0, (0, common_1.Param)('statusId')),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, current_project_decorator_1.CurrentProject)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, page_options_dto_1.PageOptionsDto,
        project_entity_1.Project]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "findAllTasksByStatus", null);
exports.TaskController = TaskController = __decorate([
    (0, swagger_1.ApiTags)('Task'),
    (0, swagger_1.ApiExtraModels)(task_response_dto_1.TaskResponseDto, task_response_dto_1.StatusTasksResponseDto),
    (0, common_1.Controller)('project/:projectId/task'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, project_guard_1.ProjectGuard, role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map