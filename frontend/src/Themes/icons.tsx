import { scale } from '@utils/calculations';
import {
  Bell,
  Eye,
  FileCheck2,
  FolderDot,
  LayoutDashboard,
  LucideProps,
  UsersRound,
} from 'lucide-react';

export const Icons = {
  bell: (props?: LucideProps) => <Bell {...props} />,
  project: (props?: LucideProps) => <FolderDot {...props} />,
  dashboard: (props?: LucideProps) => <LayoutDashboard {...props} />,
  tasks: (props?: LucideProps) => <FileCheck2 {...props} />,
  users: (props?: LucideProps) => <UsersRound {...props} />,
  eye: (props?: LucideProps) => <Eye {...props} />,
};

export type IconName = keyof typeof Icons;

export const getIcon = (iconName: IconName, props?: LucideProps) =>
  Icons[iconName](props);

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
  XL1 = 50,
  XL2 = 100,
  XL3 = 150,
  XL4 = 200,
  XL5 = 250,
  XL6 = 300,
  XL7 = 350,
  XL8 = 400,
  full = '100dvh',
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
  XL1 = scale(IconSizeEnum.XL1),
  XL2 = scale(IconSizeEnum.XL2),
  XL3 = scale(IconSizeEnum.XL3),
  XL4 = scale(IconSizeEnum.XL4),
  XL5 = scale(IconSizeEnum.XL5),
  XL6 = scale(IconSizeEnum.XL6),
  XL7 = scale(IconSizeEnum.XL7),
  XL8 = scale(IconSizeEnum.XL8),
  full = IconSizeEnum.full,
}
