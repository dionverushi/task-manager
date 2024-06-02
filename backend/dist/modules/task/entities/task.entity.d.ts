import { BasicEntity } from 'src/common/basic.entity';
import { ProjectStatus } from 'src/modules/project/entities/project_status.entity';
import { TaskHistory } from './task_history.entity';
import { User } from 'src/modules/user/user.entity';
export declare enum TaskPriority {
    HIGH = "HIGH",
    MEDIUM = "MEDIUM",
    LOW = "LOW"
}
export declare enum TaskCategory {
    FRONTEND = "FRONTEND ",
    BACKEND = "BACKEND"
}
export declare class Task extends BasicEntity {
    id: number;
    name: string;
    priority: TaskPriority;
    deadline: Date;
    order: number;
    parentTaskId: number;
    statusId: number;
    category: TaskCategory;
    subTasks: Task[];
    parentTask: Task;
    status: ProjectStatus;
    taskHistories: TaskHistory[];
    assignedUser: User;
}
