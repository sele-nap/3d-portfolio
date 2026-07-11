import { App } from '@/pages/App';
import '@/tokens/global.css';
import { injectTheme } from '@/tokens/theme';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

injectTheme();

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
