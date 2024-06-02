import { User } from 'src/Types/backend';

export const getFullName = (user: User) => {
  return user.firstName.concat(' ', user.lastName);
};
