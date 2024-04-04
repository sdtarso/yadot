import { useState } from "react";

export function useLocalStorage<T>(key: string, value: T): [T, (p: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
        return value;
      }
    } catch (e) {
      return value;
    }
  });
  const setValue = (newState: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (e) {}
    setStoredValue(newState);
  };

  return [storedValue, setValue];
}
