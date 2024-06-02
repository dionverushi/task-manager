import { tv } from '@nextui-org/react';

export const SidebarWrapper = tv({
  base: 'bg-background transition-transform h-full w-64 shrink-0 no-scrollbar overflow-y-auto border-r border-divider flex-col py-6 px-3 md:ml-0 md:flex md:static md:h-screen md:translate-x-0 ',

  variants: {
    collapsed: {
      true: 'translate-x-0 ml-0 [display:inherit]',
    },
  },
});

export const Header = tv({
  base: 'flex gap-8 items-center px-6',
});

export const Body = tv({
  base: 'flex flex-col gap-6 mt-9 px-2',
});

export const Sidebar = Object.assign(SidebarWrapper, {
  Header,
  Body,
});
