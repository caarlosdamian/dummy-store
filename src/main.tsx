import { StrictMode } from 'react';
import { createRoot, type Container } from 'react-dom/client';
import {
  onCaughtErrorProd,
  onRecoverableErrorProd,
  onUncaughtErrorProd,
} from './lib/reportCaugtError.js';
import './index.css';
import { SearchContextProvider } from './components/context/SearchContextProvider';
import { RouterProvider } from 'react-router';
import { router } from './routes/router';

const container = document.getElementById('container') as Container;
const root = createRoot(container, {
  onCaughtError: onCaughtErrorProd,
  onRecoverableError: onRecoverableErrorProd,
  onUncaughtError: onUncaughtErrorProd,
});

root.render(
  <StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
      {/*  cualquier componente que nosotros agreguemos aqui
      puede hacer uso del contexto */}
    </SearchContextProvider>
  </StrictMode>,
);
