import { Role } from 'src/Types/backend';

export type CreateEmployeeParams = {
  firstName: string;
  lastName: string;
  email: string;
};

export type CreateUserParams = CreateEmployeeParams & {
  role: Role;
};
