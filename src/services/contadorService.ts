// services/contadorService.ts
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const getMesActual = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`; // e.g. "2024-05"
};

export const incrementarConteoFichaTecnica = async (productId: string) => {
  const mesActual = getMesActual();
  const docRef = doc(db, 'contadorDescargas', productId);
  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    const data = snapshot.data();
    if (data.mes === mesActual) {
      await updateDoc(docRef, {
        conteo: (data.conteo || 0) + 1,
        ultimaActualizacion: serverTimestamp(),
      });
    } else {
      // Nuevo mes, reiniciar conteo
      await updateDoc(docRef, {
        mes: mesActual,
        conteo: 1,
        ultimaActualizacion: serverTimestamp(),
      });
    }
  } else {
    // Documento nuevo
    await setDoc(docRef, {
      mes: mesActual,
      conteo: 1,
      ultimaActualizacion: serverTimestamp(),
    });
  }
};
