import { BasicEntity } from 'src/common/basic.entity';
import { Project } from '../project/entities/project.entity';
import { UserRole } from 'src/common/constants/user-role.enum';
import { Task } from '../task/entities/task.entity';
export declare class User extends BasicEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    confirmationToken: string;
    confirmedAt: Date;
    assignedProjects: Project[];
    tasks: Task[];
}
