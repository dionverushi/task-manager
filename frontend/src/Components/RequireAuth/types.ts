import { ReactNode } from 'react';
import { Role } from 'src/Types/backend';

export type PrivateRouteProps = {
  children: ReactNode;
  roles: Role[];
};
