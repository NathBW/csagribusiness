// src/pages/Nosotros.tsx
import React, { useEffect } from 'react';

const Nosotros: React.FC = () => {
  useEffect(() => {

  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary bg-cover bg-center h-64 flex items-center justify-center">
        <div className=" absolute inset-0 z-10" />
        <div className="relative z-20 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Nosotros</h1>
          <p className="text-white/80 mt-2 text-sm md:text-base">Conoce más sobre nuestra misión, visión y valores</p>
        </div>
      </section>

      {/* About Section */}
      <section className=" py-16 px-4 text-gray-800">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">¿Quiénes Somos?</h2>

          {/* Imagen representativa opcional */}
          {/*<img
            src="/assets/images/equipo.jpg"
            alt="Nuestro equipo"
            className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-10"
          />*/}

          <p className="mb-6 text-justify leading-relaxed text-sm md:text-base">
            En <strong className="text-[#017EC2]">CS AGRIBUSINESS S.A.S.</strong>, somos un equipo apasionado de profesionales especializados en el sector agropecuario en Colombia. Nos dedicamos a guiar a nuestros clientes a través del complejo mundo de las regulaciones, asegurando que obtengan todos los elementos necesarios para la venta de sus productos de forma rápida y eficiente.
          </p>
          <p className="mb-6 text-justify leading-relaxed text-sm md:text-base">
            Con años de experiencia, comprendemos las intrincadas necesidades de la industria y estamos comprometidos a ofrecer soluciones adaptadas a cada cliente. Nuestra reputación se construye sobre un sólido fundamento de <strong>integridad</strong>, <strong>excelencia</strong> y representación fiel de los intereses de nuestros clientes.
          </p>
          <p className="mb-6 text-justify leading-relaxed text-sm md:text-base">
            Creemos en la <strong className="text-[#017EC2]">innovación</strong> y la <strong className="text-[#017EC2]">sostenibilidad</strong> como motores de cambio. Por ello, nos esforzamos por facilitar procesos que no solo beneficien a nuestros clientes, sino también promuevan un desarrollo del campo más responsable.
          </p>
          <p className="text-justify leading-relaxed text-sm md:text-base">
            En <strong className="text-[#017EC2]">CS AGRIBUSINESS S.A.S.</strong>, no solo somos consultores; somos socios estratégicos de quienes buscan transformar el panorama agrícola colombiano.
          </p>
        </div>
      </section>

      {/* Separador */}
      <div className="h-px bg-gray-200 mx-auto w-3/4 my-12" />

      {/* Misión, Visión, Valores Section */}
      <section className="bg-primary py-16 px-4 text-gray-800">
        <div className="container mx-auto max-w-6xl" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Misión */}
            <div className="bg-[#E6E7E6] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Misión</h3>
              <p className="text-gray-700 text-sm text-justify leading-relaxed">
                Nuestra misión es representar fielmente los intereses de aquellos a quienes servimos, asegurando que su posición y necesidades sean comprendidas y respetadas. En <strong>CS AGRIBUSINESS S.A.S.</strong>, nos especializamos en proporcionar soluciones expertas en el ámbito regulatorio y administrativo para el sector agropecuario y comercial.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-[#E6E7E6] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Visión</h3>
              <p className="text-gray-700 text-sm text-justify leading-relaxed">
                Nuestro sueño en <strong>CS AGRIBUSINESS S.A.S.</strong> es ser el referente líder en consultoría regulatoria y administrativa para el sector agropecuario en Colombia, promoviendo soluciones sostenibles que impulsen la innovación.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-[#E6E7E6] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Valores</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                <li><strong>Representación:</strong> Somos la voz y el escudo de nuestros clientes en el ámbito regulatorio.</li>
                <li><strong>Integridad:</strong> Actitudes éticas y transparentes en todas las interacciones.</li>
                <li><strong>Excelencia:</strong> Resultados que superan las expectativas de nuestros clientes.</li>
                <li><strong>Innovación:</strong> Nuevas ideas para necesidades cambiantes.</li>
                <li><strong>Adaptabilidad:</strong> Soluciones ajustadas a cada cliente.</li>
                <li><strong>Sostenibilidad:</strong> Efectividad y respeto por el medio ambiente.</li>
                <li><strong>Colaboración:</strong> Trabajo en equipo y diversidad de ideas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
