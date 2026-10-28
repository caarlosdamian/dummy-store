import { useCallback, useContext } from 'react';
import { ProductList } from '../../components';
import { SearchContext } from '../../context/searchContext';
import { useAPI } from '../../hook/useAPI';
import { useDebounced } from '../../hook/useDebouce';
import { useFetch } from '../../hook/useFetch';
import type { Product } from '../../types';

const Home = () => {
  const { productSearch } = useContext(SearchContext);
  const debounceValue = useDebounced(productSearch, 1000);
  const { getProducts, searchProducts } = useAPI();

  const promise = useCallback(async () => {
    try {
      const promise =
        debounceValue !== '' ? searchProducts(debounceValue) : getProducts();
      const response = await promise;
      const { products } = await response.data;
      return products;
    } catch (error) {
      console.error(error);
    }
  }, [debounceValue, searchProducts, getProducts]);

  const {
    data: products,
    isError,
    isLoading,
  } = useFetch<Product[]>(promise, []);
  // products.split() // que typo es este valor (string,array,number,objet,fn,undefine,null)

  return (
    <main className="flex items-center justify-center">
      <ProductList
        productos={products}
        isLoading={isLoading}
        isError={isError}
      />
    </main>
  );
};

export default Home;
