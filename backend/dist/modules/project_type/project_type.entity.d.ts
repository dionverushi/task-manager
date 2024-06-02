import { BasicEntity } from 'src/common/basic.entity';
import { Project } from '../project/entities/project.entity';
export declare class ProjectType extends BasicEntity {
    id: number;
    name: string;
    projects: Project[];
}
