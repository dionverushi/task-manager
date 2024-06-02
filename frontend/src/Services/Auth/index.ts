import { useMutation } from '@tanstack/react-query';
import { storage } from '@utils/storage';
import { UseMutationHookOptions } from '@utils/useMutationTypes';
import { User } from 'src/Types/backend';
import { StorageKey } from 'src/Types/storageKey';

import { login } from './function';
import { LoginParams } from './type';

export const useLoginUser = (
  options?: UseMutationHookOptions<User, Error, LoginParams>,
) => {
  return useMutation({
    mutationFn: login,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      storage.setItem(StorageKey.ACCESS_TOKEN, data.accessToken);
    },
    ...options,
  });
};
