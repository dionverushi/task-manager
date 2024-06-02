import { FormikProps } from '@containers/Login/types';
import { FormikContextType } from 'formik';

export type RegisterFormProps = {
  formik: FormikContextType<FormikProps>;
  onKeyDown?: () => void;
};

export enum EventCode {
  ENTER = 'Enter',
}
