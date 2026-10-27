import { useCallback, useEffect, useState } from 'react';

export const useFetch = (promesa,initialValue) => {
  // empieza en true porque siempre se hace fetch al montar
  const [info, setInfo] = useState({
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
