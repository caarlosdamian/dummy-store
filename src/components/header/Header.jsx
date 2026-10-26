import { SearchInput } from '../searchInput/SearchInput';
import { Cart } from '../cart/Cart';
import './Header.css';
import { NavLink } from 'react-router';
import { Button } from '../button/Button';
import { useState } from 'react';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <p className="logo">
          Dummy <strong>Shop</strong>
        </p>
      </NavLink>
      <SearchInput />
      <Cart />
    </header>
  );
};
