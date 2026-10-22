import { useEffect, useState } from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router';
import { Stars } from '../stars/Stars';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../button/Button';
import { ProductCard } from '../productCard/ProductCard';

const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useStore((state) => state.addToCart);

  // trae el producto cuando se monta el componente
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        setProduct(await response.json());
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    };

    window.scrollTo(0, 0);
    getProduct();
  }, [id]);

  // trae los productos de la misma categoria cuando ya tenemos el producto
  useEffect(() => {
    if (!product) return;

    const getRelated = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${product.category}?limit=5`,
        );
        const { products } = await response.json();
        // quitamos el producto actual y dejamos maximo 4
        setRelated(
          products.filter((item) => item.id !== product.id).slice(0, 4),
        );
      } catch (error) {
        console.error(error);
      }
    };

    getRelated();
  }, [product]);

  if (hasError) {
    return (
      <div className="product-page-message">
        <h1>Product not found</h1>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <p className="product-page-message" role="status">
        Loading product...
      </p>
    );
  }

  const {
    title,
    brand,
    category,
    rating,
    reviews,
    price,
    discountPercentage,
    description,
    stock,
    availabilityStatus,
    images,
    sku,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
  } = product;

  const inStock = stock > 0;

  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{category}</li>
          <li aria-current="page">{title}</li>
        </ol>
      </nav>

      <section className="product-detail">
        {/* galeria de imagenes */}
        <div className="product-gallery">
          <div className="product-gallery-main">
            <img src={images[selectedImage]} alt={title} />
          </div>
          {images.length > 1 && (
            <div className="product-gallery-thumbs">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={
                    index === selectedImage
                      ? 'product-gallery-thumb product-gallery-thumb--active'
                      : 'product-gallery-thumb'
                  }
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={index === selectedImage}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* informacion del producto */}
        <div className="product-info">
          <p className="product-info-eyebrow">
            {brand ? `${brand} · ${category}` : category}
          </p>
          <h1 className="product-info-title">{title}</h1>

          <div className="product-info-rating">
            <Stars rating={rating} />
            <span>
              {rating.toFixed(1)} · {reviews.length} reviews
            </span>
          </div>

          <div className="product-info-price">
            <p>${price}</p>
            {discountPercentage > 0 && (
              <span className="product-info-discount">
                {Math.round(discountPercentage)}% off
              </span>
            )}
          </div>

          <p className="product-info-description">{description}</p>

          <p
            className={
              inStock
                ? 'product-info-stock'
                : 'product-info-stock product-info-stock--out'
            }
          >
            {availabilityStatus}
            {inStock && ` · ${stock} left`}
          </p>

          <div className="product-info-actions">
            {/* selector de cantidad */}
            <div
              className="quantity-stepper"
              role="group"
              aria-label="Quantity"
            >
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Minus size={14} aria-hidden="true" />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                disabled={quantity >= stock}
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={14} aria-hidden="true" />
              </button>
            </div>

            <Button
              fullWidth
              disabled={!inStock}
              onClick={() => addToCart(product, quantity)}
            >
              Add to cart
            </Button>
          </div>

          <dl className="product-info-specs">
            <div>
              <dt>SKU</dt>
              <dd>{sku}</dd>
            </div>
            <div>
              <dt>Warranty</dt>
              <dd>{warrantyInformation}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>{shippingInformation}</dd>
            </div>
            <div>
              <dt>Returns</dt>
              <dd>{returnPolicy}</dd>
            </div>
          </dl>
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="product-section">
          <h2>Reviews</h2>
          <ul className="product-reviews">
            {reviews.map((review) => (
              <li
                key={`${review.reviewerName}-${review.date}`}
                className="product-review"
              >
                <Stars rating={review.rating} size={14} />
                <p className="product-review-comment">{review.comment}</p>
                <p className="product-review-meta">
                  {review.reviewerName} · {formatDate(review.date)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="product-section">
          <h2>More in {category}</h2>
          <div className="product-related">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="product-related-link"
              >
                <ProductCard product={item} variant="mini" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
