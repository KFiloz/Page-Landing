"use client";
import React from "react";

const RetosIoT: React.FC = () => {
  return (
    <section id="desafios" className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-28 pb-24">
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Los Retos de la Agroindustria Moderna
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
          Sabemos que optimizar la rentabilidad frente a costos crecientes, gestionar
          recursos eficientemente y adaptarse a un mercado competitivo son tus prioridades.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          La falta de datos precisos y en tiempo real limita tu potencial.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Costos Operativos</h3>
            <p className="text-gray-600">
              Presión constante por reducir gastos en insumos, energía y mano de obra.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gestión de Recursos</h3>
            <p className="text-gray-600">
              Necesidad de optimizar el uso de agua, fertilizantes y otros recursos vitales.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visibilidad y Control</h3>
            <p className="text-gray-600">
              Dificultad para monitorear remotamente y tomar decisiones basadas en datos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetosIoT;
