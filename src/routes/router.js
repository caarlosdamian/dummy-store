import { createBrowserRouter } from 'react-router';
import Home from '../pages/home/Home';
import ErrorPage from '../pages/404/Error';
import { RootLayout } from '../components/layouts/RootLayout';
import { Checkout } from '../pages/checkout/Checkout';
import { Product } from '../pages/product/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'checkout',
        Component: Checkout,
      },
      {
        path: 'product/:id',
        Component: Product,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);
