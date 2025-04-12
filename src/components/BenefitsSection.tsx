"use client";
import React from "react";
import BenefitCard from "./BenefitCard";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Monitorea",
      description: "Seguimiento en tiempo real de todos tus dispositivos y procesos industriales",
      imageUrl: "/images/Monitorear.png",
      imageAlt: "Monitoreo",
    },
    {
      title: "Automatiza",
      description: "Optimiza operaciones con automatización inteligente y aprendizaje continuo",
      imageUrl: "/images/Automatizar.png",
      imageAlt: "Automatización",
    },
    {
      title: "Conecta",
      description: "Integra todos tus sistemas en una única plataforma centralizada",
      imageUrl: "/images/Conectar.png",
      imageAlt: "Conexión",
    },
  ];

  return (
    <section className="px-0 py-20 bg-white">
      <div className="px-8 mx-auto text-center max-w-[1200px]">
        <h2 className="mb-12 text-4xl font-bold text-gray-800">Beneficios</h2>
        <div className="flex gap-5 max-md:flex-col">
          {benefits.map((benefit, index) => (
            <div key={index} className="w-[33%] max-md:w-full">
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
