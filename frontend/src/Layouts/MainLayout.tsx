import { Sidebar } from '@components/Sidebar';
import { VisibiltyGuard } from '@components/VisibiltyGuard';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
import { Role } from 'src/Types/backend';

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-dvw h-dvh overflow-hidden">
      <VisibiltyGuard
        roles={[Role.ADMIN, Role.MANAGER]}
        isVisible={!!matchPath('/projects/:projectId/*', pathname)}
      >
        <Sidebar
          renderNewRoutes={!!matchPath('/projects/:projectId/*', pathname)}
        />
      </VisibiltyGuard>

      <div className="flex flex-col flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
