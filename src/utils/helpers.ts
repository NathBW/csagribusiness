/**
 * Format a date string or Date object to a localized string
 */
{/*export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};ACCAAAAA*/}

export const formatDate = (dateObj: any): string => {
  if (dateObj instanceof Date) {
    return dateObj.toLocaleDateString();
  } else if (dateObj?.toDate) {
    // Convierte un Timestamp de Firebase a un objeto Date
    return dateObj.toDate().toLocaleDateString();
  } else {
    console.error('El valor proporcionado no es una fecha válida:', dateObj);
    return 'Fecha no disponible';
  }
};

/**
 * Truncate text to a specific length and add ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generate a random ID for demo purposes
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Convert category ID to display name
 */
export const getCategoryDisplayName = (categoryId: string): string => {
  const categories: Record<string, string> = {
    'plaguicidas': 'Plaguicidas',
    'fertilizantes': 'Fertilizantes',
    'coadyuvantes': 'Coadyuvantes',
    'bioinsumos': 'Bioinsumos'
  };
  
  return categories[categoryId] || categoryId;
};


export function normalize(nombre: string): string {
  return nombre
    .normalize('NFD')      // normaliza caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '')        // más limpieza
    .toLowerCase()
    .replace(/\s+/g, '-')                   // espacios a guiones
    .replace(/[^\w\-]/g, '')                // quita símbolos raros
    .trim();
}
