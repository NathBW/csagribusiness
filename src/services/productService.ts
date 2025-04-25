import { collection, getDocs, doc, getDoc, query, where, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';
import { Producto } from '../types';

// Collection reference
const productosRef = collection(db, 'productos');

// Get all products
export const getAllProducts = async (): Promise<Producto[]> => {
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ 
    id: doc.id, 
    ...doc.data() as Omit<Producto, 'id'>,
    ultimaActualizacion: doc.data().ultimaActualizacion?.toDate() || new Date()
  }));
};

// Get products by category
export const getProductsByCategory = async (category: string): Promise<Producto[]> => {
  const q = query(productosRef, where("categoria", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ 
    id: doc.id, 
    ...doc.data() as Omit<Producto, 'id'>,
    ultimaActualizacion: doc.data().ultimaActualizacion?.toDate() || new Date()
  }));
};

// Get a single product by ID
export const getProductById = async (id: string): Promise<Producto | null> => {
  const docRef = doc(db, 'productos', id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { 
      id: docSnap.id, 
      ...docSnap.data() as Omit<Producto, 'id'>,
      ultimaActualizacion: docSnap.data().ultimaActualizacion?.toDate() || new Date()
    };
  }
  
  return null;
};

// Upload an image and get its URL
export const uploadProductImage = async (file: File, productId: string): Promise<string> => {
  const storageRef = ref(storage, `productos/${productId}/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};

// Upload a PDF document and get its URL
export const uploadProductDocument = async (
  file: File, 
  productId: string, 
  type: 'fichaTecnica' | 'hojaSeguridad'
): Promise<string> => {
  const storageRef = ref(storage, `productos/${productId}/${type}/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};

// Create a new product
export const createProduct = async (product: Omit<Producto, 'id'>): Promise<string> => {
  const docRef = await addDoc(productosRef, {
    ...product,
    ultimaActualizacion: new Date()
  });
  return docRef.id;
};

// Update a product
export const updateProduct = async (id: string, product: Partial<Omit<Producto, 'id'>>): Promise<void> => {
  const docRef = doc(db, 'productos', id);
  await updateDoc(docRef, {
    ...product,
    ultimaActualizacion: new Date()
  });
};

// Delete a product
export const deleteProduct = async (id: string): Promise<void> => {
  const docRef = doc(db, 'productos', id);
  await deleteDoc(docRef);
};