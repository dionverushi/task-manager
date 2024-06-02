import Axios, { InternalAxiosRequestConfig } from 'axios';

import { storage } from './storage';

export enum eNotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum eHttpResponse {
  Ok = 200,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  Gone = 410,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export const axiosInstance = Axios.create({
  baseURL: 'http://192.168.88.15:4000',
});

export const setHeaderToken = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  //client.defaults.headers.common.Authorization = null;
  delete axiosInstance.defaults.headers.common.Authorization;
};

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = storage.getItem('accessToken');

  if (accessToken && !config.headers.authorization) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }
  config.headers.Accept = 'application/json';
  return config;
};

axiosInstance.interceptors.request.use(authRequestInterceptor);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const statusCode = error.response?.status;

    if (statusCode === 401) {
      storage.removeItem('accessToken');
    }
  },
);
