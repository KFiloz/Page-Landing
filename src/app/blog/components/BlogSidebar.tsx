
"use client";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <aside className="bg-white shadow-lg rounded-xl p-6 sticky top-28 space-y-8 border border-gray-200">
      {/* Sección: Acerca de mí */}
      <div>
        <h3 className="text-xl font-semibold text-[#0D47A1] mb-2">Sobre Camilo</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Ingeniero con más de 15 años de experiencia en sistemas IoT, IIoT y automatización industrial. En este blog comparto ideas, soluciones y casos reales de optimización con tecnología.
        </p>
      </div>

      {/* Sección: Categorías o Navegación */}
      <div>
        <h3 className="text-xl font-semibold text-[#0D47A1] mb-2">Temas Clave</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/blog?categoria=iot" className="text-blue-700 hover:underline">
              IoT Industrial
            </Link>
          </li>
          <li>
            <Link href="/blog?categoria=lorawan" className="text-blue-700 hover:underline">
              Redes LoRaWAN
            </Link>
          </li>
          <li>
            <Link href="/blog?categoria=dashboards" className="text-blue-700 hover:underline">
              Dashboards con Grafana
            </Link>
          </li>
          <li>
            <Link href="/blog?categoria=casos" className="text-blue-700 hover:underline">
              Casos de Éxito
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección: CTA o descarga */}
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">¿Necesitas ayuda?</h4>
        <p className="text-sm text-gray-600 mb-3">
          Agenda una sesión gratuita de diagnóstico para identificar cómo mejorar tus procesos industriales.
        </p>
        <Link
          href="/#contacto"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          Solicitar Sesión
        </Link>
      </div>
    </aside>
  );
};

export default BlogSidebar;
