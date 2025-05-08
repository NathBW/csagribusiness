import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from '../src/components/layout/AuthContext.tsx'; // Ajusta la ruta según tu estructura


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AuthProvider>
        <App />
      </AuthProvider>
  </StrictMode>
);