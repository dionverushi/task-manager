import { ButtonProps } from '@nextui-org/react';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { VerticalSpacing } from '@themes/spacing';

export type ButtonComponentProps = ButtonProps & {
  height?: VerticalSpacing;
  backgroundColor?: Color;
  fontSize?: FontSize;
};
