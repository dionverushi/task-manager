import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/config/config.service';
import { Seeder } from './seeder';
import { UserSeederModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserSeederModule,
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
