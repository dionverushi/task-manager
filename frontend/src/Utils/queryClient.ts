import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const formatErrorMessage = (message: string | string[]) => {
  if (Array.isArray(message)) return message;
  return [message];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (error: any) => {
  const messages = formatErrorMessage(error.response?.data.message);

  messages.map((message) => toast.error(message));
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      refetchInterval: false,
      staleTime: 1000 * 60 * 60, // 1 hour
      gcTime: 1000 * 60 * 60, // 1 hour
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throwOnError: (error: any) => {
        if (error.statusCode >= 500 || error.statusCode === 404) {
          return error;
        }

        handleError(error);
      },
    },
    mutations: {
      onError: handleError,
    },
  },
});

export interface Resource {
  exists: boolean;
  name: string;
  id: number;
}

export interface Meta {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface IGetAllResponseWithoutStatus<T> {
  data: T[];
  meta: Meta;
}

export type IGetAllResponse<T> = {
  status: string;
  data: T[];
  meta: Meta;
};

export type IGetOneResponse<T> = {
  data: T;
  status: string;
};

export type ICreateOneResponse<T> = T;

export type IResponse<T> = {
  data: T;
  status: string;
  meta: Meta;
};

export type IUpdateOneResource<T> = {
  data: T;
  status: string;
};

export type IDeleteOneResource = Record<string, never>;

export type Optional<T> = T | null | undefined;

export type PartialBy<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export function notNull<T>(inp: Optional<T>): T {
  return inp as T;
}

export type ID = string | number;
