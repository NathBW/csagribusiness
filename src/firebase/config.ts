import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
//import {sampleProducts} from '../data/sampleData';



// Your web app's Firebase configuration
// Replace with your actual Firebase config
//const firebaseConfig = {
//  apiKey: "YOUR_API_KEY",
//  authDomain: "YOUR_AUTH_DOMAIN",
//  projectId: "YOUR_PROJECT_ID",
//  storageBucket: "YOUR_STORAGE_BUCKET",
//  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//  appId: "YOUR_APP_ID"
//};

const firebaseConfig = {
  apiKey: "AIzaSyClWV7EnhMsx0E-DoPMgI_P-2Al41kL50A",
  authDomain: "csagri.firebaseapp.com",
  projectId: "csagri",
  storageBucket: "csagri.firebasestorage.app",
  messagingSenderId: "402101137883",
  appId: "1:402101137883:web:59f1226c40e78b133137fe",
  measurementId: "G-6XHW95M5L1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

{/*const seed = async () => {
  console.log('Iniciando carga de datos...'); // Mensaje de depuración
  const productosRef = collection(db, 'productos');

  for (const producto of sampleProducts) {
    try {
      await addDoc(productosRef, {
        ...producto,
        ultimaActualizacion: new Date(producto.ultimaActualizacion),
      });
      console.log(`✔️ Producto "${producto.nombre}" subido correctamente.`);
    } catch (error) {
      console.error(`❌ Error al subir "${producto.nombre}":`, error);
    }
  }
  console.log('Carga de datos finalizada.');
};

seed();*/}

export { db, storage, auth };