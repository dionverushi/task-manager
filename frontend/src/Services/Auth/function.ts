import { axiosInstance } from '@utils/axios';
import { User } from 'src/Types/backend';

import { LoginParams } from './type';

export const login = async (body: LoginParams): Promise<User> => {
  const response = await axiosInstance.post('auth/login', body);
  return response.data;
};
