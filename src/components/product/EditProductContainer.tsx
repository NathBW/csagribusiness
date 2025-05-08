// src/pages/EditProductContainer.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID dinámicamente
import { getProductById } from '../../services/productService';
import { Timestamp } from 'firebase/firestore';
import EditProduct from '../../pages/EditProduct'; // Asegúrate de ajustar la ruta si está en otra carpeta
import { Producto } from '../../types';

const EditProductContainer: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // ID de la URL
  const [product, setProduct] = useState<Producto | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;

        const fetchedProduct = await getProductById(productId);
        if (fetchedProduct) {
          const productWithDate = {
            ...fetchedProduct,
            ultimaActualizacion: fetchedProduct.ultimaActualizacion instanceof Timestamp
              ? fetchedProduct.ultimaActualizacion.toDate()
              : new Date(fetchedProduct.ultimaActualizacion),
          };
          setProduct(productWithDate);
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setErrorMessage('Hubo un error al cargar el producto.');
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="">
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
      {!product ? (
        <p className="text-gray-500">Cargando producto...</p>
      ) : (
        <EditProduct product={product} />
      )}
    </div>
  );
};

export default EditProductContainer;
