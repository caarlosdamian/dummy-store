import { memo } from 'react';
import { useStore } from '../../lib/store';
import { ProductCard } from '../productCard/ProductCard';
import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';
import { ProductListEmpty } from '../ProductListEmpty/ProductListEmpty';

export const ProductList = memo(({ productos, isLoading, isError }) => {
  const addToCart = useStore((state) => state.addToCart);

  if (isError) return <>Algo salio mal</>;

  if (isLoading)
    return (
      <section className="mx-auto grid w-full max-w-7xl grid-cols-2 justify-items-center gap-x-4 gap-y-6 px-4 pb-[22px] sm:grid-cols-3 sm:px-6 min-[900px]:grid-cols-4 min-[900px]:gap-x-6 min-[900px]:gap-y-8 min-[900px]:px-8 min-[1200px]:grid-cols-5">
        {Array(100).fill(null)?.map(() => {
          return <ProductCardSkeleton />;
        })}
      </section>
    );

  if (!productos?.length) return <ProductListEmpty />;

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-2 justify-items-center gap-x-4 gap-y-6 px-4 pb-[22px] sm:grid-cols-3 sm:px-6 min-[900px]:grid-cols-4 min-[900px]:gap-x-6 min-[900px]:gap-y-8 min-[900px]:px-8 min-[1200px]:grid-cols-5">
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
