import { EventCode, RegisterFormProps } from './types';

export const useRegisterForm = ({ formik, onKeyDown }: RegisterFormProps) => {
  const { isValid, handleBlur, handleChange } = formik;
  const onEnterPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (isValid && onKeyDown && event.code === EventCode.ENTER) {
      onKeyDown();
    }
    return;
  };

  const onChange = (event: string | React.ChangeEvent<HTMLInputElement>) => {
    handleBlur(event);
    handleChange(event);
  };

  return {
    onEnterPress,
    onChange,
  };
};
