import { useState } from 'react';

import { useTimeout } from './useTimeout';

export const usePressAndHold = (
  callback: () => void,
  delay: number,
  timeout: number,
) => {
  const [start, setStart] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useTimeout(() => setIsStarted(true), delay, start);
  useTimeout(callback, timeout, isStarted);

  return {
    onPressIn: () => setStart(true),
    onPressOut: () => {
      setStart(false);
      setIsStarted(false);
    },
  };
};
