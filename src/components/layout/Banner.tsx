import React, { useEffect, useState } from 'react'; // Importa React y hooks necesarios
import banneruno from '../../assets/images/banner/banner1.webp'; // Importa las imágenes de los banners
import bannerdos from '../../assets/images/banner/banner2.webp';
import banner3 from '../../assets/images/banner/banner3.webp';
import banner4 from '../../assets/images/banner/banner4.webp';

const HeroBanner: React.FC = () => {
  const bannerImages = [ banneruno,bannerdos,banner3,banner4]; // Array de imágenes del banner

  const [currentIndex, setCurrentIndex] = useState(0);

// Cambiar automáticamente cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % bannerImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section
      className="relative w-full h-[400px] md:h-[350px] flex items-center justify-center bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${bannerImages[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Texto sobre el banner */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Soluciones Agrícolas de Primera Calidad
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Descubre nuestra alta gama de productos para optimizar sus cultivos.
        </p>
      </div>

      {/* Indicadores abajo */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#FDDBAB] hover:bg-[#FDDBAB]/80'
                : 'bg-white/20 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default HeroBanner;