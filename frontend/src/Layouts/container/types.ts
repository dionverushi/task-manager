import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { Shadow } from '@themes/shadow';
import { HorizontalSpacing, VerticalSpacing } from '@themes/spacing';
import { ReactNode } from 'react';

export type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  className?: string;
  padding?: HorizontalSpacing;
  paddingBottom?: VerticalSpacing;
  paddingLeft?: HorizontalSpacing;
  paddingRight?: HorizontalSpacing;
  paddingTop?: VerticalSpacing;
  children: ReactNode;
  borderRadius?: BorderRadius;
  borderTopLeftRadius?: BorderRadius;
  borderTopRightRadius?: BorderRadius;
  borderBottomRightRadius?: BorderRadius;
  borderBottomLeftRadius?: BorderRadius;
  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: Color | string;
  flex?: number;
  flexGrow?: number;
  boxShadow?: Shadow;
};
