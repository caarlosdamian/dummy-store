import '../productCard/ProductCard.css';

export const ProductCardSkeleton = () => {
  return (
    <div className="product-card product-card-skeleton" aria-hidden="true">
      <div className="product-card-thumb skeleton-block" />
      <div className="product-card-body">
        <span className="skeleton-line skeleton-line--short" />
        <span className="skeleton-line" />
        <span className="skeleton-line skeleton-line--price" />
      </div>
    </div>
  );
};
