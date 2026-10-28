import { ShoppingCart } from 'lucide-react';
import { useStore } from '../../lib/store';

export const Cart = () => {
  const cart = useStore((state) => state.cart);
  const quantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const cartAmount = cart.length;

  return (
    <button className="cart-btn" aria-label="Cart">
      <ShoppingCart size={18} />
      {cartAmount > 0 && <span className="cart-btn-count">{quantity}</span>}
    </button>
  );
};
