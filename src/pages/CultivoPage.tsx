// pages/CultivoPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Producto } from '../types';
import { getAllProducts } from '../services/productService';
import ProductCard from '../components/ui/ProductCard';

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const CultivoPage: React.FC = () => {
  const { cultivoId } = useParams<{ cultivoId: string }>();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const all = await getAllProducts();
        const filtered = all.filter((p) =>
          p.cultivos.some((c) => normalize(c) === normalize(cultivoId || ''))
        );
        setProductos(filtered);
      } catch (err) {
        console.error(err);
        setError('Error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [cultivoId]);

  return (
    <div>
        <section className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center py-8">
                {cultivoId}
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
        ) : productos.length === 0 ? (
            <div className="text-center py-8 text-3xl font-bold">
            <p>¡OH! Parece que no tenemos productos con este cultivo.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
            {productos.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        )}
        </div>
    </section>
  </div>
  
  );
};

export default CultivoPage;
