import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectType } from './project_type.entity';

@Injectable()
export class ProjectTypeService {
  constructor(
    @InjectRepository(ProjectType)
    private readonly projectTypeRepo: Repository<ProjectType>,
  ) {}

  async findAll() {
    return this.projectTypeRepo.findAndCount();
  }

  async create(name: string) {
    return this.projectTypeRepo.save({ name });
  }
}
