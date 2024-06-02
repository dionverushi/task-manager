import { getIcon } from '@themes/icons';
import { useMemo } from 'react';

import { IconComponentProps } from './types';

export const IconComponent = ({ name, ...props }: IconComponentProps) => {
  const MemoizedIcon = useMemo(() => getIcon(name, props), [name, props]);

  return MemoizedIcon;
};
