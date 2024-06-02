import { TaskPriority } from '../entities/task.entity';
import { User } from 'src/modules/user/user.entity';
export declare class StatusTasksResponseDto {
    id: number;
    name: string;
    order: number;
    tasks: TaskResponseDto[];
}
export declare class TaskResponseDto {
    id: number;
    name: string;
    priority: TaskPriority;
    deadline: Date;
    order: number;
    assignedUser: User;
}
