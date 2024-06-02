import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from '@components/Loader';
import { Login } from '@containers/Login/Login.tsx';
import { MainLayout } from '@layouts/MainLayout.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { protectedRoutes } from '@routes/protected.routes.ts';
import { PrivateRoute, PublicRoute } from '@routes/router.helpers.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@utils/queryClient.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import { meLoader } from './Services/User/function.ts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: PrivateRoute,
        children: [
          {
            path: '',
            Component: MainLayout,
            loader: meLoader,
            children: protectedRoutes,
          },
        ],
      },
      {
        path: '/',
        Component: PublicRoute,
        children: [
          {
            path: 'login',
            Component: Login,
            // children: publicRoutes,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
