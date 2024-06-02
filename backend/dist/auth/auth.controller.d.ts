import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto): Promise<{
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
}
