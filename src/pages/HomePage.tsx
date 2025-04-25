import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/ui/CategoryCard';
import { CategoriaInfo } from '../types';

// Sample categories data
const categories: CategoriaInfo[] = [
  {
    id: 'fertilizantes',
    nombre: 'Fertilizante',
    descripcion: 'Nutrientes esenciales para sus cultivos.',
    imagen: './src/assets/images/category/Cfertilizante.png',
    path: '/categoria/fertilizantes'
  },
  {
    id: 'plaguicidas',
    nombre: 'Plaguicidas',
    descripcion: 'Soluciones para el control de plagas.',
    imagen: './src/assets/images/category/Cplaguicidas.png',
    path: '/categoria/plaguicidas'
  },
  {
    id: 'coadyuvantes',
    nombre: 'Coadyuvantes',
    descripcion: 'Mejore la eficacia de sus aplicaciones.',
    imagen: './src/assets/images/category/CCoadyuvantes.png',
    path: '/categoria/coadyuvantes'
  },
  {
    id: 'insumos',
    nombre: 'Insumos',
    descripcion: 'Sistemas de monitoreo avanzado.',
    imagen: './src/assets/images/category/CInsumos.png',
    path: '/categoria/insumos'
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Soluciones Agrícolas de Primera Calidad
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Descubre nuestra alta gama de productos para optimizar sus cultivos.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Categorías</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/*<section className="py-16 bg-surface-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Por qué elegir CS Agribusiness?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-surface-light rounded-lg shadow-sm">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-surface-dark text-center">
                Todos nuestros productos están certificados y cumplen con los más altos estándares de calidad.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-surface-light rounded-lg shadow-sm">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eficiencia Demostrada</h3>
              <p className="text-surface-dark text-center">
                Soluciones que han demostrado su eficacia para mejorar el rendimiento de sus cultivos.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-surface-light rounded-lg shadow-sm">
              <div className="bg-primary h-16 w-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte Técnico</h3>
              <p className="text-surface-dark text-center">
                Contamos con un equipo de expertos para asesorarle en todas sus consultas técnicas.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/categoria/plaguicidas"
              className="inline-flex items-center justify-center py-3 px-6 bg-primary text-white hover:bg-primary-dark transition-colors rounded-md font-medium"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default HomePage;