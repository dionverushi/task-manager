import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ProjectTypeService } from './project_type.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';
import {
  ApiMultipleResponse,
  ApiSingleResponse,
} from 'src/common/decorators/api-response.decorator';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ProjectTypeResponseDto } from './dto/project_type.dto';

@ApiTags('Project Type')
@ApiExtraModels(ProjectTypeResponseDto)
@Controller('project_type')
@UseGuards(JwtAuthGuard)
@Roles(UserRole.ADMIN, UserRole.MANAGER)
export class ProjectTypeController {
  constructor(
    @Inject(ProjectTypeService)
    private readonly projectTypeService: ProjectTypeService,
  ) {}

  @Get()
  @ApiMultipleResponse({ type: ProjectTypeResponseDto })
  findAll() {
    return this.projectTypeService.findAll();
  }

  @Post()
  @ApiSingleResponse({ type: ProjectTypeResponseDto })
  createOne(@Body('name') name: string) {
    return this.projectTypeService.create(name);
  }
}
