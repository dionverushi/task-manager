import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import {
  IGetAllResponse,
  IGetOneResponse,
  queryClient,
} from '@utils/queryClient';
import { UseMutationHookOptions } from '@utils/useMutationTypes';
import { UseQueryHookOptions } from '@utils/useQueryTypes';
import { User } from 'src/Types/backend';

import { authMe, createEmployee, createUser, getUsers } from './function';
import { CreateUserParams } from './type';

export const useGetMe = (options?: UseQueryHookOptions<User, Error>) => {
  const { data, isPending, isError, isLoading } = useSuspenseQuery({
    retry: 0,
    queryKey: ['authMe'],
    queryFn: authMe,
    staleTime: Infinity,
    ...options,
  });

  return {
    data,
    isPending,
    isError,
    isLoading,
  };
};

export const useUsers = (
  options?: UseQueryHookOptions<IGetAllResponse<User>, Error>,
) => {
  return useQuery({
    queryFn: getUsers,
    queryKey: ['user'],
    ...options,
  });
};

export const useCreateUser = (
  options?: UseMutationHookOptions<
    IGetOneResponse<User>,
    Error,
    CreateUserParams
  >,
) => {
  return useMutation({
    mutationFn: createUser,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    ...options,
  });
};

export const useCreateEmployee = (
  options?: UseMutationHookOptions<
    IGetOneResponse<User>,
    Error,
    CreateUserParams
  >,
) => {
  return useMutation({
    mutationFn: createEmployee,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    ...options,
  });
};
