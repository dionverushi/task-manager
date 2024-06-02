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
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const typeorm_2 = require("typeorm");
const task_history_entity_1 = require("./entities/task_history.entity");
const create_task_history_dto_1 = require("./dto/create-task-history.dto");
const project_entity_1 = require("../project/entities/project.entity");
const project_status_entity_1 = require("../project/entities/project_status.entity");
const user_entity_1 = require("../user/user.entity");
const sort_enum_1 = require("../../common/constants/sort.enum");
let TaskService = class TaskService {
    constructor(taskRepo, taskHistoryRepo, projectRepo, projectStatusRepo, userRepo) {
        this.taskRepo = taskRepo;
        this.taskHistoryRepo = taskHistoryRepo;
        this.projectRepo = projectRepo;
        this.projectStatusRepo = projectStatusRepo;
        this.userRepo = userRepo;
    }
    async create(project, createTaskDto) {
        let user = null;
        if (createTaskDto.userId != null) {
            user = await this.userRepo.findOne({
                where: { id: createTaskDto.userId },
            });
        }
        const projectStatus = await this.projectStatusRepo.findOne({
            where: { project: { id: project.id }, order: 1 },
        });
        const created = this.taskRepo.create({
            ...createTaskDto,
            status: projectStatus,
            assignedUser: user,
        });
        const createTaskHistoryDto = new create_task_history_dto_1.CreateTaskHistoryDto();
        createTaskHistoryDto.taskId = created.id;
        createTaskHistoryDto.statusId = created.statusId;
        this.createTaskHistory(createTaskHistoryDto);
        return this.taskRepo.save(created);
    }
    createTaskHistory(createTaskHistoryDto) {
        const created = this.taskHistoryRepo.create(createTaskHistoryDto);
        this.taskHistoryRepo.save(created);
    }
    async findAll(projectId) {
        return project_status_entity_1.ProjectStatus.findAndCount({
            where: { project: { id: projectId } },
            order: { order: sort_enum_1.Sort.ASC },
            relations: ['tasks.assignedUser'],
        });
    }
    findAllSubTasksForTask(id, projectId, query) {
        return this.taskRepo.findAndCount({
            where: {
                name: query.search,
                parentTaskId: id,
                status: { project: { id: projectId } },
            },
            take: query.take,
            skip: query.skip,
        });
    }
    findAllTasksByStatus(id, projectId, query) {
        this.taskRepo.findAndCount({
            where: {
                name: query.search,
                statusId: id,
                status: { project: { id: projectId } },
            },
            take: query.take,
            skip: query.skip,
        });
    }
    async findOne(id, projectId, relations) {
        const taskExists = await this.taskRepo.findOne({
            where: { id: id, status: { project: { id: projectId } } },
            relations,
        });
        if (!taskExists) {
            throw new common_1.NotFoundException('Task was not found ');
        }
        return taskExists;
    }
    async update(id, projectId, updateTaskDto) {
        const taskToUpdate = await this.findOne(id, projectId);
        const updated = this.taskRepo.update(id, updateTaskDto);
        if (taskToUpdate.statusId !== updateTaskDto.statusId) {
            this.taskHistoryRepo.save({
                task: taskToUpdate,
                statusId: updateTaskDto.statusId,
            });
        }
        return updated;
    }
    async remove(id) {
        await this.findOne(id);
        await this.taskRepo.delete(id);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(task_history_entity_1.TaskHistory)),
    __param(2, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __param(3, (0, typeorm_1.InjectRepository)(project_status_entity_1.ProjectStatus)),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TaskService);
//# sourceMappingURL=task.service.js.map