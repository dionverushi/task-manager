import { RowProps } from './types';

export const Row = ({
  className,
  children,
  justifyContent,
  alignItems,
  marginTop,
  padding,
  gap,
  flex,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}: RowProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: justifyContent ? justifyContent : 'center',
        alignItems: alignItems ? alignItems : 'center',
        flex,
        marginTop,
        paddingBottom: paddingBottom ?? padding,
        paddingLeft: paddingLeft ?? padding,
        paddingRight: paddingRight ?? padding,
        paddingTop: paddingTop ?? padding,
        gap,
      }}
    >
      {children}
    </div>
  );
};
