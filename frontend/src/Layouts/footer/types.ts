import { VerticalSpacing } from '@themes/spacing';
import { ReactNode } from 'react';
import { FlexStyle } from 'src/Types';

export type FooterProps = {
  children: ReactNode;
  flexGrow?: FlexStyle['flexGrow'];
  paddingBottom?: VerticalSpacing;
  alignItems?: FlexStyle['alignItems'];
};
