import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { TaskHistory } from './entities/task_history.entity';
import { CreateTaskHistoryDto } from './dto/create-task-history.dto';
import { Project } from '../project/entities/project.entity';
import { ProjectStatus } from '../project/entities/project_status.entity';
import { User } from '../user/user.entity';
export declare class TaskService {
    private readonly taskRepo;
    private readonly taskHistoryRepo;
    private readonly projectRepo;
    private readonly projectStatusRepo;
    private readonly userRepo;
    constructor(taskRepo: Repository<Task>, taskHistoryRepo: Repository<TaskHistory>, projectRepo: Repository<Project>, projectStatusRepo: Repository<ProjectStatus>, userRepo: Repository<User>);
    create(project: Project, createTaskDto: CreateTaskDto): Promise<Task>;
    createTaskHistory(createTaskHistoryDto: CreateTaskHistoryDto): void;
    findAll(projectId: number): Promise<[ProjectStatus[], number]>;
    findAllSubTasksForTask(id: number, projectId: number, query: PageOptionsDto): Promise<[Task[], number]>;
    findAllTasksByStatus(id: number, projectId: number, query: PageOptionsDto): void;
    findOne(id: number, projectId?: number, relations?: string[]): Promise<Task>;
    update(id: number, projectId: number, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
