import { useEffect } from 'react';

export const useTimeout = (
  callback: () => void,
  timeout: number,
  start: boolean,
) => {
  useEffect(() => {
    let timer;
    if (start) {
      timer = setTimeout(callback, timeout);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [callback, timeout, start]);
};
