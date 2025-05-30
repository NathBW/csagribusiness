import React from 'react'; // Importa React
import CategoryCard from '../components/ui/CategoryCard'; // Importa la tarjeta de categoría
import { CategoriaInfo } from '../types'; // Importa el tipo la información de la categoría
import HeroBanner from '../components/layout/Banner'; // Importa el banner de héroe
import ferticate from '../assets/images/category/Cfertilizante.png'
import plaguicar from '../assets/images/category/Cplaguicidas.png'
import coadyucar from '../assets/images/category/CCoadyuvantes.png'
import bioinsucar from '../assets/images/category/CInsumos.png'

// Define la información de las categorías
const categories: CategoriaInfo[] = [
  {
    id: 'fertilizantes',
    nombre: 'Fertilizante',
    descripcion: 'Nutrientes esenciales para sus cultivos.',
    imagen: ferticate,
    path: '/categoria/fertilizantes'
  },
  {
    id: 'plaguicidas',
    nombre: 'Plaguicidas',
    descripcion: 'Soluciones para el control de plagas.',
    imagen: plaguicar,
    path: '/categoria/plaguicidas'
  },
  {
    id: 'coadyuvantes',
    nombre: 'Coadyuvantes',
    descripcion: 'Mejore la eficacia de sus aplicaciones.',
    imagen: coadyucar,
    path: '/categoria/coadyuvantes'
  },
  {
    id: 'bioinsumos',
    nombre: 'Bioinsumos',
    descripcion: 'Sistemas de monitoreo para plantas.',
    imagen: bioinsucar,
    path: '/categoria/bioinsumos'
  }
  // Se pueden agregar más categorías aquí
];



const HomePage: React.FC = () => {
  
  return (
    <div>

      {/* Hero Section */}
      <HeroBanner />

      {/* Categories Section */}  
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
    </div>
  );
};

export default HomePage; // Exporta la página HomePage