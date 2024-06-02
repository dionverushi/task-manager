import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { ApiSingleResponse } from 'src/common/decorators/api-response.decorator';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Controller('auth')
@ApiTags('Auth')
@ApiExtraModels(LoginResponseDto)
export class AuthController {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  // @Post('register')
  // @ApiSingleResponse({ type: MessageDto })
  // async register(@Body() body: any) {}

  @Post('login')
  @ApiSingleResponse({ type: LoginResponseDto })
  login(@Body() body: LoginUserDto) {
    return this.authService.login(body);
  }
}
