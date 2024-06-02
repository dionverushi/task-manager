import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ProjectStatus } from './entities/project_status.entity';
import { defaultProjectStatuses } from './default-project-statuses.data';
import { User } from '../user/user.entity';
import { UserRole } from 'src/common/constants/user-role.enum';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
    @InjectRepository(ProjectStatus)
    private readonly projectStatusRepo: Repository<ProjectStatus>,
  ) {}

  async create(body: CreateProjectDto) {
    const createdProject = this.projectRepo.create(body);

    const managers = await this.getAssignedManagers(body.assignedManagerIds);
    createdProject.assignedUsers = managers;

    const savedProject = await this.projectRepo.save(createdProject);

    this.projectStatusRepo.insert(
      defaultProjectStatuses.map((projectStatus, i) => ({
        name: projectStatus,
        order: i + 1,
        project: { id: savedProject.id },
      })),
    );

    return savedProject;
  }

  async findAll(query: PageOptionsDto, currentUser: User) {
    const where: FindOptionsWhere<Project> = {};

    if (currentUser.role !== UserRole.ADMIN) {
      where.assignedUsers = { id: currentUser.id };
    }

    return this.projectRepo.findAndCount({
      where,
      take: query.take,
      skip: query.skip,
    });
  }

  async findOne(id: number) {
    const project = await this.projectRepo.findOne({ where: { id } });

    if (!project) {
      throw new NotFoundException('Project not found!');
    }

    return project;
  }

  async update(body: UpdateProjectDto) {
    const project = await this.findOne(body.id);

    await this.projectRepo.update(project.id, body);

    return project;
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.projectRepo.delete(id);
  }

  async getAssignedManagers(ids: number[]) {
    const managers = await User.find({
      where: { id: In(ids), role: UserRole.MANAGER },
    });

    if (managers.length !== ids.length) {
      throw new NotFoundException('At least one manager is not found!');
    }

    return managers;
  }
}
