import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import './firebase/config'; // Importa el archivo config.ts para que se ejecute el script seed


// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page components
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './components/layout/AuthPage';
import ProtectedRoute from './components/ui/ProtectedRoute';
import EditProduct from './pages/EditProduct';
import EditProductContainer from './components/product/EditProductContainer'; // Importamos el contenedor




function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-surface-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categoria/:categoryId" element={<CategoryPage />} />
            <Route path="/producto/:productId" element={<ProductPage />} />
            <Route path="/admin" element={ <ProtectedRoute> <AdminPage /> </ProtectedRoute>} />
            <Route path="/admin/editar/:productId" element={<ProtectedRoute><EditProductContainer /></ProtectedRoute>} /> {/* Usamos el contenedor */}
            <Route path="/auth" element={<AuthPage />} /> {/* Nueva ruta */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;