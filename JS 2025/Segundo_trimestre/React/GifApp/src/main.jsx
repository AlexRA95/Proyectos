import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GifApp from './components/GifApp.jsx';
import './estilos_globales.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifApp />
  </StrictMode>
);

