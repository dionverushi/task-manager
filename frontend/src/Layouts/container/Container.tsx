import { ContainerProps } from './types';

export const Container = ({
  className,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  borderColor,
  borderWidth,
  backgroundColor,
  flex,
  flexGrow,
  boxShadow,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={className}
      style={{
        paddingBottom: paddingBottom ?? padding,
        paddingLeft: paddingLeft ?? padding,
        paddingRight: paddingRight ?? padding,
        paddingTop: paddingTop ?? padding,
        borderColor,
        borderWidth,
        backgroundColor,
        flex,
        flexGrow,
        borderTopLeftRadius: borderTopLeftRadius ?? borderRadius,
        borderTopRightRadius: borderTopRightRadius ?? borderRadius,
        borderBottomRightRadius: borderBottomRightRadius ?? borderRadius,
        borderBottomLeftRadius: borderBottomLeftRadius ?? borderRadius,
        boxShadow,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
