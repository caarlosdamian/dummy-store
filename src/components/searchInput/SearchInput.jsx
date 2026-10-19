import { useId, useRef } from 'react';
import { Search, X } from 'lucide-react';
import './SearchInput.css';

// variant: "filled" | "outline"
export const SearchInput = ({
  value, // valor que va a tomar el input caja texto
  onChange, // funcion que captura cuando escribimos en la caja texto
  onClear, // funcion que captura cuando queremos borrar el texto de la caja de texto
  variant = 'filled', // la variante estilos
  placeholder = 'Search products', // la leyenda que vemos antes de escribir
  label = 'Search products', // texto que lee el lector de pantalla (no se ve)
}) => {
  const inputId = useId(); // id unico para conectar el label con el input
  const inputRef = useRef(null); // referencia al input para regresarle el foco

  const handleClear = () => {
    onClear();
    // el boton desaparece al borrar, asi que regresamos el foco al input
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    // Escape borra el texto, como en la mayoria de buscadores
    if (event.key === 'Escape' && value) {
      event.preventDefault();
      handleClear();
    }
  };

  return (
    <div role="search" className={`search-input search-input--${variant}`}>
      <label htmlFor={inputId} className="visually-hidden">
        {label}
      </label>
      <Search className="search-input-icon" size={18} aria-hidden="true" />
      <input
        ref={inputRef}
        id={inputId}
        name="search"
        type="search"
        className="search-input-field"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        enterKeyHint="search"
        onChange={(event) => {
          console.log('evento',event)
          onChange(event.target.value)
        }}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button
          type="button"
          className="search-input-clear"
          aria-label="Clear search"
          onClick={handleClear}
        >
          <X size={14} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
