import React, { useState, useEffect } from 'react'; // Importa React y hooks
import { useParams } from 'react-router-dom'; // Importa useParams para obtener parámetros de la URL
import ProductCard from '../components/ui/ProductCard'; // Importa el componente de tarjeta de producto
import { Producto } from '../types'; // Importa el tipo Producto que define la estructura de un producto
import { getProductsByCategory, searchProductsByName } from '../services/productService'; // Importa las funciones para obtener productos y buscar por nombre de firebase
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Importa el icono de búsqueda de Heroicons


// Función para obtener el título de la categoría basado en su ID
const getCategoryTitle = (categoryId: string): string => {
  const categories: Record<string, string> = { // Mapeo de IDs de categorías a títulos
    'plaguicidas': 'Plaguicidas',
    'fertilizantes': 'Fertilizantes',
    'coadyuvantes': 'Coadyuvantes',
    'bioinsumos': 'Bioinsumos'
  };

  // Devuelve el título correspondiente o un valor por defecto
  return categories[categoryId] || 'Productos';
};

// Componente principal de la página de categoría
const CategoryPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]);
  const [selectedCultivo, setSelectedCultivo] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

// Estado para manejar la paginación
useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!categoryId) return;

      const data = await getProductsByCategory(categoryId); // Obtener productos por categoría
      setProducts(data); // Guardar todos los productos
      setFilteredProducts(data); // Mostrar todos al inicio
    } catch (err) {
      console.error('Error al cargar productos:', err);
      setError('Error al cargar los productos.');
    } finally {
      setLoading(false);
    }
  };

  // Llamar a la función para obtener productos al cargar el componente
  fetchProducts();
}, [categoryId]);

  // Obtener lista única de cultivos
  const allCultivos = React.useMemo(() => {
    const cultivos = new Set<string>();
    products.forEach(product => { // Iterar sobre cada producto
      product.cultivos.forEach(cultivo => {
        cultivos.add(cultivo);
      });
    });
    return Array.from(cultivos);
  }, [products]);

  // Filtrar productos por cultivo seleccionado
  const handleCultivoFilter = (cultivo: string | null) => {
    setSelectedCultivo(cultivo);

    if (cultivo === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.cultivos.includes(cultivo))
      );
    }
  };

  return (
    <div>

      {/* Sección de encabezado */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center" style={{ padding: '2rem' }}>
            {getCategoryTitle(categoryId || '')}
          </h1>
        </div>
      </section>

      {/* Sección de productos por cultivos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-600">{error}</p>
            </div>
          ) : (
            <>
            
            {/* Botón para mostrar/ocultar filtros */}
            {allCultivos.length > 0  && ( 
            <div className="mb-4 text-left">
              <button
                onClick={() => setShowFilters(prev => !prev)}
                className="px-4 py-2 bg-[#BAE5FD] text-[#017EC2] rounded border border-[#017EC2] rounded-md hover:bg-[#7CD1FD] transition-colors"
              >
                {showFilters ? 'Ocultar Filtros' : 'Filtrar'}
              </button>
            </div>
            )}


            {/* Filtros de cultivo */}
            {allCultivos.length > 0 && showFilters && (
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-3">Filtrar por cultivo:</h2>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCultivoFilter(null)}
                    className={`px-4 py-1 rounded-full text-sm ${
                      selectedCultivo === null
                        ? 'bg-primary text-white'
                        : 'bg-surface-light text-surface-dark hover:bg-gray-200'
                    }`}
                    >
                    Todos
                  </button>

                  {/* Mapeo de cultivos para crear botones */}
                  {allCultivos.map(cultivo => (
                      <button // Botón para cada cultivo
                        key={cultivo}
                        onClick={() => handleCultivoFilter(cultivo)} 
                        className={`px-4 py-1 rounded-full text-sm ${
                          selectedCultivo === cultivo
                            ? 'bg-secondary-dark text-dark'
                            : 'bg-secondary-light text-surface-dark hover:bg-secondary border border-secondary-dark'
                        }`}
                      >
                        {cultivo}
                      </button>
                  ))}
                    
                </div>
              </div>
            )}

            {/* Campo de búsqueda */}
            <div className="mb-4 flex justify-start items-center gap-2">
              {/* Botón de búsqueda */}
              {allCultivos.length > 0 && (
                <button
                  onClick={() => setShowSearch(prev => !prev)}
                  className="p-2 bg-[#BAE5FD] border border-[#017EC2] text-white rounded-full hover:bg-[#7CD1FD] transition-colors"
                  title="Buscar"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 text-[#017EC2]" />
                </button>
              )}

              {/* Campo de búsqueda */}
              {showSearch && (
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  value={searchTerm}
                  onChange={async (e) => {
                    const value = e.target.value;
                    setSearchTerm(value);

                    if (value.trim() === '') {
                      // Si el input queda vacío, restauramos los productos de la categoría
                      setFilteredProducts(products);
                      return;
                    }

                    try {
                      const results = await searchProductsByName(value);
                      // Solo mantener los que coincidan con la categoría actual
                      const filteredByCategory = results.filter(p => p.categoria === categoryId);
                      setFilteredProducts(filteredByCategory);
                      setSelectedCultivo(null); // Limpia filtro de cultivo si hay búsqueda
                    } catch (err) {
                      console.error('Error al buscar productos:', err);
                      setFilteredProducts([]);
                    }
                  }}
                  className="border border-gray-300 rounded px-3 py-1"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                />
              )}
            </div>

            {/* Mapeo de productos filtrados */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-8 text-3xl font-bold">
                <p>¡OH! Parece que no tenemos productos con esta categoría.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            )}
            </>
          )}
        </div> 
      </section>

    </div>
  );
};

export default CategoryPage;