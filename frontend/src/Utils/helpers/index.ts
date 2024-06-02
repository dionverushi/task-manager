import clsx from 'clsx';

export const mergeClassname = (...inputs: clsx.ClassValue[]): string => {
  return clsx(...inputs);
};
