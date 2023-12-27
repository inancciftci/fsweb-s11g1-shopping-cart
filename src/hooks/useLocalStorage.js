import { useState } from "react";

export default function useLocalStorage(initialValue, key = "localData") {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    const finalItem = item ? JSON.parse(item) : initialValue;
    localStorage.setItem(key, JSON.stringify(finalItem));
    return finalItem;
  });

  const setLocalStorageHandler = (newValue) => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setLocalStorageHandler];
}
