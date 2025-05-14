import React, { useEffect, useState } from 'react'; // Importa React y hooks
import { useParams } from 'react-router-dom'; // Importa useParams para obtener parámetros de la URL
import { Producto } from '../types'; // Importa el tipo Producto que define la estructura de un producto
import { getAllProducts, searchProductsByName } from '../services/productService'; // Importa las funciones para obtener productos y buscar por nombre de firebase
import ProductCard from '../components/ui/ProductCard'; // Importa el componente de tarjeta de producto
import {MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Importa el icono de búsqueda de Heroicons




const CultivoPage: React.FC = () => {
  const { cultivoId } = useParams<{ cultivoId: string }>(); // Obtiene el ID del cultivo de los parámetros de la URL

  //Estados
  const [productos, setProductos] = useState<Producto[]>([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]); // Estado para manejar los productos filtrados
  const [showSearch, setShowSearch] = useState(false); // Estado para manejar la visibilidad del buscador
  const [searchTerm, setSearchTerm] = useState(''); // Estado para manejar el término de búsqueda

useEffect(() => { // Efecto para cargar los productos al montar el componente
  const normalize = (text: string) => // Normaliza el texto para eliminar acentos y convertir a minúsculas
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); // Función para normalizar el texto

  const fetch = async () => { // Función para obtener los productos
    try {
      const all = await getAllProducts(); // Obtiene todos los productos de firebase
      const filtered = all.filter((p) =>
        p.cultivos.some((c) => normalize(c) === normalize(cultivoId || '')) // Filtra los productos por el ID del cultivo
      );
      setProductos(filtered); // Actualiza el estado de productos
      setFilteredProducts(filtered); // Actualiza el estado de productos filtrados
    } catch (err) {
      console.error(err);
      setError('Error al cargar los productos.');
    } finally {
      setLoading(false);
    }
  };

  fetch(); // Llama a la función para obtener los productos por ID de cultivo
}, [cultivoId]);

useEffect(() => { // Efecto para filtrar los productos cuando cambia el término de búsqueda
  const normalize = (text: string) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  if (searchTerm.trim() === '') { // Si el término de búsqueda está vacío, se muestran todos los productos
    setFilteredProducts(productos);
    return;
  }

  const filtered = productos.filter(p => // Filtra los productos por el término de búsqueda
    normalize(p.nombre).includes(normalize(searchTerm))
  );

  setFilteredProducts(filtered); // Actualiza el estado de productos filtrados
}, [searchTerm, productos]);


  return (
    <div>
        {/* Sección de encabezado */}
        <section className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center py-8">
                {cultivoId}
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
            ) : productos.length === 0 ? (
                <div className="text-center py-8 text-3xl font-bold">
                  <p>¡OH! Parece que no tenemos productos con este cultivo.</p>
                </div>
            ) : (
            <div>
              <div className="mb-4 flex justify-start items-center gap-2">
                {productos.length > 0 && (
                  <button
                    onClick={() => setShowSearch(prev => !prev)}
                    className="p-2 bg-[#BAE5FD] border border-[#017EC2] text-white rounded-full hover:bg-[#7CD1FD] transition-colors"
                    title="Buscar"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5 text-[#017EC2]" />
                  </button>
                )}

                {showSearch && (
                  <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={async (e) => {
                      const value = e.target.value;
                      setSearchTerm(value);

                      if (value.trim() === '') {
                        // Si el input queda vacío, se muestran todos los productos
                        setFilteredProducts([]);
                        return;
                      }

                      try {
                        const results = await searchProductsByName(value);
                        setFilteredProducts(results);
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
                {(searchTerm.trim()
                  ? filteredProducts
                  : productos
                ).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {searchTerm && filteredProducts.length === 0 && (
                <p className="text-center text-red-500 font-semibold mt-4">
                  No se encontraron productos para “{searchTerm}”.
                </p>
              )}


            </div>
            )}
          </div>
        </section>
    </div>
  
  );
};

export default CultivoPage;
