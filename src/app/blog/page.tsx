"use client";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#0D47A1] mb-10 hover-target">
        Blog de Ingeniería & IoT
      </h1>

      {/* Perfil del autor */}
      <div className="flex gap-6 mb-12 max-md:flex-col">
        <div className="w-32 h-32 relative">
          <Image
            src="/images/ingeniero.png"
            alt="Ingeniero Ktronika"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Camilo Ortega – Ingeniero Electrónico
          </h2>
          <p className="text-gray-600 mt-2">
            Más de 15 años de experiencia en automatización industrial, desarrollo de sistemas IoT, análisis de datos, integración con PLCs Siemens y Allen Bradley, arquitecturas en la nube y soluciones de visualización con Grafana, FastAPI y AWS.
          </p>
        </div>
      </div>

      {/* Aquí van los posts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ejemplo de post */}
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-[#0D47A1] mb-2">
            Cómo optimizar una red LoRaWAN para monitoreo agrícola
          </h3>
          <p className="text-gray-700">
            Aprende las mejores prácticas para desplegar sensores IoT en fincas, configurar gateways, y enviar datos en tiempo real a la nube...
          </p>
        </div>

        {/* Puedes duplicar este bloque para cada tema nuevo */}
      </div>
    </div>
  );
};

export default BlogPage;
