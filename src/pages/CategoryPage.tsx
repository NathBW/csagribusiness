import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { Producto } from '../types';
import { getProductsByCategory } from '../services/productService';

// Sample products data for demonstration
import { sampleProducts } from '../data/sampleData';

const getCategoryTitle = (categoryId: string): string => {
  const categories: Record<string, string> = {
    'plaguicidas': 'Plaguicidas',
    'fertilizantes': 'Fertilizantes',
    'coadyuvantes': 'Coadyuvantes',
    'insumos': 'Insumos'
  };
  
  return categories[categoryId] || 'Productos';
};

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]);
  const [selectedCultivo, setSelectedCultivo] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from Firebase
        // const data = await getProductsByCategory(categoryId as string);
        
        // For demo purposes, use sample data filtered by category
        const data = sampleProducts.filter(p => p.categoria === categoryId);
        
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);
  
  // Get unique list of cultivos from all products
  const allCultivos = React.useMemo(() => {
    const cultivos = new Set<string>();
    products.forEach(product => {
      product.cultivos.forEach(cultivo => {
        cultivos.add(cultivo);
      });
    });
    return Array.from(cultivos);
  }, [products]);
  
  // Filter products by selected cultivo
  const handleCultivoFilter = (cultivo: string | null) => {
    setSelectedCultivo(cultivo);
    
    if (cultivo === null) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => 
          product.cultivos.includes(cultivo)
        )
      );
    }
  };
  
  return (
    <div>
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center" style={{padding: ' 2rem'}}>
            {getCategoryTitle(categoryId || '')}
          </h1>
        </div>
      </section>
      
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
              {allCultivos.length > 0 && (
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
                    
                    {allCultivos.map(cultivo => (
                      <button
                        key={cultivo}
                        onClick={() => handleCultivoFilter(cultivo)}
                        className={`px-4 py-1 rounded-full text-sm ${
                          selectedCultivo === cultivo
                            ? 'bg-secondary-dark text-white'
                            : 'bg-secondary-light text-surface-dark hover:bg-secondary border border-secondary-dark'
                        }`}
                      >
                        {cultivo}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-8">
                  <p>No se encontraron productos en esta categoría.</p>
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