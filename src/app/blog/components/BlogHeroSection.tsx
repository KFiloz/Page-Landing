"use client";
import Image from "next/image";

const BlogHero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mb-12">
      <div className="w-32 h-32 relative">
        <Image
          src="/images/ingeniero.png"
          alt="Ingeniero"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-[#0D47A1] mb-2">
          Camilo Ortega – Ingeniero Electrónico
        </h1>
        <p className="text-gray-700">
          Experto en automatización industrial, IoT, análisis de datos, desarrollo de plataformas en la nube y visualización con Grafana. Más de 15 años de experiencia en el sector industrial y tecnológico.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
