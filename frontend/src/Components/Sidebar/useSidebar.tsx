import { IconComponent } from '@components/IconComponent';
import { Undo2 } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { MenuModule, SidebarProps } from './types';

//TODO translate this please
export const useSidebar = ({ renderNewRoutes }: SidebarProps) => {
  const { projectId } = useParams();

  const projectModules: MenuModule[] = [
    {
      title: 'Go Back',
      icon: <Undo2 />,
      href: '/projects',
    },
    {
      title: 'Overview',
      icon: <IconComponent name="dashboard" />,
      href: `/projects/${projectId}`,
    },
    {
      title: 'Tasks',
      icon: <IconComponent name="tasks" />,
      href: `/projects/${projectId}/tasks`,
    },
    {
      title: 'Activity',
      icon: <IconComponent name="eye" />,
      href: `/projects/${projectId}/tasksHistory`,
    },
  ];

  const mainModules: MenuModule[] = [
    {
      title: 'Projects',
      icon: <IconComponent name="project" />,
      href: '/projects',
    },
    {
      title: 'Users',
      icon: <IconComponent name="users" />,
      href: '/users',
    },
  ];

  return { menuModules: renderNewRoutes ? projectModules : mainModules };
};
