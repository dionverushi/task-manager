import { useGetMe } from 'src/Services/User';
import { Role } from 'src/Types/backend';

export const usePermissions = () => {
  const { data } = useGetMe();

  return {
    userRole: data?.role ?? null,
    isAdmin: data?.role === Role.ADMIN,
  };
};
