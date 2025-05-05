import React from 'react';
import { Link } from 'react-router-dom';
import { Producto } from '../../types';
import fondoCategoria from '/src/assets/images/ProductoFondo3.png';

interface ProductCardProps {
  product: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="block bg-surface-white transition-colors rounded-2xl overflow-hidden shadow-lg w-full max-w-[280px] mx-auto hover:scale-[1.02] hover:shadow-card-hover hover:bg-[#AEB2AF] duration-300"
      style={{
        backgroundImage: `url(${fondoCategoria})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Enlace principal */}
      <Link to={`/producto/${product.id}`} className="block">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-0 text-surface-dark">{product.nombre}</h3>

          <div className="mb-0">
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-full h-48 object-contain rounded"
            />
          </div>

          <div className="bg-secondary-light p-2 rounded-lg border border-[#E0F2FE] mb-0">
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
        </div>
              {/* Enlaces internos (fuera del Link principal) */}
      <div className="space-y-2 mb-2 p-4">
        <div className="flex flex-col text-sm">
          <span className="text-surface-dark font-bold mb-1">Ficha Técnica:</span>
          <a
            href={product.fichaTecnica}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center"
          >
            producto_fichatecnica.pdf
            {/*<svg
              className="w-8 h-8 ml-1 flex-shrink-0 text-secondary stroke-secondary-dark stroke-1 hover:text-secondary-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a 1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>*/}
          </a>
        </div>

        <div className="flex flex-col text-sm">
          <span className="text-surface-dark font-bold mb-0">Hoja de Seguridad:</span>
          <a
            href={product.hojaSeguridad}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center"
          >
            producto_hojadeseguridad.pdf
            {/*<svg
              className="w-8 h-8 ml-1 flex-shrink-0 text-secondary stroke-secondary-dark stroke-1 hover:text-secondary-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a 1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>*/}
          </a>
        </div>
      </div>
      </Link>



      <div className="flex justify-start ml-4 mb-4"> {/* Agregué margen inferior */}
        <button
          className="inline-flex items-center justify-center py-2 px-6 bg-accent-light text-surface-dark border border-accent hover:bg-[#FBC076] transition-colors rounded-md font-medium"
          style={{ width: 'auto' }} // Ajusta el ancho del botón
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;