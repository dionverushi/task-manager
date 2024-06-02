import { axiosInstance } from '@utils/axios';
import {
  IGetAllResponse,
  IGetOneResponse,
  queryClient,
} from '@utils/queryClient';
import { redirect } from 'react-router-dom';
import { User } from 'src/Types/backend';

import { CreateUserParams } from './type';

export const meLoader = async () => {
  const query = ['me'];
  let data;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any =
      queryClient.getQueryData(query) ??
      (await queryClient.fetchQuery({
        queryKey: query,
        queryFn: authMe,
      }));

    data = result;
  } catch {
    redirect('/login');
  }

  return !!data ? data.role : null;
};

export const authMe = async (): Promise<User> => {
  const res: IGetOneResponse<User> = await axiosInstance.get('me');
  return res.data;
};

export const getUsers = (): Promise<IGetAllResponse<User>> => {
  return axiosInstance.get('user');
};

export const createUser = (
  body: CreateUserParams,
): Promise<IGetOneResponse<User>> => {
  return axiosInstance.post('user', body);
};

export const createEmployee = (
  body: CreateUserParams,
): Promise<IGetOneResponse<User>> => {
  return axiosInstance.post('user/employee', body);
};
