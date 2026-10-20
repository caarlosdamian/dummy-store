import { ProductCard } from '../productCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ productos }) => {
  return (
    <section className="product-list">
      {productos?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};

// [<ProductCard/>,<ProductCard/>,<ProductCard/>]
// <ProductCard/> => elmento => producto
// [] => [jfdlskjfsd,jfskldjlsdf]
// [] => map => [] => [kfdjklsd]
