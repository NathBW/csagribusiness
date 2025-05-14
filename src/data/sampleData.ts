import { Producto } from '../types';

export const sampleProducts: Producto[] = [
  {
    id: 'plaguicida1',
    nombre: 'EcoProtect Plus',
    descripcion: 'Fungicida sistémico de amplio espectro para el control de diversas enfermedades en cultivos comerciales.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'plaguicidas',
    ultimaActualizacion: '2025-03-01',
    cultivos: ['Tomate', 'Papa', 'Cebolla'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Compuestos orgánicos y minerales de origen natural',
      ingredientesActivos: 'Prochloraz + Tricyclazol',
      tipoFormulacion: 'Suspoemulsión',
      clasificacionToxicologica: 'Clase II Moderadamente Peligroso',
      presentacion: '1L'
    },
    registroNacional: 'PL0002172023',
    instruccionesUso: {
      modoUso: 'Aplicar en forma preventiva o cuando aparezcan los primeros síntomas de la enfermedad. Realizar aplicaciones con intervalos de 7-14 días dependiendo de la presión de la enfermedad.',
      preparacion: '1. Continúe agitando hasta homogenizar la mezcla, si la cual se le debe añadir un adyuvante no iónico para garantizar un buen cubrimiento durante la aplicación.\n2. La mezcla se debe aplicar cuando esté completamente homogenizada y después de realizar el triple lavado del envase y haberlo agregado a la mezcla.',
      precaucionAdvertencia: 'Utilizar equipo de protección personal durante la manipulación y aplicación del producto. Evitar el contacto con piel y ojos. No comer, beber o fumar durante la aplicación del producto.',
      cuadroUso: [
        {
          cultivo: 'Clavel',
          dosisRecomendada: '0.4 L/Ha.',
          periodoCarencia: '14 días.',
          periodoReentrada: '12 horas.',
          phi: 'N/A'
        },
        {
          cultivo: 'Rosa',
          dosisRecomendada: '1.0 L/Ha.',
          periodoCarencia: '20 días.',
          periodoReentrada: '6 horas.',
          phi: '15 días'
        }
      ]
    }
  },
  {
    id: 'plaguicida2',
    nombre: 'BioDefense',
    descripcion: 'Insecticida biológico para el control de insectos chupadores y masticadores en diversos cultivos.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'plaguicidas',
    ultimaActualizacion: '2025-02-15',
    cultivos: ['Maíz', 'Frijol', 'Arroz'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Extractos vegetales y microorganismos benéficos',
      ingredientesActivos: 'Beauveria bassiana + Metarhizium anisopliae',
      tipoFormulacion: 'Polvo mojable',
      clasificacionToxicologica: 'Clase IV Ligeramente Tóxico',
      presentacion: '500g'
    },
    registroNacional: 'PL0003182023',
    instruccionesUso: {
      modoUso: 'Aplicar directamente sobre el follaje cuando se observe la presencia de insectos plaga. Realizar aplicaciones cada 7-10 días según sea necesario.',
      preparacion: '1. Mezclar la dosis recomendada en un recipiente pequeño con agua. Agitar hasta formar una suspensión homogénea.\n2. Verter la mezcla en el tanque de aplicación y completar con agua hasta el volumen requerido.',
      precaucionAdvertencia: 'Aunque es un producto biológico, se recomienda usar equipo de protección durante su aplicación. Mantener fuera del alcance de los niños y animales domésticos.',
      cuadroUso: [
        {
          cultivo: 'Maíz',
          dosisRecomendada: '500g/Ha.',
          periodoCarencia: '0 días.',
          periodoReentrada: '4 horas.',
          phi: 'N/A'
        },
        {
          cultivo: 'Frijol',
          dosisRecomendada: '400g/Ha.',
          periodoCarencia: '0 días.',
          periodoReentrada: '4 horas.',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'fertilizante1',
    nombre: 'NutriGrow Complete',
    descripcion: 'Fertilizante completo con macro y micronutrientes esenciales para optimizar el desarrollo y producción de cultivos.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'fertilizantes',
    ultimaActualizacion: '2025-01-20',
    cultivos: ['Tomate', 'Pimiento', 'Pepino', 'Melón'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'N-P-K (20-20-20) + Micronutrientes',
      ingredientesActivos: 'Nitrógeno, Fósforo, Potasio, Magnesio, Zinc, Hierro, Boro',
      tipoFormulacion: 'Granulado soluble',
      clasificacionToxicologica: 'No clasificado',
      presentacion: '25Kg'
    },
    registroNacional: 'FE0004592023',
    instruccionesUso: {
      modoUso: 'Aplicar al suelo directamente o a través del sistema de riego. También puede aplicarse foliarmente en diluciones adecuadas.',
      preparacion: '1. Para aplicación foliar, disolver la dosis recomendada en agua limpia y agitar hasta obtener una solución homogénea.\n2. Para fertirrigación, disolver en el tanque de inyección según las recomendaciones técnicas para cada cultivo.',
      precaucionAdvertencia: 'Almacenar en lugar fresco y seco. Evitar el contacto prolongado con la piel. Usar guantes durante su manipulación.',
      cuadroUso: [
        {
          cultivo: 'Tomate',
          dosisRecomendada: '2-3 kg/Ha.',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        },
        {
          cultivo: 'Pimiento',
          dosisRecomendada: '2-2.5 kg/Ha.',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'fertilizante2',
    nombre: 'OrganicBoost',
    descripcion: 'Fertilizante orgánico para mejorar la estructura del suelo y proporcionar nutrientes de liberación gradual.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'fertilizantes',
    ultimaActualizacion: '2025-02-05',
    cultivos: ['Aguacate', 'Cítricos', 'Banano'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Materia orgánica, ácidos húmicos y fúlvicos',
      ingredientesActivos: 'Extractos vegetales fermentados, compost maduro',
      tipoFormulacion: 'Granulado',
      clasificacionToxicologica: 'No clasificado',
      presentacion: '50Kg'
    },
    registroNacional: 'FE0005862023',
    instruccionesUso: {
      modoUso: 'Aplicar directamente al suelo alrededor de la zona radicular de la planta. Incorporar ligeramente y regar después de la aplicación.',
      preparacion: '1. El producto está listo para usar, no requiere preparación previa.\n2. Distribuir uniformemente en el área de aplicación según la dosis recomendada.',
      precaucionAdvertencia: 'Producto no tóxico. Se recomienda lavarse las manos después de su manipulación.',
      cuadroUso: [
        {
          cultivo: 'Aguacate',
          dosisRecomendada: '500g-1kg/planta',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        },
        {
          cultivo: 'Cítricos',
          dosisRecomendada: '400-800g/planta',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'coadyuvante1',
    nombre: 'AquaStick Pro',
    descripcion: 'Coadyuvante y adherente que mejora la efectividad de insecticidas, fungicidas y herbicidas.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'coadyuvantes',
    ultimaActualizacion: '2025-01-10',
    cultivos: ['Todos los cultivos'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Alcohol etoxilado, silicona organofuncional',
      ingredientesActivos: 'Polímeros sintéticos adherentes',
      tipoFormulacion: 'Concentrado emulsionable',
      clasificacionToxicologica: 'Clase III Ligeramente Peligroso',
      presentacion: '1L'
    },
    registroNacional: 'CO0001762023',
    instruccionesUso: {
      modoUso: 'Añadir al tanque de mezcla después de los plaguicidas y antes de completar el volumen de agua. Agitar constantemente.',
      preparacion: '1. Añadir la dosis recomendada de AquaStick Pro al tanque cuando esté lleno al 75% con agua.\n2. Completar el volumen de agua necesario y mantener la agitación durante la aplicación.',
      precaucionAdvertencia: 'Evitar el contacto con los ojos. En caso de contacto, lavar con abundante agua. No ingerir.',
      cuadroUso: [
        {
          cultivo: 'Todos los cultivos',
          dosisRecomendada: '0.5-1.0 mL/L agua',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'coadyuvante2',
    nombre: 'pHBalance',
    descripcion: 'Regulador de pH para optimizar la eficacia de agroquímicos sensibles a condiciones ácidas o alcalinas.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'coadyuvantes',
    ultimaActualizacion: '2025-02-25',
    cultivos: ['Todos los cultivos'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Ácidos orgánicos tamponantes',
      ingredientesActivos: 'Ácido cítrico, ácido fosfórico',
      tipoFormulacion: 'Líquido soluble',
      clasificacionToxicologica: 'Clase III Ligeramente Peligroso',
      presentacion: '500mL'
    },
    registroNacional: 'CO0002352023',
    instruccionesUso: {
      modoUso: 'Añadir al agua antes de incorporar los agroquímicos. Verificar el pH resultante con papel indicador o medidor de pH.',
      preparacion: '1. Añadir la dosis inicial recomendada y medir el pH.\n2. Ajustar la dosis según sea necesario para alcanzar el pH deseado (generalmente entre 5.5 y 6.5).',
      precaucionAdvertencia: 'Producto corrosivo, manipular con guantes. Evitar el contacto con piel y ojos. En caso de contacto, lavar con abundante agua.',
      cuadroUso: [
        {
          cultivo: 'Todos los cultivos',
          dosisRecomendada: '0.5-2.0 mL/L agua',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'insumo1',
    nombre: 'SoilSense Pro',
    descripcion: 'Sistema de monitoreo de humedad y nutrientes del suelo con tecnología IoT para optimizar el riego y la fertilización.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'bioinsumos',
    ultimaActualizacion: '2025-03-10',
    cultivos: ['Todos los cultivos'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Sensores electrónicos, transmisores de datos',
      ingredientesActivos: 'N/A',
      tipoFormulacion: 'Dispositivo electrónico',
      clasificacionToxicologica: 'No clasificado',
      presentacion: 'Kit de 5 sensores + central receptora'
    },
    registroNacional: 'IN0009872023',
    instruccionesUso: {
      modoUso: 'Instalar los sensores a la profundidad recomendada según el cultivo. Conectar la central receptora a la red eléctrica y configurar según las instrucciones del manual.',
      preparacion: '1. Cargar completamente los sensores antes de su instalación.\n2. Configurar la aplicación móvil para recibir los datos y establecer los parámetros de alerta.',
      precaucionAdvertencia: 'Proteger los componentes electrónicos de la lluvia directa. Instalar la central receptora en un lugar seco y protegido.',
      cuadroUso: [
        {
          cultivo: 'Todos los cultivos',
          dosisRecomendada: '1 sensor cada 500-1000m²',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  },
  {
    id: 'insumo2',
    nombre: 'BioTrap System',
    descripcion: 'Sistema de trampas con feromonas para monitoreo y control de plagas en cultivos comerciales.',
    imagen: '/../src/assets/images/products/producto1.png',
    categoria: 'bioinsumos',
    ultimaActualizacion: '2025-02-20',
    cultivos: ['Tomate', 'Pimiento', 'Cebolla', 'Maíz'],
    fichaTecnica: '#',
    hojaSeguridad: '#',
    caracteristicas: {
      composicion: 'Trampas de plástico, difusores de feromonas',
      ingredientesActivos: 'Feromonas sintéticas específicas',
      tipoFormulacion: 'Dispositivo + atrayente',
      clasificacionToxicologica: 'No clasificado',
      presentacion: 'Kit de 10 trampas + 10 difusores'
    },
    registroNacional: 'IN0008562023',
    instruccionesUso: {
      modoUso: 'Instalar las trampas al inicio del cultivo, distribuidas uniformemente. Reemplazar los difusores cada 4-6 semanas según las condiciones ambientales.',
      preparacion: '1. Armar las trampas según el manual de instrucciones.\n2. Colocar el difusor de feromonas en el lugar indicado de la trampa.',
      precaucionAdvertencia: 'Manipular los difusores con guantes para evitar contaminarlos con olores que puedan reducir su eficacia.',
      cuadroUso: [
        {
          cultivo: 'Tomate',
          dosisRecomendada: '3-4 trampas/hectárea',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        },
        {
          cultivo: 'Maíz',
          dosisRecomendada: '2-3 trampas/hectárea',
          periodoCarencia: 'N/A',
          periodoReentrada: 'N/A',
          phi: 'N/A'
        }
      ]
    }
  }
];