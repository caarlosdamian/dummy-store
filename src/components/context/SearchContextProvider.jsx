import { useState } from 'react';
import { SearchContext } from '../../context/searchContext';

export const SearchContextProvider = ({ children }) => {
  const [productSearch, setProductSearch] = useState('');
  const handleSearch = (e) => {
    setProductSearch(e);
  };

  const handleClearBox = () => {
    setProductSearch('');
  };
  return (
    <SearchContext
      value={{
        handleSearch,
        handleClearBox,
        productSearch,
      }}
    >
      {children}
    </SearchContext>
  );
  // return <SearchContext.Provider>SearchContextProvider</SearchContext.Provider>;
};
