import { scale } from '@utils/calculations';

enum IconSizeEnum {
  /**
   * 8
   */
  X_S = 8,
  /**
   * 10
   */
  S = 10,
  /**
   * 14
   */
  S_M = 14,
  /**
   * 16
   */
  M = 16,
  /**
   * 24
   */
  L = 24,
  /**
   * 36
   */
  XXX_L = 36,
  /**
   * 48
   */
  XL = 48,
}

export enum IconSize {
  /**
   * 8
   */
  X_S = scale(IconSizeEnum.X_S),
  /**
   * 10
   */
  S = scale(IconSizeEnum.S),
  /**
   * 14
   */
  S_M = scale(IconSizeEnum.S_M),
  /**
   * 16
   */
  M = scale(IconSizeEnum.M),
  /**
   * 24
   */
  L = scale(IconSizeEnum.L),
  /**
   * 36
   */
  XXX_L = scale(IconSizeEnum.XXX_L),
  /**
   * 48
   */
  XL = scale(IconSizeEnum.XL),
}
