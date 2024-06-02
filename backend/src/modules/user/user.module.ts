import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MeController } from './me.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, MeController],
  providers: [UserService],
})
export class UserModule {}
