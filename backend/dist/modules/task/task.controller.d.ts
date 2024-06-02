import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { Project } from '../project/entities/project.entity';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto, project: Project): Promise<import("./entities/task.entity").Task>;
    findAll(project: Project): Promise<[import("../project/entities/project_status.entity").ProjectStatus[], number]>;
    findOne(id: string, project: Project): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto, project: Project): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
    findAllTasksByStatus(statusId: number, query: PageOptionsDto, project: Project): void;
}
