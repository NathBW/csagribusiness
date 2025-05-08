import { collection, getDocs, doc, getDoc, setDoc, query, where, addDoc, updateDoc, deleteDoc, serverTimestamp, QueryDocumentSnapshot, limit, orderBy, startAfter  } from 'firebase/firestore';
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
{/*export const getProductById = async (id: string): Promise<Producto | null> => {
  try {
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Producto;
    } else {
      console.error('No se encontró el producto con ID:', id);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};*/}

export const getProductById = async (id: string): Promise<Producto | null> => {
  try {
    const productosRef = collection(db, 'productos');
    const q = query(productosRef, where('id', '==', id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        ultimaActualizacion: data.ultimaActualizacion?.toDate() || new Date(), // Convierte el timestamp a Date
      } as Producto;
    } else {
      console.error('No se encontró el producto con ID:', id);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};

// Get paginated products
export const getPaginatedProducts = async (
  lastDoc: QueryDocumentSnapshot | null = null,
  pageSize: number = 10
): Promise<{ products: Producto[]; lastVisible: QueryDocumentSnapshot | null }> => {
  let q = query(productosRef, orderBy('nombre'), limit(pageSize));

  if (lastDoc) {
    q = query(productosRef, orderBy('nombre'), startAfter(lastDoc), limit(pageSize));
  }

  const snapshot = await getDocs(q);
  const products = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<Producto, 'id'>,
    ultimaActualizacion: doc.data().ultimaActualizacion?.toDate() || new Date(),
  }));

  const lastVisible = snapshot.docs[snapshot.docs.length - 1] || null;

  return { products, lastVisible };
};

// Search products by name
export const searchProductsByName = async (searchTerm: string): Promise<Producto[]> => {
  const q = query(productosRef, where('nombre', '>=', searchTerm), where('nombre', '<=', searchTerm + '\uf8ff'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<Producto, 'id'>,
    ultimaActualizacion: doc.data().ultimaActualizacion?.toDate() || new Date(),
  }));
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

export const createProduct = async (product: Producto): Promise<string> => {
  const docRef = doc(db, 'productos', product.id); // Usa el ID personalizado
  await setDoc(docRef, {
    ...product,
    ultimaActualizacion: new Date(),
  });
  return product.id;
};
//export const createProduct = async (product: Omit<Producto, 'id'>): Promise<string> => {
//  const defaultValues = {
//    descripcion: 'Descripción por defecto',
//    imagen: '',
//    categoria: 'insumos',
//    ultimaActualizacion: new Date(),
//    cultivos: [],
//    fichaTecnica: '',
//    hojaSeguridad: '',
//    caracteristicas: {
//      composicion: '',
//      ingredientesActivos: '',
//      tipoFormulacion: '',
//      clasificacionToxicologica: '',
//      presentacion: '',
//    },
//    registroNacional: '',
//    instruccionesUso: {
//      modoUso: '',
//      preparacion: '',
//      precaucionAdvertencia: '',
//      cuadroUso: [],
//    },
//  };

//  const docRef = await addDoc(productosRef, {
//    ...defaultValues, // Aplica valores por defecto
//    ...product, // Sobrescribe con los valores proporcionados
//    ultimaActualizacion: new Date(), // Actualiza la fecha
//  });

//  return docRef.id;
//};


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

