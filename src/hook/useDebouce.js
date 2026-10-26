import { useEffect, useState } from 'react';

export const useDebounced = (value, time = 300) => {
  const [debouceValue, setDebouceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouceValue(value), time);

    return () => {
      clearInterval(timer);
    };
  }, [value, time]);

  return debouceValue;
};
