import { UserRole } from 'src/common/constants/user-role.enum';
import { configService } from 'src/config/config.service';

export const defaultUsers = [
  {
    firstName: 'Super',
    lastName: 'Admin',
    email: 'admin@gmail.com',
    password: configService.getValue('ADMIN_PASSWORD'),
    role: UserRole.ADMIN,
  },
];
