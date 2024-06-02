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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResponseDto = exports.StatusTasksResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const task_entity_1 = require("../entities/task.entity");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/user.entity");
class StatusTasksResponseDto {
}
exports.StatusTasksResponseDto = StatusTasksResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], StatusTasksResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], StatusTasksResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], StatusTasksResponseDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [TaskResponseDto] }),
    (0, class_transformer_1.Type)(() => TaskResponseDto),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], StatusTasksResponseDto.prototype, "tasks", void 0);
class TaskResponseDto {
}
exports.TaskResponseDto = TaskResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TaskResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TaskResponseDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], TaskResponseDto.prototype, "deadline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], TaskResponseDto.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.User }),
    (0, class_transformer_1.Type)(() => user_entity_1.User),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", user_entity_1.User)
], TaskResponseDto.prototype, "assignedUser", void 0);
//# sourceMappingURL=task-response.dto.js.map