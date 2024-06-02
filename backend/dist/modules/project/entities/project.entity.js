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
exports.Project = void 0;
const basic_entity_1 = require("../../../common/basic.entity");
const typeorm_1 = require("typeorm");
const project_status_entity_1 = require("./project_status.entity");
const user_entity_1 = require("../../user/user.entity");
const project_type_entity_1 = require("../../project_type/project_type.entity");
let Project = class Project extends basic_entity_1.BasicEntity {
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Project.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_status_entity_1.ProjectStatus, (projectStatus) => projectStatus.project),
    __metadata("design:type", Array)
], Project.prototype, "statuses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_type_entity_1.ProjectType, (projectType) => projectType.projects, {
        nullable: false,
    }),
    __metadata("design:type", project_type_entity_1.ProjectType)
], Project.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.assignedProjects),
    __metadata("design:type", Array)
], Project.prototype, "assignedUsers", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)('project')
], Project);
//# sourceMappingURL=project.entity.js.map