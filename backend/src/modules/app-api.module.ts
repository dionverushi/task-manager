import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ProjectTypeModule } from './project_type/project_type.module';

@Module({
  imports: [UserModule, ProjectModule, ProjectTypeModule, TaskModule],
})
export class AppApiModule {}
