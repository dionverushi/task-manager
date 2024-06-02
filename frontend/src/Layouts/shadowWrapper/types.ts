import { ReactNode } from 'react';

export enum ShadowWrapperType {
  SHADOW1 = 'SHADOW1',
  SHADOW2 = 'SHADOW2',
  SHADOW3 = 'SHADOW3',
  SHADOW4 = 'SHADOW4',
  SHADOW5 = 'SHADOW5',
  SHADOW6 = 'SHADOW6',
}

export type ShadowWrapperProps = {
  children: ReactNode;
  type: ShadowWrapperType;
};
