import { Strategy } from 'passport-jwt';
import { UnauthorizedException } from '@nestjs/common';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<UnauthorizedException | {
        clientId: any;
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
export {};
