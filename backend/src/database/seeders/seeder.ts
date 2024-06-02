import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserSeederService } from './user/user.service';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    @Inject(UserSeederService)
    private readonly userSeederService: UserSeederService,
  ) {}

  async seed() {
    await this.users()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding tasks...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding tasks...');
        Promise.reject(error);
      });
  }

  async users() {
    return await this.userSeederService
      .create()
      .then(({ created, updated }) => {
        this.logger.debug(`No. of users created : ` + created);
        this.logger.debug(`No. of users updated : ` + updated);
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
