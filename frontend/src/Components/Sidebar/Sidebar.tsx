import { Container } from '@layouts/container';
import { Text } from '@layouts/typography/Text';
import { FontSize } from '@themes/fontSize';
import { useLocation } from 'react-router-dom';

import { Sidebar as SidebarStyles } from './sidebar.styles';
import { SidebarItem } from './SidebarItem';
import { SidebarProps } from './types';
import { useSidebar } from './useSidebar';

//TODO translate this please
export const Sidebar = ({ renderNewRoutes }: SidebarProps) => {
  const { pathname } = useLocation();
  const { menuModules } = useSidebar({ renderNewRoutes });

  return (
    <aside className="h-dvh">
      <Container
        className={SidebarStyles({
          collapsed: false,
        })}
      >
        <Container className={SidebarStyles.Header()}>
          <Container className="flex items-center gap-2">
            <Text fontSize={FontSize.HEADLINE_2}>Jira</Text>
          </Container>
        </Container>
        <Container className="flex flex-col justify-between">
          <Container className={SidebarStyles.Body()}>
            <Container className="flex gap-2 flex-col">
              <span className="text-xs font-normal ">Main Menu</span>
              {menuModules.map((module, index) => (
                <SidebarItem
                  key={index}
                  title={module.title}
                  icon={module.icon}
                  href={module.href}
                  isActive={pathname === module.href}
                />
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </aside>
  );
};
