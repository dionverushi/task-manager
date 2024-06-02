import { Module } from '@nestjs/common';
import { ProjectTypeController } from './project_type.controller';
import { ProjectTypeService } from './project_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectType } from './project_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectType])],
  controllers: [ProjectTypeController],
  providers: [ProjectTypeService],
})
export class ProjectTypeModule {}
