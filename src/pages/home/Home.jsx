import { useContext, useEffect, useState } from 'react';
import {  ProductList } from '../../components';
import { SearchContext } from '../../context/searchContext';
import { useAPI } from '../../hook/useAPI';
import { useDebounced } from '../../hook/useDebouce';

// componente padre
const Home = () => {
  const [products, setProducts] = useState([]);
  const { productSearch } = useContext(SearchContext);
  const debounceValue = useDebounced(productSearch, 1000);
  const { getProducts, searchProducts } = useAPI();
  // const url = productSearch !== ""?get

  // useLayoutEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const promise =
          debounceValue !== '' ? searchProducts(debounceValue) : getProducts();
        const response = await promise;
        const { products } = await response.data;
        setProducts(products);
        console.log('data', products);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [debounceValue, searchProducts, getProducts]); // cuando se monta y se desmonta el componente

  // const computation = useMemo(
  //   () =>
  //     Array(1000)
  //       .fill(null)
  //       .map((el, index) => {
  //         console.log('Recalculando computation memorizado');
  //         return index * 2;
  //       }),
  //   [],
  // );

  //   const testing2 = useMemo(
  //   () =>
  //     Array(1000)
  //       .fill(null)
  //       .map((el, index) => {
  //         console.log('Recalculando testing2 memorizado');
  //         return index * 2;
  //       }),
  //   [testing],
  // );   valor

  // const tesingTwo = useCallback((arr) => {
  //   console.log(arr);
  // }, []); // => 4564 => en cada renderizado vamos a tener la misma funcion

  // const testing = () => {
  //   console.log('RECALCULANDO');
  // }; // => 5465 , 4654,6456,4566 => generando una funcion nueva cada renderizado

  // tesingTwo(211)
  // const testinge2 = Array(1000)
  //   .fill(null)
  //   .map((el, index) => {
  //     console.log('Recalculando Testing2');
  //     return index * 2;
  //   });

  // console.log('testing', computation);

  // useEffect(() => {
  //   getData()
  // },[productSearch]); // cuando se monta y se desmonta el componente y adicional cuando productSearch cambie

  // useEffect(() => {
  //   getData()
  // });// cuando se monta y se desmonta el componente y adicional cuando exista renderizado (evitar)

  // console.log('productos', products);

  // setTimeout(() => {
  //   setisLoading(false);
  // }, 10000);

  // const filterList =
  //   productSearch !== ''
  //     ? products?.filter((elemento) =>
  //         elemento.title
  //           .toLowerCase()
  //           .includes(productSearch.toLocaleLowerCase()),
  //       )
  //     : products;

  // if (isLoading) return <p>Loading....</p>;

  return (
    <main>
      <ProductList productos={products} />
    </main>
  );
};

export default Home;
