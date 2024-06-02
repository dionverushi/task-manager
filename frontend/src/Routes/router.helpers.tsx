import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStorage } from 'src/Hooks/useLocalStorage';
import { useGetMe } from 'src/Services/User';
import { Role } from 'src/Types/backend';
import { StorageKey } from 'src/Types/storageKey';

import { isAuthenticated } from '../Utils/storage';

export const RoutePointer = (
  paths: { role: Role; Component: () => JSX.Element }[],
) => {
  const { data } = useGetMe();

  const found = paths.find((path) => path.role === data!.role);

  if (!!found) {
    const { Component } = found;
    return <Component />;
  }

  return <Navigate to="/" />;
};

export const PrivateRoute = (): JSX.Element => {
  useLocalStorage([StorageKey.ACCESS_TOKEN]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export const PublicRoute = (): JSX.Element => {
  useLocalStorage([StorageKey.ACCESS_TOKEN]);

  if (!isAuthenticated()) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
