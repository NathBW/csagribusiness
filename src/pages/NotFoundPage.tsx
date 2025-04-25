import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página no encontrada</p>
      <Link 
        to="/" 
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;