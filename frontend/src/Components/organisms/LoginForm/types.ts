import { FormikProps } from '@containers/Login/types';
import { FormikContextType } from 'formik';

export type LoginFormProps = {
  formik: FormikContextType<FormikProps>;
  onKeyDown?: () => void;
};

export enum EventCode {
  ENTER = 'Enter',
}
