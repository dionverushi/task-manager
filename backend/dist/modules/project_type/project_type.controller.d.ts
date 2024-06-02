import { ProjectTypeService } from './project_type.service';
export declare class ProjectTypeController {
    private readonly projectTypeService;
    constructor(projectTypeService: ProjectTypeService);
    findAll(): Promise<[import("./project_type.entity").ProjectType[], number]>;
    createOne(name: string): Promise<{
        name: string;
    } & import("./project_type.entity").ProjectType>;
}
