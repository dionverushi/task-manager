import { useYup } from './useYup';

export const useCreateProjectSchema = () => {
  const { Yup } = useYup();

  const createUserSchema = {
    name: Yup.string().min(1),
    description: Yup.string().optional(),
    typeId: Yup.string().min(1),
    assignedManagerIds: Yup.string().min(1),
  };

  return Yup.object().shape(createUserSchema);
};
