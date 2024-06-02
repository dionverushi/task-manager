import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CreateEmployeeDto, CreateUserDto } from './dto/create-user.dto';
import { RolesGuard } from 'src/common/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';
import {
  ApiMultipleResponse,
  ApiSingleResponse,
} from 'src/common/decorators/api-response.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from './user.entity';
import { MessageDto } from 'src/common/dto/message.dto';

@ApiTags('User')
@ApiExtraModels(UserResponseDto)
@Controller('user')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
  ) {}

  @Get()
  @ApiMultipleResponse({ type: UserResponseDto })
  findAll(@Query() query: PageOptionsDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  @ApiSingleResponse({ type: UserResponseDto })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiSingleResponse({ type: UserResponseDto })
  createOne(@Body() body: CreateUserDto) {
    return this.userService.createOne(body);
  }

  @Post('employee')
  @Roles(UserRole.MANAGER)
  @ApiSingleResponse({ type: UserResponseDto })
  createEmployee(@Body() body: CreateEmployeeDto) {
    const data = body as CreateUserDto;
    data.role = UserRole.EMPLOYEE;
    return this.userService.createOne(data);
  }

  @Put()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiSingleResponse({ type: UserResponseDto })
  updateOne(@Body() body: UpdateUserDto, @CurrentUser() user: User) {
    return this.userService.updateOne(body, user);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiSingleResponse({ type: MessageDto })
  async deleteOne(@Param('id') id: string, @CurrentUser() user: User) {
    await this.userService.deleteOne(+id, user);

    return new MessageDto('User has been deleted!');
  }
}
