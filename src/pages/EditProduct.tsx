import React, { useState } from 'react'; // Importa React y useState
import { Producto } from '../types/index'; // Importa la base de datos de productos creada desde el archivo index.ts
import { formatDate } from '../utils/helpers'; // Importa la función de formateo de fecha de helpers que ayuda a formatear la fecha
import { updateProduct } from '../services/productService'; // Importa la función de actualización de productos para actualizar los productos a firebase
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'; // Importa los iconos de Heroicons para la X (borrar) y para volver atrás
import { uploadFileToCloudinary } from '../data/uploadFile' // Importa la función de carga de archivos a Cloudinary para subir imágenes


interface ProductDetailsProps { // Se define la interfaz para las propiedades del componente
  product: Producto; // Propiedad de producto que es de tipo Producto para recibir los datos del producto
}


const EditProduct: React.FC<ProductDetailsProps> = ({ product }) => { // Se define el componente funcional EditProduct
  const [formData, setFormData] = useState(product); // Se inicializa el estado del formulario con los datos del producto

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Función para manejar los cambios en los inputs
    const { name, value } = e.target;


    if (name in formData.caracteristicas) {  // Verificamos si 'name' pertenece a 'caracteristicas' antes de modificarlo
      setFormData(prev => ({ // Actualizamos el estado del formulario
        ...prev,
        caracteristicas: {
          ...prev.caracteristicas, // Mantenemos las características existentes
          [name]: value, // Actualizamos la característica específica
        }
      }));
    } else {
      // Si no es una clave de 'caracteristicas', lo actualizamos normalmente
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = async () => { // Función para guardar los cambios
    try {
      await updateProduct(product.id, { ...formData, ultimaActualizacion: new Date() }); // Actualizamos el producto en Firebase
      alert('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => { // Función para manejar la carga de imágenes
    const file = e.target.files?.[0]; // Obtenemos el primer archivo del input
    if (!file) return;
  
    try {
      const url = await uploadFileToCloudinary(file); // Subimos la imagen a Cloudinary
      setFormData((prev) => ({ ...prev, imagen: url }));
    } catch (err) {
      console.error('Error subiendo imagen:', err);
    }
  };
  
  
  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <button
            onClick={() => window.history.back()}
            className="self-start mb-4 md:mb-0 mr-10 text-primary hover:text-[#FDDBAB] transition-colors"
          >
            <div className="bg-[#BAE5FD] border border-[#017EC2] rounded-full p-1 hover:bg-[#7CD1FD] transition-colors">
              <ArrowLeftIcon className="h-5 w-5 text-[#017EC2]" />
            </div>        
          </button>

          <div className="flex-1 flex flex-col md:flex-row items-center md:space-x-12">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img
                src={formData.imagen}
                alt={formData.nombre}
                className="w-full h-64 object-contain bg-white rounded-lg p-4"
              />
              <input
                type="file"
                accept="image/*"
                id='fileUpload'
                onChange={handleImageUpload}
                className="hidden"
              />
                <label
                  htmlFor="fileUpload"
                  className=" mt-2 text-sm inline-block bg-blue-300 text-surface-dark border border-blue-700 px-4 py-2 rounded-md cursor-pointer text-center hover:bg-blue-500 hover:text-surface-light transition-colors"
                >
                  Cambiar Imagen
                </label>
            </div>

            <div className="w-full md:w-2/3">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="text-black/90 text-3xl font-bold mb-4 w-full border border-gray-300 p-2 rounded "
                style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

              />
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                className="text-black/90 mb-4 w-full border border-gray-300 p-2 rounded"
                style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

              />
            </div>
            
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 pt-8">

        {/* Columna izquierda*/}
        <div className="md:col-span-1 space-y-6">
          <p className="text-sm text-surface-dark">
            Última Actualización: {formatDate(formData.ultimaActualizacion)}
          </p>

          {/* Información Técnica */}
          <div className="bg-[#F5F6F5] p-6 rounded-lg shadow-sm">
            <h2 className="text-center text-xl font-bold mb-4 border-b pb-2 text-surface-dark">Información Técnica</h2>
            <div className="space-y-4">
              <div>
                <span className="text-surface-dark font-bold mb-0">Hoja de Seguridad:</span>
                <input
                  type="text"
                  name="hojaSeguridad"
                  value={formData.hojaSeguridad}
                  onChange={handleChange}
                  className="text-link hover:underline flex items-center w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                />
              </div>
              <div>
                <span className="text-surface-dark font-bold mb-1">Ficha Técnica:</span>
                <input
                  type="text"
                  name="fichaTecnica"
                  value={formData.fichaTecnica}
                  onChange={handleChange}
                  className="text-link hover:underline flex items-center w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                />
              </div>
              <div>
                <span className="text-surface-dark font-bold mb-1">Enlace Compra:</span>
                <input
                  type="text"
                  name="compra"
                  value={formData.compra}
                  onChange={handleChange}
                  className="text-link hover:underline flex items-center w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                />
              </div>

            </div>
          </div>

          {/* Cultivos */}
          <div className="bg-[#F5F6F5] p-6 rounded-lg shadow-sm">
              <label className="block text-sm font-medium">Cultivos</label>
              {formData.cultivos?.map((cultivo, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={cultivo}
                    onChange={(e) => {
                      const nuevosCultivos = [...formData.cultivos];
                      nuevosCultivos[index] = e.target.value;
                      setFormData((prev) => ({ ...prev, cultivos: nuevosCultivos }));
                    }}
                    className="w-full border rounded px-3 py-2"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const nuevosCultivos = formData.cultivos.filter((_, i) => i !== index);
                      setFormData((prev) => ({ ...prev, cultivos: nuevosCultivos }));
                    }}
                    className="text-red-600 font-bold"
                  >
                   <XMarkIcon className="text-accent rounded-full bg-red-300 border border-red-700 text-red-700 h-5 w-5 hover:bg-red-500 transition-colors" ></XMarkIcon>  
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => {
                  const nuevosCultivos = [...formData.cultivos, ''];
                  setFormData((prev) => ({ ...prev, cultivos: nuevosCultivos }));
                }}
                className="mt-2 text-blue-500 underline hover:text-blue-700 transition-colors"
              >
                + Añadir Cultivo
              </button>
          </div>

        </div>

        {/* Columna derecha */}
        <div className="md:col-span-2">

          {/* Contenedor principal */}
          <div className="bg-[#F5F6F5] p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-center text-2xl font-bold text-surface-dark mb-6">Características</h2>

            {/* Caja verde */}
            <div className="bg-primary text-surface-white p-6 rounded-lg space-y-3 text-sm">
              <h3 className="text-center text-lg font-bold mb-4">Composición</h3>

              <div> {/* Caja verde e Ingredientes Activos */}
                <span className="font-semibold">Ingredientes Activos:</span>
                <input
                  type="text"
                  name="ingredientesActivos"
                  value={formData.caracteristicas.ingredientesActivos}
                  onChange={handleChange}
                  className="text-black/90 w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                />
              </div>

              <div> {/* Caja verde y Tipo de Formulación */}
                <span className="font-semibold">Tipo de Formulación:</span>
                <input
                  type="text"
                  name="tipoFormulacion"
                  value={formData.caracteristicas.tipoFormulacion}
                  onChange={handleChange}
                  className="text-black/90 w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                />
              </div>

              <div> {/* Caja verde y Clasificación Tóxicologica */}
                <span className="font-semibold">Clasificación Tóxicologica</span>
                <input
                  type="text"
                  name="clasificacionToxicologica"
                  value={formData.caracteristicas.clasificacionToxicologica}
                  onChange={handleChange}
                  className="text-black/90 w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                />
              </div>

              <div> {/* Caja verde y Presentación */}
                <span className="font-semibold">Presentación</span>
                <input
                  type="text"
                  name="presentacion"
                  value={formData.caracteristicas.presentacion}
                  onChange={handleChange}
                  className="text-black/90 w-full border border-gray-300 p-2 rounded"
                  style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                />
              </div>

            </div>

            <div className="mt-4"> {/* Caja gris y Registro Nacional */}
              <span className="font-semibold">Registro Nacional</span>
              <input
                type="text"
                name="registroNacional"
                value={formData.registroNacional}
                onChange={handleChange}
                className="text-black/90 w-full border border-gray-300 p-2 rounded"
                style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

              />
            </div>
          </div>

          
        </div>
        
      </div>
      
      <div className="space-y-8 bg-primary">
        <div className="container mx-auto px-4 p-8 ">
          <h2 className="text-center text-2xl font-bold text-surface-white mb-6">Instrucciones de Uso</h2>
                <div> {/* Sección de instrucciones de uso */}
                  <span className="font-semibold text-surface-white">Modo de Uso</span>
                  <input
                    type="text"
                    name="modoUso"
                    value={formData.instruccionesUso.modoUso}
                    onChange={(e) => { // Actualizamos el modo de uso
                      setFormData((prev) => ({
                        ...prev,
                        instruccionesUso: {
                          ...prev.instruccionesUso,
                          modoUso: e.target.value,
                        },
                      }));
                    }}
                    className="text-black/90 w-full border border-gray-300 p-2 rounded mb-4"
                    style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  />
                </div>

                <div> {/* Sección de cuadro de uso */}
                    <label className="semibold text-surface-white">Cuadro de Uso</label>
                    {formData.instruccionesUso?.cuadroUso?.map((fila, index) => (
                      // Se mapea cada fila del cuadro de uso
                      <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4"
                      >
                        
                        {['cultivo', 'dosisRecomendada', 'periodoCarencia', 'periodoReentrada', 'phi'].map((campo, i) => (
                          <input
                            key={i}
                            type="text"
                            placeholder={campo}
                            value={(fila as any)[campo]}
                            onChange={(e) => { // Actualizamos el campo correspondiente
                              const updated = [...(formData.instruccionesUso?.cuadroUso || [])];
                              updated[index] = { ...updated[index], [campo]: e.target.value };
                              setFormData(prev => ({
                                ...prev,
                                instruccionesUso: {
                                  ...prev.instruccionesUso,
                                  cuadroUso: updated,
                                },
                              }));
                            }}
                            className="border rounded px-2 py-1"
                            style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                          />
                        ))}
                        
                        <button
                          type="button"
                          onClick={() => {
                            const updated = formData.instruccionesUso?.cuadroUso?.filter((_, i) => i !== index) || [];
                            setFormData(prev => ({ // Actualizamos el estado del formulario
                              ...prev,
                              instruccionesUso: {
                                ...prev.instruccionesUso,
                                cuadroUso: updated,
                              },
                            }));
                          }}
                          className="text-red-600 font-bold"
                        >
                            <XMarkIcon className="text-accent rounded-full bg-red-300 border border-red-700 text-red-700 h-5 w-5 hover:bg-red-500 transition-colors" ></XMarkIcon>
                            </button>

                      </div>
                      
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                      const nuevaFila = {
                        cultivo: '',
                        dosisRecomendada: '',
                        periodoCarencia: '',
                        periodoReentrada: '',
                        phi: '',
                        };
                        setFormData(prev => ({ // Actualizamos el estado del formulario
                          ...prev,
                          instruccionesUso: {
                            ...prev.instruccionesUso,
                            cuadroUso: [...(prev.instruccionesUso?.cuadroUso || []), nuevaFila],
                          },
                        }));
                      }}
                      className="mt-2 text-blue-300 underline mb-4 hover:text-blue-500 transition-colors"
                    >
                      + Añadir Fila
                    </button>
                </div>

                <div> {/* Sección de preparación */}
                  <span className="font-semibold text-surface-white">Preparación</span>
                  <input
                    type="text"
                    name="preparacion"
                    value={formData.instruccionesUso.preparacion}
                    onChange={(e) => {
                      setFormData((prev) => ({ // Actualizamos la preparación
                        ...prev,
                        instruccionesUso: {
                          ...prev.instruccionesUso,
                          preparacion: e.target.value,
                        },
                      }));
                    }}
                    className="text-black/90 w-full border border-gray-300 p-2 rounded mb-4"
                    style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                  />
                </div>

                <div> {/* Sección de precaución y advertencia */}
                  <span className="font-semibold text-surface-white">Precaución y Advertencia</span>
                  <input
                    type="text"
                    name="precaucionAdvertencia"
                    value={formData.instruccionesUso.precaucionAdvertencia}
                    onChange={(e) => {
                      setFormData((prev) => ({ // Actualizamos la precaución y advertencia
                        ...prev,
                        instruccionesUso: {
                          ...prev.instruccionesUso,
                          precaucionAdvertencia: e.target.value,
                        },
                      }));
                    }}
                    className="text-black/90 w-full border border-gray-300 p-2 rounded mb-4"
                    style={{ boxShadow: 'inset 2px 2px 6px rgba(0, 0, 0, 0.3)' }}

                  />
                </div>

                <div className="pt-4">
                  <button
                    className="w-full py-2 px-4 bg-accent-light text-surface-dark border border-accent hover:bg-accent hover:text-white transition-colors rounded-md font-medium"
                    onClick={handleSave}
                  >
                    Guardar Cambios
                  </button>
                </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
