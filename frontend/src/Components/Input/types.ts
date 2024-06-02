import { InputProps } from '@nextui-org/react';

export type InputComponentProps = InputProps & {
  onChange: (value: string) => void;
};
