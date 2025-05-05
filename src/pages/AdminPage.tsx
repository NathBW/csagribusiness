import React, { useState } from 'react';
import { createProduct } from '../services/productService';

const AdminPage: React.FC = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    categoria: 'insumos',
    imagen: '',
    fichaTecnica: '',
    hojaSeguridad: '',
    cultivos: [] as string[],
    caracteristicas: {
      composicion: '',
      ingredientesActivos: '',
      tipoFormulacion: '',
      clasificacionToxicologica: '',
      presentacion: '',
    },
    registroNacional: '',
    instruccionesUso: {
      modoUso: '',
      preparacion: '',
      precaucionAdvertencia: '',
      cuadroUso: [] as Array<{
        cultivo: string;
        dosisRecomendada: string;
        periodoCarencia: string;
        periodoReentrada: string;
        phi: string;
      }>,
    },
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    // Manejo de campos anidados
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
  
      // Validar que `parent` sea una clave válida de `product`
      if (parent in product) {
        setProduct((prev) => ({
          ...prev,
          [parent]: {
            ...(prev[parent as keyof typeof product] as Record<string, any>), // Aseguramos que sea un objeto
            [child]: value,
          },
        }));
      }
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
  
    try {

      if (!product.nombre) {
        setErrorMessage('El nombre del producto es obligatorio.');
        setLoading(false);
        return;
      }
      // Agrega el campo `ultimaActualizacion` al producto
      const productToSend = {
        ...product,
        id: product.nombre.trim().toLowerCase().replace(/\s+/g, '-'), // Convierte el nombre a un formato de ID (ejemplo: "nombre-del-producto")
        categoria: product.categoria as 'insumos' | 'plaguicidas' | 'fertilizantes' | 'coadyuvantes', // Asegura el tipo
        ultimaActualizacion: new Date(), // Establece la fecha actual
      };
  
      console.log('Datos enviados:', productToSend); // Verifica los datos en la consola
      await createProduct(productToSend); // Llama a la función `createProduct`
      setSuccessMessage('Producto creado con éxito.');
      setProduct({
        nombre: '',
        descripcion: '',
        categoria: 'insumos',
        imagen: '',
        fichaTecnica: '',
        hojaSeguridad: '',
        cultivos: [],
        caracteristicas: {
          composicion: '',
          ingredientesActivos: '',
          tipoFormulacion: '',
          clasificacionToxicologica: '',
          presentacion: '',
        },
        registroNacional: '',
        instruccionesUso: {
          modoUso: '',
          preparacion: '',
          precaucionAdvertencia: '',
          cuadroUso: [],
        },
      });
    } catch (error) {
      console.error('Error al crear el producto:', error);
      setErrorMessage('Hubo un error al crear el producto. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Crear Producto</h1>

      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Nombre del Producto</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Descripción</label>
          <textarea
            name="descripcion"
            value={product.descripcion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Categoría</label>
          <select
            name="categoria"
            value={product.categoria}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="insumos">Insumos</option>
            <option value="plaguicidas">Plaguicidas</option>
            <option value="fertilizantes">Fertilizantes</option>
            <option value="coadyuvantes">Coadyuvantes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">URL de la Imagen</label>
          <input
            type="text"
            name="imagen"
            value={product.imagen}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">URL de la Ficha Técnica</label>
          <input
            type="text"
            name="fichaTecnica"
            value={product.fichaTecnica}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">URL de la Hoja de Seguridad</label>
          <input
            type="text"
            name="hojaSeguridad"
            value={product.hojaSeguridad}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>


        <div>
  <label className="block text-sm font-medium">Cultivos</label>
  {product.cultivos.map((cultivo, index) => (
    <div key={index} className="flex items-center gap-2 mb-2">
      <input
        type="text"
        value={cultivo}
        onChange={(e) => {
          const nuevosCultivos = [...product.cultivos];
          nuevosCultivos[index] = e.target.value;
          setProduct((prev) => ({ ...prev, cultivos: nuevosCultivos }));
        }}
        className="w-full border rounded px-3 py-2"
      />
      <button
        type="button"
        onClick={() => {
          const nuevosCultivos = product.cultivos.filter((_, i) => i !== index);
          setProduct((prev) => ({ ...prev, cultivos: nuevosCultivos }));
        }}
        className="text-red-600 font-bold"
      >
        ✕
      </button>
    </div>
  ))}

  <button
    type="button"
    onClick={() => setProduct((prev) => ({ ...prev, cultivos: [...prev.cultivos, ''] }))}
    className="mt-2 text-blue-600 underline"
  >
    + Añadir Cultivo
  </button>
</div>



<div>
  <label className="block text-sm font-medium mb-2">Cuadro de Uso</label>

  {product.instruccionesUso.cuadroUso.map((fila, index) => (
    <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-3">
      <input
        type="text"
        placeholder="Cultivo"
        value={fila.cultivo}
        onChange={(e) => {
          const updated = [...product.instruccionesUso.cuadroUso];
          updated[index].cultivo = e.target.value;
          setProduct((prev) => ({
            ...prev,
            instruccionesUso: {
              ...prev.instruccionesUso,
              cuadroUso: updated,
            },
          }));
        }}
        className="border rounded px-2 py-1"
      />
      <input
        type="text"
        placeholder="Dosis Recomendada"
        value={fila.dosisRecomendada}
        onChange={(e) => {
          const updated = [...product.instruccionesUso.cuadroUso];
          updated[index].dosisRecomendada = e.target.value;
          setProduct((prev) => ({
            ...prev,
            instruccionesUso: {
              ...prev.instruccionesUso,
              cuadroUso: updated,
            },
          }));
        }}
        className="border rounded px-2 py-1"
      />
      <input
        type="text"
        placeholder="Periodo Carencia"
        value={fila.periodoCarencia}
        onChange={(e) => {
          const updated = [...product.instruccionesUso.cuadroUso];
          updated[index].periodoCarencia = e.target.value;
          setProduct((prev) => ({
            ...prev,
            instruccionesUso: {
              ...prev.instruccionesUso,
              cuadroUso: updated,
            },
          }));
        }}
        className="border rounded px-2 py-1"
      />
      <input
        type="text"
        placeholder="Periodo Reentrada"
        value={fila.periodoReentrada}
        onChange={(e) => {
          const updated = [...product.instruccionesUso.cuadroUso];
          updated[index].periodoReentrada = e.target.value;
          setProduct((prev) => ({
            ...prev,
            instruccionesUso: {
              ...prev.instruccionesUso,
              cuadroUso: updated,
            },
          }));
        }}
        className="border rounded px-2 py-1"
      />
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="PHI"
          value={fila.phi}
          onChange={(e) => {
            const updated = [...product.instruccionesUso.cuadroUso];
            updated[index].phi = e.target.value;
            setProduct((prev) => ({
              ...prev,
              instruccionesUso: {
                ...prev.instruccionesUso,
                cuadroUso: updated,
              },
            }));
          }}
          className="border rounded px-2 py-1 w-full"
        />
        <button
          type="button"
          onClick={() => {
            const updated = product.instruccionesUso.cuadroUso.filter((_, i) => i !== index);
            setProduct((prev) => ({
              ...prev,
              instruccionesUso: {
                ...prev.instruccionesUso,
                cuadroUso: updated,
              },
            }));
          }}
          className="text-red-600 font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  ))}

  <button
    type="button"
    onClick={() => {
      setProduct((prev) => ({
        ...prev,
        instruccionesUso: {
          ...prev.instruccionesUso,
          cuadroUso: [
            ...prev.instruccionesUso.cuadroUso,
            {
              cultivo: '',
              dosisRecomendada: '',
              periodoCarencia: '',
              periodoReentrada: '',
              phi: '',
            },
          ],
        },
      }));
    }}
    className="mt-2 text-blue-600 underline"
  >
    + Añadir Fila
  </button>
</div>


        <div>
          <label className="block text-sm font-medium">Composición</label>
          <input
            type="text"
            name="caracteristicas.composicion"
            value={product.caracteristicas.composicion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
        />
        </div>


        <div>
          <label className="block text-sm font-medium">Registro Nacional</label>
          <input
            type="text"
            name="registroNacional"
            value={product.registroNacional}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Ingredientes Activos</label>
          <input
            type="text"
            name="caracteristicas.ingredientesActivos"
            value={product.caracteristicas.ingredientesActivos}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>


        <div>
          <label className="block text-sm font-medium">Tipo Formulacion</label>
          <input
            type="text"
            name="caracteristicas.tipoFormulacion"
            value={product.caracteristicas.tipoFormulacion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
        />
        </div>

        <div>
          <label className="block text-sm font-medium">Clasificación Tóxicologica</label>
          <input
            type="text"
            name="caracteristicas.clasificacionToxicologica"
            value={product.caracteristicas.clasificacionToxicologica}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
        />
        </div>

        <div>
          <label className="block text-sm font-medium">Presentación</label>
          <input
            type="text"
            name="caracteristicas.presentacion"
            value={product.caracteristicas.presentacion}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
        />
        </div>

        <div>
        <label className="block text-sm font-medium">Modo de Uso</label>
        <input
          type="text"
          name="instruccionesUso.modoUso"
          value={product.instruccionesUso.modoUso}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
      />
      </div>
      
      <div>
        <label className="block text-sm font-medium">Preparacion</label>
        <input
          type="text"
          name="instruccionesUso.preparacion"
          value={product.instruccionesUso.preparacion}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
      />
      </div>


      <div>
        <label className="block text-sm font-medium">Precaución y Advertencia</label>
        <input
          type="text"
          name="instruccionesUso.precaucionAdvertencia"
          value={product.instruccionesUso.precaucionAdvertencia}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
      />
      </div>



        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Crear Producto'}
        </button>
         {/* Mensaje de éxito debajo del botón */}
            {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminPage;