import { StorageKey } from 'src/Types/storageKey';

type StorageValues = `${StorageKey}`;

export const isAuthenticated = (): boolean => {
  // Check whether the current time is past the
  // access token's expiry time
  // let expiresAt = "";
  let token: string | null = '';
  try {
    token = storage.getItem(StorageKey.ACCESS_TOKEN);
    // JSON.parse(localStorage.getItem("activeUser") || "0").expires_at || "0";
    // JSON.parse(localStorage.getItem('activeUser') || '').access_token || '';
  } catch (error) {
    /** Do nothing **/
    // console.log(error);
  }

  // return new Date().getTime() < Number(expiresAt);
  return !!token;
};

export const storage = {
  getItem: (key: StorageKey | StorageValues) => {
    return localStorage.getItem(key);
  },
  setItem: (key: StorageKey | StorageValues, token: string) => {
    localStorage.setItem(key, token);
    window.dispatchEvent(new Event('local-storage'));
  },
  removeItem: (key: StorageKey | StorageValues) => {
    localStorage.removeItem(key);
    window.dispatchEvent(new Event('local-storage'));
  },
};
