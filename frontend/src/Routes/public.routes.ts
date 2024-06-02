import { Login } from '@containers/Login';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  { path: '/login', Component: Login },
];
