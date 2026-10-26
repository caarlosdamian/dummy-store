// custom hook

import { useCallback } from 'react';
import { api } from '../lib/axios';

export const useAPI = () => {
  const getProduct = useCallback((id) => api.get(`/products/${id}`), []);
  const getProducts = useCallback(() => api.get(`/products`), []);
  const searchProducts = useCallback(
    (query) => api.get(`/products/search?q=${query}`),
    [],
  );
  const getRelevantProducts = useCallback(
    (category) => api.get(`products/category/${category}?limit=5`),
    [],
  );

  return { getProduct, getRelevantProducts, searchProducts, getProducts };
};
