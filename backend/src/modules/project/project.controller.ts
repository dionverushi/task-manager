import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ProjectResponseDto } from './dto/project-response.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import {
  ApiMultipleResponse,
  ApiSingleResponse,
} from 'src/common/decorators/api-response.decorator';
import { MessageDto } from 'src/common/dto/message.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from '../user/user.entity';

@ApiTags('Project')
@ApiExtraModels(ProjectResponseDto)
@Controller('project')
@UseGuards(JwtAuthGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @ApiMultipleResponse({ type: ProjectResponseDto })
  findAll(@Query() query: PageOptionsDto, @CurrentUser() user: User) {
    return this.projectService.findAll(query, user);
  }

  @Get(':id')
  @ApiSingleResponse({ type: ProjectResponseDto })
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Post()
  @ApiSingleResponse({ type: ProjectResponseDto })
  create(@Body() body: CreateProjectDto) {
    return this.projectService.create(body);
  }

  @Patch(':id')
  @ApiSingleResponse({ type: ProjectResponseDto })
  update(@Body() body: UpdateProjectDto) {
    return this.projectService.update(body);
  }

  @Delete(':id')
  @ApiSingleResponse({ type: MessageDto })
  async remove(@Param('id') id: string) {
    await this.projectService.remove(+id);

    return new MessageDto('Project has been deleted!');
  }
}
