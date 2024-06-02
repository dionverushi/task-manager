import { ReactNode } from 'react';
import { Role } from 'src/Types/backend';

export type VisibiltyGuardProps = {
  roles?: Role[];
  children: ReactNode;
  fallback?: ReactNode;
  isVisible?: boolean;
};
