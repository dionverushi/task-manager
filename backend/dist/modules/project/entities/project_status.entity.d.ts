import { BasicEntity } from 'src/common/basic.entity';
import { Project } from './project.entity';
import { Task } from 'src/modules/task/entities/task.entity';
export declare class ProjectStatus extends BasicEntity {
    id: number;
    name: string;
    order: number;
    project: Project;
    tasks: Task[];
}
