import { Logger } from '@nestjs/common';
import { UserSeederService } from './user/user.service';
export declare class Seeder {
    private readonly logger;
    private readonly userSeederService;
    constructor(logger: Logger, userSeederService: UserSeederService);
    seed(): Promise<void>;
    users(): Promise<boolean>;
}
