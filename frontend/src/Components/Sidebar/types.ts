import { ReactNode } from 'react';

export type SidebarItemProps = {
  title: string;
  icon?: React.ReactNode;
  isActive: boolean;
  href: string;
};

//TODO href type so it goes only to where it can
export type MenuModule = {
  title: string;
  icon?: ReactNode;
  href: string;
};

export type SidebarProps = {
  renderNewRoutes: boolean;
};
