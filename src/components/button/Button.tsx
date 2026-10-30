import { LoaderCircle } from 'lucide-react';
import './Button.css';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outline' | 'neutral' | 'danger' | 'ghost'; // la variante de estilos
  size: "sm" | "md" | "lg"; // el tamaño del boton
  disabled: boolean; // deshabilita el boton
  loading: boolean; // muestra el spinner y bloquea el boton mientras carga
  fullWidth: boolean; // el boton ocupa todo el ancho disponible
  type: string;
}

// variant: "primary" | "secondary" | "outline" | "neutral" | "danger" | "ghost"
// size: "sm" | "md" | "lg"
export const Button = ({
  children, // el texto o contenido del boton
  variant = 'primary', // la variante de estilos
  size = 'md', // el tamaño del boton
  disabled = false, // deshabilita el boton
  loading = false, // muestra el spinner y bloquea el boton mientras carga
  fullWidth = false, // el boton ocupa todo el ancho disponible
  type = 'button', // "button" por defecto para no enviar formularios sin querer
  onClick, // funcion que se ejecuta al hacer click
  ...rest // cualquier otro atributo (aria-label, className, etc.)
}: Props) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    loading && 'btn--loading',
    rest.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={onClick}
    >
      {loading && (
        <LoaderCircle className="btn-spinner" size={18} aria-hidden="true" />
      )}
      {children}
    </button>
  );
};
