import { AdminDashboard } from '@containers/Dashboard';
import { NotFoundPage } from '@containers/NotFound';
import { ProjectOverview } from '@containers/ProjectOverview';
import { Projects } from '@containers/Projects';
import { ProjectTrack } from '@containers/ProjectTrack';
import { TasksHistory } from '@containers/TasksHistory';
import { UserList } from '@containers/UserList';
import { RouteObject } from 'react-router-dom';

export const protectedRoutes: RouteObject[] = [
  { index: true, Component: Projects },
  { path: 'dashboard', Component: AdminDashboard },
  { path: 'users', Component: UserList },
  { path: 'projects', Component: Projects },
  {
    path: 'projects/:projectId/*',
    children: [
      { index: true, Component: ProjectOverview },
      { path: 'tasks', Component: ProjectTrack },
      { path: 'tasksHistory', Component: TasksHistory },
    ],
  },
  // { path: '*', Component: Navigate({ to: '/notFound' }) },
  { path: 'notFound', Component: NotFoundPage },
];
