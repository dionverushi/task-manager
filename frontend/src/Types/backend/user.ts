//user is used in context of Employee
export enum Role {
  ADMIN = 'ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  MANAGER = 'MANAGER',
  CLIENT = 'CLIENT',
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
};
