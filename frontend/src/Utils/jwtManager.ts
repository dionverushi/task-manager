import { jwtDecode, JwtPayload } from 'jwt-decode';

import AppStorageManager from './appStorageManager';

class JwtManager {
  private static access_token = 'accessToken';
  private static refresh_token = 'refresh_token';
  public static get accessToken(): string | null {
    return AppStorageManager.getItem(this.access_token);
  }
  public static get refreshToken(): string | null {
    return AppStorageManager.getItem(this.refresh_token);
  }

  static async getValidToken(): Promise<string | null> {
    const token = this.accessToken;
    // const refreshToken = this.refreshToken;

    if (!token) {
      return null;
    }

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded && decoded.exp) {
        const currentDate = new Date().getTime();
        const timeExp = decoded.exp * 1000;
        if (currentDate < timeExp) {
          return token;
        }
        // const res = await AuthManager.refreshToken(token, refreshToken);
        // if (res && res.accessToken) {
        //   return res.accessToken;
        // }
      }
      // eslint-disable-next-line no-empty
    } catch (e) {}
    return null;
  }

  static setAccessToken(t: string | null): void {
    if (t) {
      AppStorageManager.setItem(this.access_token, t);
    } else {
      AppStorageManager.removeItem(this.access_token);
    }
  }

  static setRefreshToken(t: string | null): void {
    if (t) {
      AppStorageManager.setItem(this.refresh_token, t);
    } else {
      AppStorageManager.removeItem(this.refresh_token);
    }
  }

  static clearToken() {
    AppStorageManager.removeItem(this.access_token);
    AppStorageManager.removeItem(this.refresh_token);
  }
}

export default JwtManager;
