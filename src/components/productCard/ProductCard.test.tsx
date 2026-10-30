import { describe, expect, test, vi } from 'vitest';
import { getByTestId, render, screen } from '../../test/test-utils';
import { ProductCard, type Variant } from './ProductCard';
import userEvent from '@testing-library/user-event';

import type { Product } from '../../types';
import { mockProduct } from '../../utils/data';

describe('Testing ProductCard component', () => {
  const renderWithProps = (
    onAddToCart: (p: Product) => void,
    variant: Variant,
  ) =>
    render(
      <ProductCard
        product={mockProduct as unknown as Product}
        onAddToCart={onAddToCart}
        variant={variant}
      />,
    );
  // renderizar

  test('render product info', () => {
    // getBy => si no lo encuentra = error / no async / en pantalla
    // queryBy => si no lo encuentra = null / no async / no en pantalla
    // findby => si no lo encuentra = rechaza promesa /  async / elementos que aparecen en patalla despues de algo (async )

    // getAllby => si no lo encuentra = error / no async / varios elementos en pantalla
    // queryAllby => => si no lo encuentra = [] / no async / varios no en pantalla
    // findAllby => => si no lo encuentra = rechaza /  async / varios en pantalla

    renderWithProps((e) => {}, 'grid');
    const title = screen.getByText(/Essence Mascara Lash Princess/i);
    const category = screen.getByTestId('category');
    // console.log(screen.debug());
    expect(title).toHaveTextContent(mockProduct.title);
    expect(category).toHaveTextContent(mockProduct.category);
    expect(category).toBeInTheDocument();
  });

  test('User click a btn', async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn((producto) =>
      console.log('productomock', producto),
    );
    renderWithProps(onAddToCart, 'grid');
    const button = screen.getByTestId('product-card-btn');
    await user.click(button);
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
  // lo que vamos a testear

  // datos del producto se renderizan

  // si el usuario da clickn en agregar a cart
  // debe de llamar al evento onclick o llamar a la funcion

  // si usamos una variante se aplique (estilos)

  // acertar
});
