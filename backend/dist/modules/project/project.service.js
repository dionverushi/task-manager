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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./entities/project.entity");
const typeorm_2 = require("typeorm");
const project_status_entity_1 = require("./entities/project_status.entity");
const default_project_statuses_data_1 = require("./default-project-statuses.data");
const user_entity_1 = require("../user/user.entity");
const user_role_enum_1 = require("../../common/constants/user-role.enum");
let ProjectService = class ProjectService {
    constructor(projectRepo, projectStatusRepo) {
        this.projectRepo = projectRepo;
        this.projectStatusRepo = projectStatusRepo;
    }
    async create(body) {
        const createdProject = this.projectRepo.create(body);
        const managers = await this.getAssignedManagers(body.assignedManagerIds);
        createdProject.assignedUsers = managers;
        const savedProject = await this.projectRepo.save(createdProject);
        this.projectStatusRepo.insert(default_project_statuses_data_1.defaultProjectStatuses.map((projectStatus, i) => ({
            name: projectStatus,
            order: i + 1,
            project: { id: savedProject.id },
        })));
        return savedProject;
    }
    async findAll(query, currentUser) {
        const where = {};
        if (currentUser.role !== user_role_enum_1.UserRole.ADMIN) {
            where.assignedUsers = { id: currentUser.id };
        }
        return this.projectRepo.findAndCount({
            where,
            take: query.take,
            skip: query.skip,
        });
    }
    async findOne(id) {
        const project = await this.projectRepo.findOne({ where: { id } });
        if (!project) {
            throw new common_1.NotFoundException('Project not found!');
        }
        return project;
    }
    async update(body) {
        const project = await this.findOne(body.id);
        await this.projectRepo.update(project.id, body);
        return project;
    }
    async remove(id) {
        await this.findOne(id);
        await this.projectRepo.delete(id);
    }
    async getAssignedManagers(ids) {
        const managers = await user_entity_1.User.find({
            where: { id: (0, typeorm_2.In)(ids), role: user_role_enum_1.UserRole.MANAGER },
        });
        if (managers.length !== ids.length) {
            throw new common_1.NotFoundException('At least one manager is not found!');
        }
        return managers;
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(project_status_entity_1.ProjectStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map