import { BasicEntity } from 'src/common/basic.entity';
import { Task } from './task.entity';
import { ProjectStatus } from 'src/modules/project/entities/project_status.entity';
export declare class TaskHistory extends BasicEntity {
    id: number;
    taskId: number;
    statusId: number;
    task: Task;
    status: ProjectStatus;
}
