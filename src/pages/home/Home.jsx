import { useState } from 'react';
import { ProductList, Header } from '../../components';
import { data } from '../../utils/data';

{
  /* <home></home> */
}

// componente padre
const Home = () => {
  const { products } = data;
  // .jsx => una fn js que retorna html
  // cantidad de elementos en el carrito
  const [productSearch, setProductSearch] = useState('');
  const [isLoading, setisLoading] = useState(true);
  
  const handleSearch = (e) => {
    setProductSearch(e);
  };
  const handleClearBox = (e) => {
    setProductSearch("");
  };

  setTimeout(() => {
    setisLoading(false);
  }, 3000);
  const filterList =
    productSearch !== ''
      ? products.filter((elemento) =>
          elemento.title
            .toLowerCase()
            .includes(productSearch.toLocaleLowerCase()),
        )
      : products;

  // if (isLoading) return <p>Loading....</p>;

  return (
    <main>
      {/* componentes hijo */}
      <Header
        amout={10}
        productSearch={productSearch}
        handleSearch={handleSearch}
        handleClearBox={handleClearBox}
      />
      {isLoading && <p>Loading...</p>}
      <ProductList productos={filterList} />
    </main>
  );
};

export default Home;
