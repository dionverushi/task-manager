import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { MessageDto } from 'src/common/dto/message.dto';
import { User } from '../user/user.entity';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    findAll(query: PageOptionsDto, user: User): Promise<[import("./entities/project.entity").Project[], number]>;
    findOne(id: string): Promise<import("./entities/project.entity").Project>;
    create(body: CreateProjectDto): Promise<import("./entities/project.entity").Project>;
    update(body: UpdateProjectDto): Promise<import("./entities/project.entity").Project>;
    remove(id: string): Promise<MessageDto>;
}
