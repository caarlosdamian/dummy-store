import { createContext } from 'react';

// type  tuplas uniones literales string | number [string,number] 'active'| 'inactivo'
// &
// interfaces objetos extends

export interface SearchContextI {
  productSearch: string;
  handleSearch: (e: string) => void;
  handleClearBox: () => void;
}

// valor por defecto: solo se usa si un componente lee el contexto fuera del provider
export const SearchContext = createContext<SearchContextI>({
  productSearch: '',
  handleSearch: () => {},
  handleClearBox: () => {},
});
// contexto
// provider
