import { UserRole } from 'src/common/constants/user-role.enum';
export declare class CreateEmployeeDto {
    firstName: string;
    lastName: string;
    email: string;
}
export declare class CreateUserDto extends CreateEmployeeDto {
    role: UserRole;
}
