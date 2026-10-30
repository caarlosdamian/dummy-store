import { Plus } from 'lucide-react';
import './ProductCard.css';
import { Link } from 'react-router';
import type { Product } from '../../types';

export type Variant = 'grid' | 'compact' | 'mini';
interface Props {
  product: Product;
  variant?: Variant;
  onAddToCart: (p: Product) => void;
}

// variant: "grid" (desktop) | "compact" (mobile) | "mini" (related)
export const ProductCard = ({
  product,
  variant = 'grid',
  onAddToCart,
}: Props) => {
  const { title, category, price, thumbnail, id } = product;

  return (
    <article className={`product-card product-card--${variant}`}>
      <Link to={`/product/${id}`}>
        <div className="product-card-thumb">
          <img src={thumbnail} alt={title} />
        </div>
      </Link>

      <div className="product-card-body">
        {variant === 'grid' && (
          <p className="product-card-category" data-testid="category">
            {category}
          </p>
        )}
        <h3 className="text-cualquier">{title}</h3>

        <div className="product-card-footer">
          <p className="product-card-price">${price}</p>

          {variant === 'grid' && (
            <button
              data-testid="product-card-btn"
              className="product-card-btn"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onAddToCart?.(product);
              }}
            >
              Add to cart
            </button>
          )}

          {variant === 'compact' && (
            <button
              className="product-card-btn product-card-btn--icon"
              aria-label="Add to cart"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onAddToCart?.(product);
              }}
            >
              <Plus size={16} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
