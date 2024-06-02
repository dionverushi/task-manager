import { GUIDELINE_BASE_WIDTH, SHORT_DIMENSION } from './constants';

export const scale = (size: number) =>
  (SHORT_DIMENSION / GUIDELINE_BASE_WIDTH) * size;
