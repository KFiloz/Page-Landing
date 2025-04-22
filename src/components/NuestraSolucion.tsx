"use client";
import React from "react";
import Image from "next/image";

const NuestraSolucion: React.FC = () => {
  return (
    <section id="solucion" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen dashboard */}
        <div className="order-2 md:order-1 flex justify-center items-center">
          <Image
            src="/images/dashboard.png"
            alt="Dashboard Agro-IoT"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full max-w-md md:max-w-full"
          />
        </div>

        {/* Texto explicativo */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nuestra Solución Integral: IoT, IIoT y LoRaWAN para el Agro
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Implementamos sistemas completos que combinan sensores robustos (IoT/IIoT) para
            monitorear cada aspecto de tu operación (campo, planta, logística) con la potencia
            de las redes LoRaWAN, ideales por su bajo consumo y gran alcance en zonas rurales.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 text-left">
            <li>
              <span className="font-semibold text-gray-700">Monitoreo Preciso:</span> Suelo, clima, riego, niveles, maquinaria, ubicación de activos.
            </li>
            <li>
              <span className="font-semibold text-gray-700">Conectividad LoRaWAN:</span> Cobertura extensa y eficiente, perfecta para el campo.
            </li>
            <li>
              <span className="font-semibold text-gray-700">Plataforma Centralizada:</span> Datos en tiempo real, alertas y análisis para decisiones inteligentes.
            </li>
            <li>
              <span className="font-semibold text-gray-700">Fácil Implementación:</span> Nos encargamos de todo, con soporte continuo.
            </li>
          </ul>
          <a
            href="#beneficios"
            className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
          >
            Ver los beneficios tangibles →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NuestraSolucion;
