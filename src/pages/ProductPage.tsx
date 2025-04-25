import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product/ProductDetails';
import { Producto } from '../types';
import { getProductById } from '../services/productService';

// Sample products data for demonstration
import { sampleProducts } from '../data/sampleData';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Producto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from Firebase
        // const data = await getProductById(productId as string);
        
        // For demo purposes, use sample data
        const data = sampleProducts.find(p => p.id === productId) || null;
        
        if (!data) {
          setError('Producto no encontrado');
        } else {
          setProduct(data);
        }
      } catch (err) {
        setError('Error al cargar el producto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (productId) {
      fetchProduct();
    }
  }, [productId]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-surface-dark mb-8">{error || 'Producto no encontrado'}</p>
        <button 
          onClick={() => window.history.back()} 
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Volver atrás
        </button>
      </div>
    );
  }
  
  return <ProductDetails product={product} />;
};

export default ProductPage;