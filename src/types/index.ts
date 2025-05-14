import { Timestamp } from 'firebase/firestore';

export type Cultivo = string;

export type Caracteristicas = {
  composicion: string;
  ingredientesActivos: string;
  tipoFormulacion: string;
  clasificacionToxicologica: string;
  presentacion: string;
};

export type CuadroUso = {
  cultivo: string;
  dosisRecomendada: string;
  periodoCarencia: string;
  periodoReentrada: string;
  phi: string;
};

export type InstruccionesUso = {
  modoUso: string;
  preparacion: string;
  precaucionAdvertencia: string;
  cuadroUso: CuadroUso[];
};

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  categoria: 'plaguicidas' | 'fertilizantes' | 'coadyuvantes' | 'bioinsumos';
  ultimaActualizacion: Date | string | Timestamp;
  cultivos: Cultivo[];
  fichaTecnica: string;
  hojaSeguridad: string;
  caracteristicas: Caracteristicas;
  registroNacional: string;
  instruccionesUso: InstruccionesUso;
  compra: string;
}

export interface CategoriaInfo {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  path: string;
}