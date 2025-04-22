"use client";
import { Lightbulb, Wifi, LifeBuoy } from "lucide-react";

const PorqueElegirnos = () => {
  return (
    <section id="por-que-nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Tu Socio Estratégico en Agro-IoT
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Experiencia */}
          <div className="text-center p-4">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiencia Específica</h3>
            <p className="text-gray-600">
              Profundo conocimiento de los desafíos y necesidades del sector agroindustrial.
            </p>
          </div>

          {/* LoRaWAN */}
          <div className="text-center p-4">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Wifi className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Especialistas en LoRaWAN</h3>
            <p className="text-gray-600">
              Implementamos la tecnología de conectividad más eficiente para entornos rurales.
            </p>
          </div>

          {/* Soporte */}
          <div className="text-center p-4">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <LifeBuoy className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Soporte y Acompañamiento</h3>
            <p className="text-gray-600">
              Te guiamos en cada paso, desde la implementación hasta la optimización continua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueElegirnos;
