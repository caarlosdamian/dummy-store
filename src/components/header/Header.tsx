import { SearchInput } from '../searchInput/SearchInput';
import { Cart } from '../cart/Cart';
import './Header.css';
import { NavLink } from 'react-router';
import { Button } from '../button/Button';
import { useState } from 'react';
import { withAnalytics } from '../withAnalytics/WithAnalytics';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="logo">
          Dummy <strong>Shop</strong>
        </p>
      </NavLink>
      <Cart />
    </header>
  );
};
