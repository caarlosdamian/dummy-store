import { memo } from 'react';
import { useStore } from '../../lib/store';
import { ProductCard } from '../productCard/ProductCard';

export const ProductList = memo(({ productos }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <section
      className="grid grid-cols-2 gap-x-4 gap-y-6 px-[22px] pb-[22px] [&_.product-card]:w-full sm:grid-cols-3 min-[900px]:grid-cols-4 min-[900px]:gap-x-6 min-[900px]:gap-y-8 min-[1200px]:mx-auto min-[1200px]:max-w-7xl min-[1200px]:grid-cols-5 color-red"
    >
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
});

// [<ProductCard/>,<ProductCard/>,<ProductCard/>]
// <ProductCard/> => elmento => producto
// [] => [jfdlskjfsd,jfskldjlsdf]
// [] => map => [] => [kfdjklsd]

// 21ms .7ms
// 15ms .3ms
// 15ms .3ms