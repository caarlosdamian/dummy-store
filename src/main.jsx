import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  onCaughtErrorProd,
  onRecoverableErrorProd,
  onUncaughtErrorProd,
} from './lib/reportCaugtError.js';
import './index.css';

const container = document.getElementById('container');
const root = createRoot(container, {
  onCaughtError: onCaughtErrorProd,
  onRecoverableError: onRecoverableErrorProd,
  onUncaughtError: onUncaughtErrorProd,
});
root.render(
  <StrictMode>
  </StrictMode>,
);
