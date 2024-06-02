import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/user/user.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { LoginUserDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @Inject(JwtService)
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginUserDto) {
    const user = await this.validateCredentials(
      loginDto.email,
      loginDto.password,
    );

    return {
      ...user,
      accessToken: this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        sub: user.id,
      }),
    };
  }

  async validateCredentials(email: string, password: string) {
    const user = await this.userRepo.findOne({
      where: {
        email: email.toLowerCase(),
        password: Not(IsNull()),
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        status: 'error',
        message: ['Email does not exist!'],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException({
        status: 'error',
        message: ['Password is incorrect!'],
      });
    }

    return user;
  }
}
