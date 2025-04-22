"use client";
import Image from "next/image";

const CasosExito = () => {
  return (
    <section id="casos-exito" className="bg-gradient-to-r from-blue-50 to-indigo-50 pt-28 pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Resultados Comprobados en el Sector Agroindustrial
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Caso 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/caso1.png"
              alt="Caso Éxito 1"
              width={400}
              height={300}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Productor de Cítricos [Nombre o Tipo]</h3>
            <p className="text-gray-600 mb-3">
              "Logramos reducir el consumo de agua en un 30% y detectar problemas de riego a tiempo."
            </p>
            <p className="text-sm text-gray-500">- [Nombre Cliente/Cargo]</p>
          </div>

          {/* Caso 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/caso2.png"
              alt="Caso Éxito 2"
              width={400}
              height={300}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cooperativa Ganadera [Nombre o Tipo]</h3>
            <p className="text-gray-600 mb-3">
              "Optimizamos la alimentación y monitorizamos la salud del ganado, mejorando la producción."
            </p>
            <p className="text-sm text-gray-500">- [Nombre Cliente/Cargo]</p>
          </div>

          {/* Caso 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/images/caso3.png"
              alt="Caso Éxito 3"
              width={400}
              height={300}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Empresa Agroindustrial [Nombre o Tipo]</h3>
            <p className="text-gray-600 mb-3">
              "El mantenimiento predictivo de maquinaria nos ahorró costos significativos en reparaciones."
            </p>
            <p className="text-sm text-gray-500">- [Nombre Cliente/Cargo]</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg text-lg"
          >
            Descubre cómo podemos ayudarte
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
