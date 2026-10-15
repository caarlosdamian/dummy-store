import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  onCaughtErrorProd,
  onRecoverableErrorProd,
  onUncaughtErrorProd,
} from './lib/reportCaugtError.js';
import './index.css';
import Home from './pages/home/Home.jsx';

const container = document.getElementById('container');
const root = createRoot(container, {
  onCaughtError: onCaughtErrorProd,
  onRecoverableError: onRecoverableErrorProd,
  onUncaughtError: onUncaughtErrorProd,
});

root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
