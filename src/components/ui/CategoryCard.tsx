import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriaInfo } from '../../types';
import fondoCategoria from '/src/assets/images/CategoriaFondo.png';


interface CategoryCardProps {
  category: CategoriaInfo;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={category.path} 
      className="group block overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="relative">
        <div className="bg-secondary shadow-[inset_0_-5px_8px_rgba(0,0,0,0.2)] aspect-square flex items-center justify-center hover:bg-[#7CD1FD] transition-colors duration-300">
          <img 
            src={category.imagen} 
            alt={category.nombre} 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div
          className="relative bg-cover bg-center p-4 transition-colors duration-300"
          style={{
            backgroundImage: `url(${fondoCategoria})`, // Ruta de la imagen
            backgroundSize: 'cover', // Asegura que la imagen cubra todo el contenedor
            backgroundRepeat: 'no-repeat', // Evita la repetición de la imagen
            backgroundPosition: 'bottom', // Centra la imagen
            paddingBottom: '2rem', // Espacio inferior para el texto
            paddingLeft: '2rem', // Espacio izquierdo para el texto
            paddingRight: '2rem', // Agregar un poco de padding derecho también
          }}
        >
          <div className="absolute inset-0 hover:bg-[#E6E7E6] hover:bg-opacity-60 transition-colors duration-300 rounded-b-lg"></div> {/* Overlay opcional para contraste */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 text-surface-dark">
              {category.nombre}
            </h3>
            <p className="text-sm text-surface-dark">
              {category.descripcion}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
