import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types';

interface CartProduct extends Product {
  quantity: number;
}

interface Store {
  cart: CartProduct[];
  addToCart: (newItem: Product, amount?: number) => unknown;
  decreaseQuantity: (productId: string) => unknown;
  removeFromCart: (productId: string) => unknown;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      // amount: cuantas unidades agregar (1 por defecto)
      addToCart: (newItem, amount = 1) =>
        set((state) => {
          // agrega elementos
          // revisar si ya temos ese elemento SI => subir cantidad ,NO=> agregarlo al carrito
          const itemAlreadyInCart = state.cart.find(
            (product) => product.id === newItem.id,
          );
          if (!itemAlreadyInCart) {
            return { cart: [...state.cart, { ...newItem, quantity: amount }] };
          } else {
            return {
              cart: state.cart.map((product) => {
                if (product.id === newItem.id) {
                  return { ...product, quantity: product.quantity + amount };
                }
                return product;
              }),
            };
          }
          // return { ...state, ...{ newItem, quantity: 1 }
        }),
      // baja la cantidad en 1; si llega a 0 lo quitamos del carrito
      decreaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart
            .map((product) =>
              product.id === productId
                ? { ...product, quantity: product.quantity - 1 }
                : product,
            )
            .filter((product) => product.quantity > 0),
        })),
      // remueve el producto completo del carrito (sin importar la cantidad)
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      deleteCart: () => set({ cart: [] }), // borra completo nuestro carrito
    }),
    {
      name: 'dummy-store-local-identifier', // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

// auth pieza
// checkout
// productos

// {
// tienda global
// }
