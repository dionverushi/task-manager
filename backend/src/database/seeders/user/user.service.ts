import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/user/user.entity';
import { Repository } from 'typeorm';
import { defaultUsers } from './data';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create() {
    const result = { created: 0, updated: 0 };

    for (const user of defaultUsers) {
      const { email, ...rest } = user;
      const foundUser = await this.userRepo.findOne({ where: { email } });

      rest.password = await bcrypt.hash(user.password, 10);

      if (!foundUser) {
        await this.userRepo.save(user);
        result.created += 1;
      } else {
        await this.userRepo.update({ email }, rest);
        result.updated += 1;
      }
    }

    return result;
  }
}
