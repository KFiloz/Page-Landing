"use client";

const Contactar = () => {
  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para Transformar tu Operación Agroindustrial?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          No te quedes atrás. Descubre cómo nuestras soluciones IoT/IIoT y LoRaWAN
          pueden impulsar tu eficiencia, reducir tus costos y darte una ventaja competitiva real.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="mailto:info@ktronika.com?subject=Consulta%20Soluciones%20IoT"
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg text-lg transition hover:bg-gray-100 shadow-md"
          >
            Habla con un Experto
          </a>
          <a
            href="#inicio"
            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg text-lg transition hover:bg-white hover:text-blue-700"
          >
            Saber Más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contactar;
