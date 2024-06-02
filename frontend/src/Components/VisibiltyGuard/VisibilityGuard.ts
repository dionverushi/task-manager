import { VisibiltyGuardProps } from './types';
import { useVisibiltyCheck } from './useVisibiltyCheck';

export const VisibiltyGuard = ({
  children,
  roles,
  fallback = null,
  isVisible,
}: VisibiltyGuardProps) => {
  const { isAccessible } = useVisibiltyCheck();
  let accessApproved = false;

  if (!!roles && isAccessible(roles) && !isVisible) {
    accessApproved = true;
  }

  if (isVisible && !roles) {
    accessApproved = isVisible;
  }

  if (isVisible && !!roles && isAccessible(roles)) {
    accessApproved = true;
  }

  return accessApproved ? children : fallback;
};
