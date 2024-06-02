import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Container } from '@layouts/container';
import { Color } from '@themes/color';

import { RegisterFormProps } from './types';
import { useRegisterForm } from './useRegisterForm';

export const RegisterForm = ({ formik, onKeyDown }: RegisterFormProps) => {
  const { onEnterPress, onChange } = useRegisterForm({ formik, onKeyDown });
  const { values, errors, touched, isValid, submitForm } = formik;

  return (
    <Container
      flexGrow={1}
      className="h-full flex flex-col items-center justify-between gap-2"
    >
      <form className="w-full" onKeyDown={onEnterPress}>
        <Container className="flex w-full flex-col gap-3">
          <Input
            type="text"
            label="Bussiness name"
            name="bussinessName"
            value={values.bussinessName}
            onChange={onChange}
            isInvalid={touched.bussinessName && !!errors.bussinessName}
            errorMessage={touched.bussinessName && errors.bussinessName}
          />
          <Input
            type="email"
            label="Email"
            name="regEmail"
            value={values.regEmail}
            onChange={onChange}
            isInvalid={touched.regEmail && !!errors.regEmail}
            errorMessage={touched.regEmail && errors.regEmail}
          />
          <Input
            type="password"
            label="Password"
            name="regPassword"
            value={values.regPassword}
            onChange={onChange}
            isInvalid={touched.regPassword && !!errors.regPassword}
            errorMessage={touched.regPassword && errors.regPassword}
          />
          <Input
            type="password"
            label="Confirm password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={onChange}
            isInvalid={touched.confirmPassword && !!errors.confirmPassword}
            errorMessage={touched.confirmPassword && errors.confirmPassword}
          />
        </Container>
      </form>
      <Container className="w-full">
        <Button
          className="text-white font-bold font-cabin"
          backgroundColor={Color.BLUE}
          isDisabled={!isValid}
          onPress={submitForm}
        >
          Register
        </Button>
      </Container>
    </Container>
  );
};
