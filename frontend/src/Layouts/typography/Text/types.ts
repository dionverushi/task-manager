import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { ReactNode } from 'react';

export type TextProps = {
  children: ReactNode;
  className?: string;
  fontSize?: FontSize;
  color?: Color;
};
