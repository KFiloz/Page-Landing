"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="px-8 mx-auto max-w-[1200px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <div className="pt-12 max-md:text-center">
              <h2 className="mb-6 text-6xl font-extrabold leading-tight text-gray-800">
                Optimiza tu negocio con IoT Inteligente
              </h2>
              <p className="mb-8 text-xl text-gray-600">
                Transforma tu industria con soluciones IoT avanzadas. Monitoreo
                en tiempo real, automatización inteligente y análisis predictivo
                para maximizar tu eficiencia operativa.
              </p>
              <button className="px-8 py-4 font-semibold bg-blue-600 rounded-lg transition-all duration-200 text-white">
                Ver Plataforma
              </button>
            </div>
          </div>
          <div className="w-6/12 max-md:w-full">
            <img
              alt="IoT Dashboard Interface"
              src="/images/IOT.png"
              className="object-cover w-full rounded-xl shadow-xl aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
