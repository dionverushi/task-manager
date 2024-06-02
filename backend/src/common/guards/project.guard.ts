import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Project } from 'src/modules/project/entities/project.entity';

@Injectable()
export class ProjectGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { params } = request;
    const projectId = params.projectId;

    // Validate projectId and fetch project details
    const project = await Project.findOne({ where: { id: projectId } });
    if (!project) {
      throw new NotFoundException(`Project with ID ${projectId} not found`);
    }

    // Attach the project to the request object
    request.project = project;

    return true;
  }
}
