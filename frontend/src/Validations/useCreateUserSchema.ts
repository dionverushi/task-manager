import { usePermissions } from 'src/Hooks/usePermissions';
import { Role } from 'src/Types/backend';

import { useYup } from './useYup';

export const useCreateUserSchema = () => {
  const { userRole } = usePermissions();
  const { Yup } = useYup();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createUserSchema: any = {
    firstName: Yup.string().min(1),
    lastName: Yup.string().min(1),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email',
      )
      .required('Email is required'),
  };

  if (userRole === Role.ADMIN) {
    createUserSchema.role = Yup.string();
  }

  return Yup.object().shape(createUserSchema);
};
