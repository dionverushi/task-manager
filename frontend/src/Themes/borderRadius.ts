import { scale } from '@utils/calculations';

enum BorderRadiusEnum {
  /**
   * 4
   */
  XXS = 4,
  /**
   * 6
   */
  XS = 6,
  /**
   * 8
   */
  S = 8,
  /**
   * 12
   */
  S_M = 12,
  /**
   * 16
   */
  M = 16,
  /**
   * 20
   */
  M_L = 20,
  /**
   * 24
   */
  L = 24,
  /**
   * 32
   */
  XL = 32,
  /**
   * 1000
   */
  ROUND = 1000,
}

export enum BorderRadius {
  /**
   * 4
   */
  XXS = scale(BorderRadiusEnum.XXS),
  /**
   * 6
   */
  XS = scale(BorderRadiusEnum.XS),
  /**
   * 8
   */
  S = scale(BorderRadiusEnum.S),
  /**
   * 12
   */
  S_M = scale(BorderRadiusEnum.S_M),
  /**
   * 16
   */
  M = scale(BorderRadiusEnum.M),
  /**
   * 20
   */
  M_L = scale(BorderRadiusEnum.M_L),
  /**
   * 24
   */
  L = scale(BorderRadiusEnum.L),
  /**
   * 32
   */
  XL = scale(BorderRadiusEnum.XL),
  /**
   * 1000
   */
  ROUND = scale(BorderRadiusEnum.ROUND),
}
