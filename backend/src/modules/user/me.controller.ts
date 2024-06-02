import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { User } from './user.entity';
import { ApiSingleResponse } from 'src/common/decorators/api-response.decorator';
import { UserResponseDto } from './dto/user-response.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('me')
@UseGuards(JwtAuthGuard)
export class MeController {
  @Get()
  @ApiSingleResponse({ type: UserResponseDto })
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
