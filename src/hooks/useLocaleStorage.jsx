import { useState, useEffect } from 'react';

const getValue = (key, initValue) => {
  const value = localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (err) {
      console.log(err);
    }
  }
  return initValue;
};
export default function useLocaleStorage(key, initValue) {
  const [state, setState] = useState(getValue(key, initValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
