import { Repository } from 'typeorm';
import { ProjectType } from './project_type.entity';
export declare class ProjectTypeService {
    private readonly projectTypeRepo;
    constructor(projectTypeRepo: Repository<ProjectType>);
    findAll(): Promise<[ProjectType[], number]>;
    create(name: string): Promise<{
        name: string;
    } & ProjectType>;
}
