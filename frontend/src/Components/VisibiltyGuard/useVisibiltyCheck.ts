import { usePermissions } from 'src/Hooks/usePermissions';
import { Role } from 'src/Types/backend';

export const useVisibiltyCheck = () => {
  const { userRole } = usePermissions();

  const isAccessible = (roles: Role[]) => {
    let isVisible = false;
    if (userRole && roles.includes(userRole)) {
      isVisible = true;
    }
    return isVisible;
  };

  return { isAccessible };
};
