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
exports.TaskHistory = void 0;
const basic_entity_1 = require("../../../common/basic.entity");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./task.entity");
const project_status_entity_1 = require("../../project/entities/project_status.entity");
let TaskHistory = class TaskHistory extends basic_entity_1.BasicEntity {
};
exports.TaskHistory = TaskHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TaskHistory.prototype, "taskId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TaskHistory.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, { nullable: false }),
    __metadata("design:type", task_entity_1.Task)
], TaskHistory.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_status_entity_1.ProjectStatus, { nullable: false }),
    __metadata("design:type", project_status_entity_1.ProjectStatus)
], TaskHistory.prototype, "status", void 0);
exports.TaskHistory = TaskHistory = __decorate([
    (0, typeorm_1.Entity)('task_history')
], TaskHistory);
//# sourceMappingURL=task_history.entity.js.map