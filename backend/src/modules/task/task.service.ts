import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { TaskHistory } from './entities/task_history.entity';
import { CreateTaskHistoryDto } from './dto/create-task-history.dto';
import { Project } from '../project/entities/project.entity';
import { ProjectStatus } from '../project/entities/project_status.entity';
import { User } from '../user/user.entity';
import { Sort } from 'src/common/constants/sort.enum';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
    @InjectRepository(TaskHistory)
    private readonly taskHistoryRepo: Repository<TaskHistory>,
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
    @InjectRepository(ProjectStatus)
    private readonly projectStatusRepo: Repository<ProjectStatus>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(project: Project, createTaskDto: CreateTaskDto) {
    let user: User = null;
    if (createTaskDto.userId != null) {
      user = await this.userRepo.findOne({
        where: { id: createTaskDto.userId },
      });
    }

    const projectStatus = await this.projectStatusRepo.findOne({
      where: { project: { id: project.id }, order: 1 },
    });

    // createTaskDto.statusId = projectStatus.id;
    const created = this.taskRepo.create({
      ...createTaskDto,
      status: projectStatus,
      assignedUser: user,
    });

    const createTaskHistoryDto = new CreateTaskHistoryDto();
    createTaskHistoryDto.taskId = created.id;
    createTaskHistoryDto.statusId = created.statusId;

    this.createTaskHistory(createTaskHistoryDto);

    return this.taskRepo.save(created);
  }

  createTaskHistory(createTaskHistoryDto: CreateTaskHistoryDto) {
    const created = this.taskHistoryRepo.create(createTaskHistoryDto);
    this.taskHistoryRepo.save(created);
  }

  async findAll(projectId: number) {
    return ProjectStatus.findAndCount({
      where: { project: { id: projectId } },
      order: { order: Sort.ASC },
      relations: ['tasks.assignedUser'],
    });
  }

  findAllSubTasksForTask(id: number, projectId: number, query: PageOptionsDto) {
    return this.taskRepo.findAndCount({
      where: {
        name: query.search,
        parentTaskId: id,
        status: { project: { id: projectId } },
      },
      take: query.take,
      skip: query.skip,
    });
  }

  findAllTasksByStatus(id: number, projectId: number, query: PageOptionsDto) {
    this.taskRepo.findAndCount({
      where: {
        name: query.search,
        statusId: id,
        status: { project: { id: projectId } },
      },
      take: query.take,
      skip: query.skip,
    });
  }

  async findOne(id: number, projectId?: number, relations?: string[]) {
    const taskExists = await this.taskRepo.findOne({
      where: { id: id, status: { project: { id: projectId } } },
      relations,
    });
    if (!taskExists) {
      throw new NotFoundException('Task was not found ');
    }

    return taskExists;
  }

  async update(id: number, projectId: number, updateTaskDto: UpdateTaskDto) {
    const taskToUpdate = await this.findOne(id, projectId);

    const updated = this.taskRepo.update(id, updateTaskDto);

    if (taskToUpdate.statusId !== updateTaskDto.statusId) {
      this.taskHistoryRepo.save({
        task: taskToUpdate,
        statusId: updateTaskDto.statusId,
      });
    }

    return updated;
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.taskRepo.delete(id);
  }
}
