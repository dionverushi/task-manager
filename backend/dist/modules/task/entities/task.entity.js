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
exports.Task = exports.TaskCategory = exports.TaskPriority = void 0;
const basic_entity_1 = require("../../../common/basic.entity");
const project_status_entity_1 = require("../../project/entities/project_status.entity");
const typeorm_1 = require("typeorm");
const task_history_entity_1 = require("./task_history.entity");
const user_entity_1 = require("../../user/user.entity");
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["HIGH"] = "HIGH";
    TaskPriority["MEDIUM"] = "MEDIUM";
    TaskPriority["LOW"] = "LOW";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
var TaskCategory;
(function (TaskCategory) {
    TaskCategory["FRONTEND"] = "FRONTEND ";
    TaskCategory["BACKEND"] = "BACKEND";
})(TaskCategory || (exports.TaskCategory = TaskCategory = {}));
let Task = class Task extends basic_entity_1.BasicEntity {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Task.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "parentTaskId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Task, (task) => task.parentTask),
    __metadata("design:type", Array)
], Task.prototype, "subTasks", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Task, (task) => task.subTasks, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'parentTaskId' }),
    __metadata("design:type", Task)
], Task.prototype, "parentTask", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_status_entity_1.ProjectStatus, (projectStatus) => projectStatus.tasks, {
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'statusId' }),
    __metadata("design:type", project_status_entity_1.ProjectStatus)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_history_entity_1.TaskHistory, (taskHistory) => taskHistory.task),
    __metadata("design:type", Array)
], Task.prototype, "taskHistories", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tasks, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'assignedUserId' }),
    __metadata("design:type", user_entity_1.User)
], Task.prototype, "assignedUser", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)('task')
], Task);
//# sourceMappingURL=task.entity.js.map