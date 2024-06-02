import { UserService } from './user.service';
import { CreateEmployeeDto, CreateUserDto } from './dto/create-user.dto';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { MessageDto } from 'src/common/dto/message.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: PageOptionsDto): Promise<[User[], number]>;
    findOne(id: string): Promise<User>;
    createOne(body: CreateUserDto): Promise<User>;
    createEmployee(body: CreateEmployeeDto): Promise<User>;
    updateOne(body: UpdateUserDto, user: User): Promise<User>;
    deleteOne(id: string, user: User): Promise<MessageDto>;
}
