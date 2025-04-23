import Image from "next/image";
import Link from "next/link";

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-6 mb-12 shadow-sm rounded-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagen del ingeniero */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full shadow-lg ring-4 ring-blue-200">
          <Image
            src="/images/ingeniero.png"
            alt="Ingeniero"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Información + CTA */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-[#0D47A1] mb-2 leading-tight">
            Camilo Ortega
          </h1>
          <h2 className="text-lg text-blue-800 font-medium mb-3">
            Ingeniero Electrónico · IoT & Automatización Industrial
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-xl mb-4">
            Experto en automatización, IoT, análisis de datos y visualización con Grafana.
            Más de 15 años ayudando a empresas a optimizar procesos industriales mediante soluciones tecnológicas a medida.
          </p>

          <Link
            href="/#contacto"
            className="inline-block bg-[#0D47A1] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;

