import { ShoppingCart } from 'lucide-react';
import './Header.css';
import { SearchInput } from '../searchInput/SearchInput';

export const Header = (props) => {
  return (
    <header className="header">
      <p className="logo">
        Dummy <strong>Shop</strong>
      </p>
      <SearchInput
        value={props?.productSearch}
        onChange={props?.handleSearch}
        onClear={props?.handleClearBox}
      />
      <button className="cart-btn" aria-label="Cart">
        <ShoppingCart size={18} />
        {props.amount > 0 && (
          <span className="cart-btn-count">{props.amount}</span>
        )}
      </button>
    </header>
  );
};
