import { QueryFunction, QueryObserverOptions } from '@tanstack/react-query';

import { IGetAllResponse } from './queryClient';

export type UseQueryHookOptions<TData, TError = unknown> = Omit<
  QueryObserverOptions<TData, TError>,
  'queryKey' | 'queryFn'
>;

export type QueryFunctionHook<TData> = QueryFunction<TData>;

export type UseQueryHook<TData> = TData;
// Get
export interface GetAllEntitiesProps<T> {
  options?: UseQueryHookOptions<IGetAllResponse<T>>;
  serviceId?: string;
  filters?: string;
}
export interface GetSingleEntityProps<T> {
  id: number | string;
  options?: UseQueryHookOptions<IGetAllResponse<T>>;
  filters?: string;
}
export interface GetSingleEntityFilteredProps<T> {
  id: number | string;
  serviceId?: string;
  options?: UseQueryHookOptions<IGetAllResponse<T>>;
  filters?: string;
}
