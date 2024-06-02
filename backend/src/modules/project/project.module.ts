import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectStatus } from './entities/project_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectStatus])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
