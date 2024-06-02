import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { UserRole } from 'src/common/constants/user-role.enum';
import * as bcrypt from 'bcrypt';
import { configService } from 'src/config/config.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findAll(query: PageOptionsDto) {
    return this.userRepo.findAndCount({ take: query.take, skip: query.skip });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async createOne(body: CreateUserDto) {
    const user = await this.userRepo.findOne({ where: { email: body.email } });

    if (!!user) {
      throw new ConflictException('User already exists');
    }

    const created = this.userRepo.create(body);

    created.password = await bcrypt.hash(
      configService.getValue('ADMIN_PASSWORD'),
      10,
    );

    const saved = await this.userRepo.save(created);

    return saved;
  }

  async updateOne(body: UpdateUserDto, currentUser: User) {
    const user = await this.findOne(body.id);

    if (
      currentUser.role === UserRole.MANAGER &&
      user.role !== UserRole.EMPLOYEE
    ) {
      throw new UnauthorizedException();
    }

    await this.userRepo.update(user.id, body);

    return user;
  }

  async deleteOne(id: number, currentUser: User) {
    const user = await this.findOne(id);

    if (
      currentUser.role === UserRole.MANAGER &&
      user.role !== UserRole.EMPLOYEE
    ) {
      throw new UnauthorizedException();
    }

    await this.userRepo.delete(id);
  }
}
