import { TaskCategory, TaskPriority } from '../entities/task.entity';
export declare class CreateTaskDto {
    name: string;
    priority: TaskPriority;
    category: TaskCategory;
    deadline: Date;
    order?: number;
    parentId?: number;
    statusId?: number;
    projectId?: number;
    userId?: number;
}
