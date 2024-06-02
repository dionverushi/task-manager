import { horizontalScale, verticalScale } from '@utils/calculations';

enum Spacing {
  /**
   * XS = 4
   */
  XS = 4,

  /**
   * S = 8
   */
  S = 8,

  /**
   * S_M = 12
   */
  S_M = 12,

  /**
   * M = 16
   * Spacing between components or sub headlines/components
   * also used for error messages
   */
  M = 16,

  /**
   * M_L = 20
   * Spacing between section (horizontally)
   */
  M_L = 20,

  /**
   * L = 24
   * Spacing between section (vertically)
   */
  L = 24,

  /**
   * XL = 32
   * Spacing between headlines/components
   */
  XL = 32,

  /**
   * XXL = 48
   */
  XXL = 48,

  /**
   * XXXL = 56
   */
  XXXL = 56,

  /**
   * XXXXL = 64
   */
  XXXXL = 64,

  /**
   * XXXXXL = 80
   */
  XXXXXL = 80,
}

/**
 * Vertical Spacing based on the verticalScale function
 */
export enum VerticalSpacing {
  /**
   * XS = 4
   */
  XS = verticalScale(Spacing.XS),

  /**
   * S = 8
   */
  S = verticalScale(Spacing.S),

  /**
   * S_M = 12
   */
  S_M = verticalScale(Spacing.S_M),

  /**
   * M = 16
   * Spacing between components or sub headlines/components
   * also used for error messages
   */
  M = verticalScale(Spacing.M),

  /**
   * M_L = 20
   * Spacing between section (horizontally)
   */
  M_L = verticalScale(Spacing.M_L),

  /**
   * L = 24
   * Spacing between section (vertically)
   */
  L = verticalScale(Spacing.L),

  /**
   * XL = 32
   * Spacing between headlines/components
   */
  XL = verticalScale(Spacing.XL),

  /**
   * XXL = 48
   */
  XXL = verticalScale(Spacing.XXL),

  /**
   * XXXL = 56
   */
  XXXL = verticalScale(Spacing.XXXL),

  /**
   * XXXXL = 64
   */
  XXXXL = verticalScale(Spacing.XXXXL),

  /**
   * XXXXXL = 80
   */
  XXXXXL = verticalScale(Spacing.XXXXXL),
}

/**
 * Horizontal Spacing based on the scaling function
 */
export enum HorizontalSpacing {
  /**
   * XS = 4
   */
  XS = horizontalScale(Spacing.XS),

  /**
   * S = 8
   */
  S = horizontalScale(Spacing.S),

  /**
   * S_M = 12
   */
  S_M = horizontalScale(Spacing.S_M),

  /**
   * M = 16
   * Spacing between components or sub headlines/components
   * also used for error messages
   */
  M = horizontalScale(Spacing.M),

  /**
   * M_L = 20
   * Spacing between section (horizontally)
   */
  M_L = horizontalScale(Spacing.M_L),

  /**
   * L = 24
   * Spacing between section (vertically)
   */
  L = horizontalScale(Spacing.L),

  /**
   * XL = 32
   * Spacing between headlines/components
   */
  XL = horizontalScale(Spacing.XL),

  /**
   * XXL = 48
   */
  XXL = horizontalScale(Spacing.XXL),

  /**
   * XXXL = 56
   */
  XXXL = horizontalScale(Spacing.XXXL),

  /**
   * XXXXL = 64
   */
  XXXXL = horizontalScale(Spacing.XXXXL),

  /**
   * XXXXXL = 80
   */
  XXXXXL = horizontalScale(Spacing.XXXXXL),
}
