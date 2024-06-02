import { useYup } from './useYup';

export const useLoginSchema = () => {
  const { Yup } = useYup();

  const loginSchema = {
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email',
      )
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  };

  return Yup.object().shape(loginSchema);
};
