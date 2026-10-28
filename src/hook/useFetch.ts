import { useCallback, useEffect, useState } from 'react';

interface FetchState<T> {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  data: T;
}

// T es el tipo de lo que resuelve la promesa (ej. Product[], Product | null)
export const useFetch = <T>(promesa: () => Promise<T>, initialValue: T) => {
  // empieza en true porque siempre se hace fetch al montar
  const [info, setInfo] = useState<FetchState<T>>({
    isLoading: true,
    isError: false,
    error: null,
    data: initialValue,
  });

  const getData = useCallback(async () => {
    setInfo((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
      error: null,
    }));
    try {
      const data = await promesa();
      setInfo((prev) => ({ ...prev, data }));
    } catch (error) {
      setInfo((prev) => ({ ...prev, isError: true, error }));
    } finally {
      setInfo((prev) => ({ ...prev, isLoading: false }));
    }
  }, [promesa]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading: info.isLoading,
    isError: info.isError,
    data: info.data,
  };
};
