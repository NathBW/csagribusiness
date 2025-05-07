import React from 'react';
import { Producto } from '../../types';
import { formatDate } from '../../utils/helpers';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProductDetailsProps {
  product: Producto;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <button 
            onClick={() => window.history.back()} 
            className="self-start mb-4 md:mb-0 mr-10 text-primary hover:text-[#FDDBAB] transition-colors"
          >
            <ArrowBackIosIcon sx={{backgroundColor:"#FDDBAB", borderRadius:"20px", paddingLeft: "7px", border: "1px solid #F6811F", ":hover" : {backgroundColor: "#F6811F"}}} /> Volver
                  
          </button>
          
          <div className="flex-1 flex flex-col md:flex-row items-center md:space-x-12">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <img 
                src={product.imagen} 
                alt={product.nombre} 
                className="w-full h-64 object-contain bg-white rounded-lg p-4"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{product.nombre}</h1>
              <p className="text-white/90 mb-4">{product.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-screen-lg px-4 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 pt-8">
    
  {/* Left Column */}
  <div className="md:col-span-1 space-y-6">
    {/* Última actualización */}
    <p className="text-sm text-surface-dark">
      Última Actualización: {formatDate(product.ultimaActualizacion)}
    </p>

    {/* Información Técnica */}
    <div className="bg-[#F5F6F5] p-6 rounded-lg shadow-sm">
      <h2 className="text-center text-xl font-bold mb-4 border-b pb-2 text-surface-dark">Información Técnica</h2>
      <div className="space-y-4">
        <div>
        <span className="text-surface-dark font-bold mb-0">Hoja de Seguridad:</span>
          <a
            href={product.hojaSeguridad}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center"
          >
            producto_hojadeseguridad.pdf
            {/*<svg
              className="w-8 h-8 ml-1 flex-shrink-0 text-secondary stroke-secondary-dark stroke-1 hover:text-secondary-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a 1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>*/}
          </a>
        </div>
        <div>
        <span className="text-surface-dark font-bold mb-1">Ficha Técnica:</span>
          <a
            href={product.fichaTecnica}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline flex items-center"
          >
            producto_fichatecnica.pdf
            {/*<svg
              className="w-8 h-8 ml-1 flex-shrink-0 text-secondary stroke-secondary-dark stroke-1 hover:text-secondary-dark"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a 1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>*/}
          </a>
        </div>
        <div className="pt-4">
          <button className="w-full py-2 px-4 bg-accent-light text-surface-dark border border-accent hover:bg-accent hover:text-white transition-colors rounded-md font-medium">
            Comprar
          </button>
        </div>
      </div>
    </div>

    {/* Cultivos */}
    <div className="bg-[#F5F6F5] text-surface-dark p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">Cultivos</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {product.cultivos.map((cultivo, index) => (
          <span
            key={index}
            className="inline-block bg-secondary-dark text-surface-dark text-sm font-semibold rounded-full px-4 py-1 shadow-sm"
          >
            {cultivo}
          </span>
        ))}
      </div>
    </div>
  </div>
        
        {/* Right Column */}
        {/*<div className="md:col-span-2">
          <div className="bg-surface-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Características</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-primary text-white p-5 rounded-lg">
              <div>
                <h3 className="font-medium mb-1">Composición</h3>
                <p>{product.caracteristicas.composicion}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Ingredientes Activos</h3>
                <p>{product.caracteristicas.ingredientesActivos}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Tipo de Formulación</h3>
                <p>{product.caracteristicas.tipoFormulacion}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Clasificación Toxicológica</h3>
                <p>{product.caracteristicas.clasificacionToxicologica}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Presentación</h3>
                <p>{product.caracteristicas.presentacion}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="font-medium">Registro Nacional No.</p>
              <p>{product.registroNacional}</p>
            </div>
          </div>
          
          <div className="bg-surface-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-4">Cultivos</h2>
            
            <div className="flex flex-wrap gap-2">
              {product.cultivos.map((cultivo, index) => (
                <span 
                  key={index}
                  className="inline-block bg-secondary-dark text-white text-sm rounded-full px-4 py-1"
                >
                  {cultivo}
                </span>
              ))}
            </div>
          </div>
        </div>g*/}

        
        <div className="md:col-span-2">
  {/* Contenedor principal */}
  <div className="bg-[#F5F6F5] p-6 rounded-lg shadow-sm mb-6">
    <h2 className="text-center text-2xl font-bold text-surface-dark mb-6">Características</h2>

    {/* Caja verde */}
    <div className="bg-primary text-[#F5F6F5] p-6 rounded-lg space-y-3 text-sm">
      <h3 className="text-center text-lg font-bold mb-4">Composición</h3>

      <p>
        <span className="font-semibold">Ingredientes Activos:</span> {product.caracteristicas.ingredientesActivos}
      </p>
      <p>
        <span className="font-semibold">Tipo de Formulación:</span> {product.caracteristicas.tipoFormulacion}
      </p>
      <p>
        <span className="font-semibold">Clasificación Toxicológica:</span> {product.caracteristicas.clasificacionToxicologica}
      </p>
      <p>
        <span className="font-semibold">Presentación:</span> {product.caracteristicas.presentacion}
      </p>
    </div>

    {/* Registro Nacional */}
    <p className="text-center text-surface-dark font-medium mt-4">
      <span className="font-bold">Registro Nacional No.</span> {product.registroNacional}
    </p>
  </div>

  {/* Cultivos 
  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
    <h2 className="text-xl font-semibold mb-4">Cultivos</h2>
    <div className="flex flex-wrap gap-2">
      {product.cultivos.map((cultivo, index) => (
        <span
          key={index}
          className="inline-block bg-secondary-dark text-white text-sm rounded-full px-4 py-1"
        >
          {cultivo}
        </span>
      ))}
    </div>
  </div>*/}
</div>

      </div>
      
      {/* Instructions Section */}
      {/*<div className="container mx-auto px-4 pb-8">
        <div className="bg-primary text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-xl font-semibold">Instrucciones de Uso</h2>
        </div>
        
        <div className="bg-surface-white p-6 rounded-b-lg shadow-sm space-y-6">
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              Modo de Acción
              <svg className="w-5 h-5 ml-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </h3>
            <p>{product.instruccionesUso.modoUso}</p>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              Cuadro de Uso
              <svg className="w-5 h-5 ml-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">
                      Cultivo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">
                      Dosis Recomendada
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">
                      Periodo de Carencia
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">
                      Periodo de Reentrada
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">
                      PHI
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.instruccionesUso.cuadroUso.map((fila, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">
                        {fila.cultivo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">
                        {fila.dosisRecomendada}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">
                        {fila.periodoCarencia}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">
                        {fila.periodoReentrada}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">
                        {fila.phi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              Preparación
              <svg className="w-5 h-5 ml-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </h3>
            <p>{product.instruccionesUso.preparacion}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center">
              Precaución y Advertencia
              <svg className="w-5 h-5 ml-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </h3>
            <p>{product.instruccionesUso.precaucionAdvertencia}</p>
          </div>
        </div>
      </div>[]*/}



      {/* Instructions Section */}
      <div className="space-y-8 bg-primary">
      <div className="container mx-auto px-4 pb-8 ">
      <div className="text-white py-4 px-6 rounded-t-lg flex justify-center items-center">
  <h2 className="text-xl font-semibold pb-8 pt-8">Instrucciones de Uso</h2>
</div>

  <Accordion defaultExpanded sx={{borderRadius: '8px', marginBottom: '10px'}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: "#017EC2", backgroundColor: "#BAE5FD", borderRadius: "20px", border: "1px solid #017EC2", ":hover" : {backgroundColor: "#7CD1FD"}}} />} 
    sx={{ backgroundColor: '#F5F6F5', color: '#282A29', borderRadius: '8px' }}>
      <Typography variant="h6" sx={{   padding: '5px'  }}>
        Modo de Acción
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: '#E6E7E6', borderRadius: '8px', padding: '20px' }}>
      <Typography>{product.instruccionesUso.modoUso}</Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion sx={{borderRadius: '8px', marginBottom: '10px'}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: "#017EC2", backgroundColor: "#BAE5FD", borderRadius: "20px", border: "1px solid #017EC2", ":hover" : {backgroundColor: "#7CD1FD"}}} />} 
    sx={{ backgroundColor: '#F5F6F5', color: '#282A29', borderRadius: '8px'  }}>
      <Typography variant="h6" sx={{  padding: '5px'  }}>
        Cuadro de Uso
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: '#E6E7E6', borderRadius: '8px', padding: '20px' }}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-[#E6E7E6]">
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">Cultivo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">Dosis Recomendada</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">Periodo de Carencia</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">Periodo de Reentrada</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-dark uppercase tracking-wider">PHI</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {product.instruccionesUso.cuadroUso.map((fila, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[#E6E7E6]' : 'bg-[#E6E7E6]'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">{fila.cultivo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">{fila.dosisRecomendada}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">{fila.periodoCarencia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">{fila.periodoReentrada}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-dark">{fila.phi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccordionDetails>
  </Accordion>

  <Accordion sx={{borderRadius: '8px', marginBottom: '10px'}}>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: "#017EC2", backgroundColor: "#BAE5FD", borderRadius: "20px", border: "1px solid #017EC2", ":hover" : {backgroundColor: "#7CD1FD"}}} />} 
    sx={{ backgroundColor: '#F5F6F5', color: '#282A29', borderRadius: '8px'  }}>
      <Typography variant="h6" sx={{  padding: '5px'  }}>
        Preparación
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: '#E6E7E6', borderRadius: '8px', padding: '20px' }}>
      <Typography>{product.instruccionesUso.preparacion}</Typography>
    </AccordionDetails>
  </Accordion>

  <Accordion sx={{borderRadius: '8px', marginBottom: '10px', }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color: "#017EC2", backgroundColor: "#BAE5FD", borderRadius: "20px", border: "1px solid #017EC2", ":hover" : {backgroundColor: "#7CD1FD"}}} />} 
    sx={{ backgroundColor: '#F5F6F5', color: '#282A29', borderRadius: '8px'  }}>
      <Typography variant="h6" sx={{  padding: '5px'  }}>
        Precaución y Advertencia
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: '#E6E7E6', borderRadius: '8px', padding: '20px' }}>
      <Typography>{product.instruccionesUso.precaucionAdvertencia}</Typography>
    </AccordionDetails>
  </Accordion>
</div>
    </div>
    </div>   
  );
};

export default ProductDetails;