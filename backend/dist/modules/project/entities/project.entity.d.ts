import { BasicEntity } from 'src/common/basic.entity';
import { ProjectStatus } from './project_status.entity';
import { User } from 'src/modules/user/user.entity';
import { ProjectType } from 'src/modules/project_type/project_type.entity';
export declare class Project extends BasicEntity {
    id: number;
    name: string;
    description: string;
    typeId: number;
    statuses: ProjectStatus[];
    type: ProjectType;
    assignedUsers: User[];
}
