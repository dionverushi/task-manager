import { FontSize } from '@themes/fontSize';

import { TextProps } from './types';

export const Text = ({
  children,
  className,
  color,
  fontSize = FontSize.CAPTION_2,
}: TextProps) => {
  return (
    <p className={className} style={{ fontSize, color }}>
      {children}
    </p>
  );
};
