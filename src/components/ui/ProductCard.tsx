import React from 'react';
import { Link } from 'react-router-dom';
import { Producto } from '../../types';
import fondoCategoria from '/src/assets/images/ProductoFondo3.png';

interface ProductCardProps {
  product: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/producto/${product.id}`}
      className="block bg-surface-white transition-colors rounded-lg overflow-hidden shadow-card w-full max-w-[280px] mx-auto hover:scale-[1.02] hover:shadow-card-hover hover:bg-[#AEB2AF] duration-300"
      style={{
        backgroundImage: `url(${fondoCategoria})`, // Ruta de la imagen
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
        backgroundRepeat: 'no-repeat', // Evita la repetición de la imagen
        backgroundPosition: 'center', // Centra la imagen

      }}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-0 text-surface-dark">{product.nombre}</h3>
        
        <div className="mb-0">
          <img 
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-48 object-contain rounded"
          />
        </div>
        
        <div className="bg-secondary-light p-2 rounded-lg border border-[#E0F2FE] mb-3">
          <div className="flex flex-wrap gap-1">
            {product.cultivos.map((cultivo, index) => (
              <span 
                key={index}
                className="inline-block bg-secondary-dark text-surface-dark text-xs rounded-full px-3 py-1"
              >
                {cultivo}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex flex-col text-sm">
            <span className="text-link font-medium mb-1">Ficha Técnica:</span>
            <a 
              href={product.fichaTecnica} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:underline flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              producto_fichatecnica.pdf
              <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="flex flex-col text-sm">
            <span className="text-link font-medium mb-1">Hoja de Seguridad:</span>
            <a 
              href={product.hojaSeguridad} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:underline flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              producto_hojadeseguridad.pdf
              <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="inline-flex items-center justify-center w-full py-2 px-4 bg-accent-light text-surface-dark border border-accent hover:bg-[#FBC076] transition-colors rounded-md font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Comprar
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;