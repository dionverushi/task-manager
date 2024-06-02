import { useEffect, useState } from 'react';
import { StorageKey } from 'src/Types/storageKey';

import { storage } from '../Utils/storage';

type UseStorageReturnType<T extends StorageKey[]> = {
  [K in T[number]]: string;
};

export const useLocalStorage = <T extends StorageKey[]>(
  keys: T,
): UseStorageReturnType<T> => {
  const getStorageValues = (values = {}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newStorage: any = { ...values };

    keys.map((key) => {
      const value = storage.getItem(key);

      newStorage[key] = value;
    });

    return newStorage;
  };

  const [storageValues, setStorageValues] = useState(getStorageValues());

  useEffect(() => {
    const listener = () => {
      const newStorage = getStorageValues(storageValues);
      setStorageValues(newStorage);
    };

    window.addEventListener('local-storage', listener, false);

    return () => window.removeEventListener('local-storage', listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return storageValues;
};
