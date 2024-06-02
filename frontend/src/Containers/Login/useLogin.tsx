import { LoginForm } from '@components/organisms/LoginForm';
import { useLoginSchema } from '@validations/useLoginSchema';
import { useRegisterSchema } from '@validations/useRegisterSchema';
import { useFormik } from 'formik';
import { Key, useEffect, useState } from 'react';
import { useLoginUser } from 'src/Services/Auth';

import { FormikProps, Tab } from './types';

export const useLogin = () => {
  const { mutate: login } = useLoginUser();
  const [selectedTab, setSelectedTab] = useState<Key>(Tab.SIGN_IN);
  const loginSchema = useLoginSchema();
  const registerSchema = useRegisterSchema();

  const isLogin = selectedTab === Tab.SIGN_IN;
  const onTabChange = (key: Key) => {
    setSelectedTab(key);
  };

  const formik = useFormik<FormikProps>({
    initialValues: {
      email: '',
      password: '',
      bussinessName: '',
      regEmail: '',
      regPassword: '',
      confirmPassword: '',
    },
    validationSchema: isLogin ? loginSchema : registerSchema,
    validateOnMount: true,

    onSubmit: async (params) => {
      login(params);
    },
  });

  useEffect(() => {
    formik.validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  const tabs = [
    {
      id: Tab.SIGN_IN,
      label: 'Sign in',
      content: <LoginForm formik={formik} onKeyDown={formik.handleSubmit} />,
    },
  ];

  return {
    tabs,
    onTabChange,
  };
};
