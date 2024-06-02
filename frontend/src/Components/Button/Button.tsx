import { Button as ButtonComponent } from '@nextui-org/react';
import { Color } from '@themes/color';
import { FontSize } from '@themes/fontSize';
import { VerticalSpacing } from '@themes/spacing';

import { ButtonComponentProps } from './types';

const BUTTON_MAX_HEIGHT = 40;
const BUTTON_MIN_HEIGHT = 20;
export const Button = ({
  children,
  className,
  variant,
  backgroundColor = Color.GREY_1,
  size = 'sm',
  radius = 'sm',
  spinnerPlacement = 'start',
  startContent,
  endContent,
  spinner,
  isIconOnly = false,
  isDisabled = false,
  isLoading = false,
  onPress,
  height = VerticalSpacing.M_L,
  fontSize = FontSize.OVERLINE,
}: ButtonComponentProps) => {
  return (
    <ButtonComponent
      className={className}
      variant={variant}
      size={size}
      radius={radius}
      spinnerPlacement={spinnerPlacement}
      startContent={startContent}
      endContent={endContent}
      spinner={spinner}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      fullWidth
      style={{
        backgroundColor,
        height,
        fontSize,
        maxHeight: BUTTON_MAX_HEIGHT,
        minHeight: BUTTON_MIN_HEIGHT,
      }}
      onPress={onPress}
    >
      {children}
    </ButtonComponent>
  );
};
