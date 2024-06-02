import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findAll(query: PageOptionsDto): Promise<[User[], number]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    createOne(body: CreateUserDto): Promise<User>;
    updateOne(body: UpdateUserDto, currentUser: User): Promise<User>;
    deleteOne(id: number, currentUser: User): Promise<void>;
}
