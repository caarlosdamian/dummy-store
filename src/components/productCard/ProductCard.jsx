import { Plus } from 'lucide-react';
import './ProductCard.css';
import { Link } from 'react-router';

// variant: "grid" (desktop) | "compact" (mobile) | "mini" (related)
export const ProductCard = ({ product, variant = 'grid', onAddToCart }) => {
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
          <p className="product-card-category">{category}</p>
        )}
        <h3 className="text-cualquier">{title}</h3>

        <div className="product-card-footer">
          <p className="product-card-price">${price}</p>

          {variant === 'grid' && (
            <button
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
