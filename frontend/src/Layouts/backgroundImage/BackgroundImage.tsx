import { getImage } from '@themes/images';
import { useMemo } from 'react';

import { BackgroundImageProps } from './types';

export const BackgroundImage = ({
  name,
  resizeMode,
  imageHeight,
  imageWidth,
  gradient,
  children,
}: BackgroundImageProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);

  const width = imageWidth || '100%';
  const linearGradient =
    gradient &&
    `linear-gradient(to ${gradient.direction}, ${gradient.from}, ${gradient.to})`;

  return (
    <div className="relative" style={{ height: imageHeight, width }}>
      {!!gradient && (
        <div
          className="absolute top-0 left-0 opacity-80 h-dvh w-full z-10"
          style={{ backgroundImage: linearGradient }}
        />
      )}
      <img
        className="absolute top-0 right-0 left-0 bottom-0"
        src={memoizedImage}
        style={{
          height: imageHeight,
          width,
          objectFit: resizeMode ?? 'cover',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
