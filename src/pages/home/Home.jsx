import { useContext, useEffect, useState } from 'react';
import { ProductList } from '../../components';
import { SearchContext } from '../../context/searchContext';

// componente padre
const Home = () => {
  const [products, setProducts] = useState([]);
  const { productSearch } = useContext(SearchContext);

  

  // useLayoutEffect
  useEffect(() => {
    const getData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const { products } = await response.json();
      setProducts(products);
      console.log('data', products);
    } catch (error) {
      console.error(error);
    }
  };
    getData();
  }, []); // cuando se monta y se desmonta el componente

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

  const filterList =
    productSearch !== ''
      ? products?.filter((elemento) =>
          elemento.title
            .toLowerCase()
            .includes(productSearch.toLocaleLowerCase()),
        )
      : products;

  // if (isLoading) return <p>Loading....</p>;

  return (
    <main>
      <ProductList productos={filterList} />
    </main>
  );
};

export default Home;
