import { User } from 'src/modules/user/user.entity';
import { Repository } from 'typeorm';
export declare class UserSeederService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    create(): Promise<{
        created: number;
        updated: number;
    }>;
}
