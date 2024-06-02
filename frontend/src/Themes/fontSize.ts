/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

import { fontScale } from '@utils/calculations';

enum FontSizeEnum {
  /**
   * 44
   */
  HEADLINE_1 = 44,
  /**
   * 32
   */
  HEADLINE_2 = 32,
  /**
   * 24
   */
  HEADLINE_3 = 24,
  /**
   * 18
   */
  HEADLINE_4 = 18,
  /**
   * 16
   */
  HEADLINE_5 = 16,
  /**
   * 14
   */
  HEADLINE_6 = 14,
  /**
   * 12
   */
  BODY = 12,
  /**
   * 14
   */
  CAPTION_1 = 14,
  /**
   * 12
   */
  CAPTION_2 = 12,
  /**
   * 10
   */
  OVERLINE = 10,
  /**
   * 18
   */
  LARGE_BUTTON = 18,
  /**
   * 16
   */
  MEDIUM_BUTTON = 16,
  /**
   * 14
   */
  SMALL_BUTTON = 14,
}

export enum FontSize {
  /**
   * 44
   */
  HEADLINE_1 = fontScale(FontSizeEnum.HEADLINE_1),
  /**
   * 32
   */
  HEADLINE_2 = fontScale(FontSizeEnum.HEADLINE_2),
  /**
   * 24
   */
  HEADLINE_3 = fontScale(FontSizeEnum.HEADLINE_3),
  /**
   * 18
   */
  HEADLINE_4 = fontScale(FontSizeEnum.HEADLINE_4),
  /**
   * 16
   */
  HEADLINE_5 = fontScale(FontSizeEnum.HEADLINE_5),
  /**
   * 14
   */
  HEADLINE_6 = fontScale(FontSizeEnum.HEADLINE_6),
  /**
   * 12
   */
  BODY = fontScale(FontSizeEnum.BODY),
  /**
   * 14
   */
  CAPTION_1 = fontScale(FontSizeEnum.CAPTION_1),
  /**
   * 12
   */
  CAPTION_2 = fontScale(FontSizeEnum.CAPTION_2),
  /**
   * 10
   */
  OVERLINE = fontScale(FontSizeEnum.OVERLINE),
  /**
   * 18
   */
  LARGE_BUTTON = fontScale(FontSizeEnum.LARGE_BUTTON),
  /**
   * 16
   */
  MEDIUM_BUTTON = fontScale(FontSizeEnum.MEDIUM_BUTTON),
  /**
   * 14
   */
  SMALL_BUTTON = fontScale(FontSizeEnum.SMALL_BUTTON),
}
