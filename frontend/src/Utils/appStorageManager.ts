/* eslint-disable @typescript-eslint/no-explicit-any */
import { EncryptStorage } from 'encrypt-storage';

import PropertyManager from './propertyManager';

export enum eStorageType {
  Local,
  Session,
}

class AppStorageManager {
  private static _encryptLocalStorage: EncryptStorage;
  private static _encryptSessionStorage: EncryptStorage;

  private static get encryptLocalStorage(): EncryptStorage {
    if (!AppStorageManager._encryptLocalStorage) {
      AppStorageManager._encryptLocalStorage = new EncryptStorage(
        '5ghmhg76567hfgcuhd5vxaghoplptaBMyn6LBV',
        { storageType: 'localStorage' },
      );
    }
    return AppStorageManager._encryptLocalStorage;
  }
  private static get encryptSessionStorage(): EncryptStorage {
    if (!AppStorageManager._encryptSessionStorage) {
      AppStorageManager._encryptSessionStorage = new EncryptStorage(
        '6dfgghfg6gdfgdf754rsdbnmeiuRbp3zZyVHwp',
        { storageType: 'sessionStorage' },
      );
    }
    return AppStorageManager._encryptSessionStorage;
  }
  static getItem(
    key: string,
    defaultValue?: any,
    family: eStorageType = eStorageType.Local,
  ) {
    let valToReturn = null;
    switch (family) {
      case eStorageType.Local:
        valToReturn = AppStorageManager.encryptLocalStorage.getItem(key);
        break;
      case eStorageType.Session:
        valToReturn = AppStorageManager.encryptSessionStorage.getItem(key);

        break;
      default:
        new Error('AppStorageManager.getItem: case not defined');
    }
    return PropertyManager.getValueOrDefault<string>(valToReturn, defaultValue);
  }
  static setItem(
    key: string,
    value: string,
    family: eStorageType = eStorageType.Local,
  ) {
    switch (family) {
      case eStorageType.Local:
        AppStorageManager.encryptLocalStorage.setItem(key, value);
        break;
      case eStorageType.Session:
        AppStorageManager.encryptSessionStorage.setItem(key, value);
        break;
      default:
        new Error('AppStorageManager.setItem: case not defined');
    }
  }
  static removeItem(key: string, family: eStorageType = eStorageType.Local) {
    switch (family) {
      case eStorageType.Local:
        AppStorageManager.encryptLocalStorage.removeItem(key);
        break;
      case eStorageType.Session:
        AppStorageManager.encryptSessionStorage.removeItem(key);
        break;
      default:
        new Error('AppStorageManager.removeItem: case not defined');
    }
  }
}

export default AppStorageManager;
