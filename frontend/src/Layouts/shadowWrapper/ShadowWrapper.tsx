import { Shadow } from '@themes/shadow';

import { ShadowWrapperProps, ShadowWrapperType } from './types';

const getShadowWrapper = (type: ShadowWrapperType) => {
  switch (type) {
    case ShadowWrapperType.SHADOW1:
      return Shadow.SHADOW1;
    case ShadowWrapperType.SHADOW2:
      return Shadow.SHADOW2;
    case ShadowWrapperType.SHADOW3:
      return Shadow.SHADOW3;
    case ShadowWrapperType.SHADOW4:
      return Shadow.SHADOW4;
    case ShadowWrapperType.SHADOW5:
      return Shadow.SHADOW5;
    default:
      return Shadow.SHADOW6;
  }
};

export const ShadowWrapper = ({ children, type }: ShadowWrapperProps) => {
  const boxShadow = getShadowWrapper(type);

  return <div style={{ boxShadow }}>{children}</div>;
};
