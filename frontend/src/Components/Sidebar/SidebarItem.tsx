import { Container } from '@layouts/container';
import { mergeClassname } from '@utils/helpers';
import { Link } from 'react-router-dom';

import { SidebarItemProps } from './types';

export const SidebarItem = ({
  icon,
  title,
  isActive,
  href = '',
}: SidebarItemProps) => {
  return (
    <Link to={href} className="text-default-900 active:bg-none max-w-full">
      <Container
        className={mergeClassname(
          isActive
            ? 'bg-primary-100 [&_svg_path]:fill-primary-500'
            : 'hover:bg-default-100',
          'flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]',
        )}
      >
        {icon}
        <span className="text-default-900">{title}</span>
      </Container>
    </Link>
  );
};
