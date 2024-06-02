import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskHistory } from './entities/task_history.entity';
import { User } from '../user/user.entity';
import { ProjectStatus } from '../project/entities/project_status.entity';
import { Project } from '../project/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, TaskHistory, Project, ProjectStatus, User]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
