import { DEFAULT_MODERATE_SCALE } from './constants';
import { verticalScale } from './verticalScale';

export const fontScale = (size: number, factor = DEFAULT_MODERATE_SCALE) =>
  size + (verticalScale(size) - size) * factor;
