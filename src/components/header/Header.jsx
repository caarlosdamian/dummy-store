import { SearchInput } from '../searchInput/SearchInput';
import { Cart } from '../cart/Cart';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <p className="logo">
        Dummy <strong>Shop</strong>
      </p>
      <SearchInput />
      <Cart />
    </header>
  );
};
