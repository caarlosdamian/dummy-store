import { useStore } from '../../lib/store';
import { ProductCard } from '../productCard/ProductCard';
import './ProductList.css';

export const ProductList = ({ productos }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <section className="product-list">
      {productos?.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        );
      })}
    </section>
  );
};

// [<ProductCard/>,<ProductCard/>,<ProductCard/>]
// <ProductCard/> => elmento => producto
// [] => [jfdlskjfsd,jfskldjlsdf]
// [] => map => [] => [kfdjklsd]
