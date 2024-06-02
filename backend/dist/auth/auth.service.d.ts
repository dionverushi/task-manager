import { User } from 'src/modules/user/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    login(loginDto: LoginUserDto): Promise<{
        accessToken: string;
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: import("../common/constants/user-role.enum").UserRole;
        confirmationToken: string;
        confirmedAt: Date;
        assignedProjects: import("../modules/project/entities/project.entity").Project[];
        tasks: import("../modules/task/entities/task.entity").Task[];
        createdAt?: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    }>;
    validateCredentials(email: string, password: string): Promise<User>;
}
