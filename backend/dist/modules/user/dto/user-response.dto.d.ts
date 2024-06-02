import { UserRole } from 'src/common/constants/user-role.enum';
export declare class UserResponseDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
}
