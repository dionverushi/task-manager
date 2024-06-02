import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ProjectStatus } from './entities/project_status.entity';
import { User } from '../user/user.entity';
export declare class ProjectService {
    private readonly projectRepo;
    private readonly projectStatusRepo;
    constructor(projectRepo: Repository<Project>, projectStatusRepo: Repository<ProjectStatus>);
    create(body: CreateProjectDto): Promise<Project>;
    findAll(query: PageOptionsDto, currentUser: User): Promise<[Project[], number]>;
    findOne(id: number): Promise<Project>;
    update(body: UpdateProjectDto): Promise<Project>;
    remove(id: number): Promise<void>;
    getAssignedManagers(ids: number[]): Promise<User[]>;
}
