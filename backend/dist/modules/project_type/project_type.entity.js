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
exports.ProjectType = void 0;
const basic_entity_1 = require("../../common/basic.entity");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("../project/entities/project.entity");
let ProjectType = class ProjectType extends basic_entity_1.BasicEntity {
};
exports.ProjectType = ProjectType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProjectType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_entity_1.Project, (project) => project.type),
    __metadata("design:type", Array)
], ProjectType.prototype, "projects", void 0);
exports.ProjectType = ProjectType = __decorate([
    (0, typeorm_1.Entity)('project_type')
], ProjectType);
//# sourceMappingURL=project_type.entity.js.map