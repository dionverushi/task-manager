import { getImage, ImageSize } from '@themes/images';
import { useMemo } from 'react';

import { ImageComponentProps } from './types';

export const ImageComponent = ({
  name,
  resizeMode,
  imageHeight = ImageSize.S,
  imageWidth = ImageSize.S,
  white,
}: ImageComponentProps) => {
  const memoizedImage = useMemo(() => getImage(name), [name]);

  const filterStyle = {
    filter: white ? 'invert(100%)' : '',
  };

  return (
    <img
      src={memoizedImage}
      style={{
        height: imageHeight,
        width: imageWidth,
        objectFit: resizeMode ?? 'cover',
        ...filterStyle,
      }}
    />
  );
};
