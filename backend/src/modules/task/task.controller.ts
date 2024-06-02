import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';
import {
  ApiMultipleResponse,
  ApiSingleResponse,
} from 'src/common/decorators/api-response.decorator';
import {
  StatusTasksResponseDto,
  TaskResponseDto,
} from './dto/task-response.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ProjectGuard } from 'src/common/guards/project.guard';
import { CurrentProject } from 'src/common/decorators/current-project.decorator';
import { Project } from '../project/entities/project.entity';

@ApiTags('Task')
@ApiExtraModels(TaskResponseDto, StatusTasksResponseDto)
@Controller('project/:projectId/task')
@UseGuards(JwtAuthGuard, ProjectGuard, RolesGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @Roles(UserRole.MANAGER)
  create(
    @Body() createTaskDto: CreateTaskDto,
    @CurrentProject() project: Project,
  ) {
    return this.taskService.create(project, createTaskDto);
  }

  // @Post()
  // @Roles(UserRole.MANAGER,)
  // createTaskHistory(@Body() createTaskHistoryDto: CreateTaskHistoryDto) {
  //   return this.taskService.createTaskHistory(createTaskHistoryDto);
  // }

  @Get()
  @Roles(UserRole.MANAGER, UserRole.EMPLOYEE)
  @ApiMultipleResponse({ type: StatusTasksResponseDto })
  findAll(@CurrentProject() project: Project) {
    return this.taskService.findAll(project.id);
  }

  @Get(':id')
  @Roles(UserRole.MANAGER, UserRole.EMPLOYEE)
  @ApiSingleResponse({ type: TaskResponseDto })
  findOne(@Param('id') id: string, @CurrentProject() project: Project) {
    return this.taskService.findOne(+id, project.id, [
      'subTasks',
      'assignedUser',
    ]);
  }

  @Patch(':id')
  @Roles(UserRole.MANAGER, UserRole.EMPLOYEE)
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @CurrentProject() project: Project,
  ) {
    return this.taskService.update(+id, project.id, updateTaskDto);
  }

  @Delete(':id')
  @Roles(UserRole.MANAGER)
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }

  // @Get(':id/subtasks')
  // @ApiMultipleResponse({ type: TaskResponseDto })
  // findAllSubTasksForTask(
  //   @Param('id') id: number,
  //   @Query() query: PageOptionsDto,
  //   @CurrentProject() project: Project,
  // ) {
  //   return this.taskService.findAllSubTasksForTask(id, project.id, query);
  // }

  @Get(':statusId/tasks')
  @ApiMultipleResponse({ type: TaskResponseDto })
  findAllTasksByStatus(
    @Param('statusId') statusId: number,
    @Query() query: PageOptionsDto,
    @CurrentProject() project: Project,
  ) {
    return this.taskService.findAllTasksByStatus(statusId, project.id, query);
  }
}
