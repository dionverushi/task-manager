/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import JwtManager from './jwtManager';

export interface IUserInfo {
  user: {
    email: string;
    id: number;
    role: string;
    firstName: string;
    lastName: string;
  };
  accessToken: string;
  refreshToken: string;
}
class AuthManager {
  static get token(): string | null {
    return JwtManager.accessToken;
  }

  public static parseJwt(token: string) {
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  static async getUserFromToken(): Promise<any> {
    if (JwtManager.accessToken) {
      const userInfo = AuthManager.parseJwt(JwtManager.accessToken);
      //   const response = await axios.get('user').then((x) => x.data);
      return {
        email: userInfo.Email,
        id: userInfo.Id,
        role: userInfo.role,
        firstName: userInfo.firstName,
        lastName: userInfo.LastName,
      };
    }
    return null;
  }

  static async loginWithToken(
    accessToken: string,
    navigate: any,
    refreshToken?: string,
  ) {
    let response: any = null;

    const userInfo = AuthManager.parseJwt(accessToken);

    response = {
      accessToken,
      refreshToken,
      user: {
        email: userInfo.Email,
        id: userInfo.Id,
        role: userInfo.role,
        firstName: userInfo.FirstName,
        lastName: userInfo.LastName,
      },
    };

    if (response.user && response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
      // JwtManager.setAccessToken(response.accessToken);
      navigate(`dashboard`);
      //   JwtManager.setRefreshToken(response.refreshToken);
    }
  }
  static async login(credentials: any, navigate: any): Promise<void> {
    const res = await axios.post('auth/login', credentials);
    const data = res?.data;

    if (data?.accessToken && data?.refreshToken) {
      this.loginWithToken(data.accessToken, navigate, data?.refreshToken);
    }
  }

  //   static async refreshToken(
  //     accessToken: string,
  //     refreshToken: string
  //   ): Promise<IUserInfo> {
  //     const { data } = await axios.post("authentication/refresh", {
  //       accessToken,
  //       refreshToken,
  //     });
  //     let responseLogin: IUserInfo = null;
  //     if (data?.accessToken && data?.refreshToken) {
  //       const userInfo = AuthManager.parseJwt(data.accessToken);
  //       responseLogin = {
  //         accessToken: data.accessToken,
  //         refreshToken: data.refreshToken,
  //         user: {
  //           email: userInfo.Email,
  //           id: userInfo.Id,
  //           role: userInfo.role,
  //           firstName: userInfo.FirstName,
  //           lastName: userInfo.LastName,
  //         },
  //       };
  //       JwtManager.setAccessToken(data.accessToken);
  //       JwtManager.setRefreshToken(data.refreshToken);
  //     }
  //     return responseLogin;
  //   }

  static logout() {
    JwtManager.clearToken();
  }
}

export default AuthManager;
