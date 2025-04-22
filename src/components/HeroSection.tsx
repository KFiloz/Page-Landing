"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto lado izquierdo */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Maximiza la Eficiencia de tu{" "}
            <span className="text-blue-600">Agroindustria</span> con IoT y
            LoRaWAN
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Reduce costos, optimiza recursos (agua, energía, insumos) y toma
            decisiones basadas en datos precisos con nuestras soluciones
            IoT/IIoT a medida y conectividad LoRaWAN de largo alcance.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg"
          >
            Solicita una Demostración Personalizada
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Descubre el potencial de ahorro y productividad para tu operación.
          </p>
        </div>

        {/* Imagen lado derecho */}
        <div className="flex justify-center items-center">
          <img
            src="/images/IOT.png"
            alt="IoT Dashboard Interface"
            className="rounded-lg shadow-xl w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
