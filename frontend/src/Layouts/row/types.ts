import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';
import { ReactNode } from 'react';
import { FlexStyle } from 'src/Types';

export type RowProps = {
  className?: string;
  children: ReactNode;
  marginTop?: VerticalSpacing | HorizontalSpacing;
  padding?: HorizontalSpacing;
  paddingBottom?: VerticalSpacing;
  paddingLeft?: HorizontalSpacing;
  paddingRight?: HorizontalSpacing;
  paddingTop?: VerticalSpacing;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
  flex?: number;
  gap?: VerticalSpacing | HorizontalSpacing;
};
