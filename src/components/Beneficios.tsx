"use client";
import { Bolt, PiggyBank, TrendingUp, Eye, Shield, CheckCircle } from "lucide-react";

const beneficios = [
  {
    icon: <Bolt className="w-6 h-6 text-blue-600" />,
    title: "Optimización de Recursos",
    text: "Reduce el consumo de agua, fertilizantes y energía hasta en un 30% mediante gestión precisa.",
    bg: "bg-blue-50",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-green-600" />,
    title: "Reducción de Costos",
    text: "Disminuye gastos operativos y de mantenimiento preventivo/predictivo.",
    bg: "bg-green-50",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-600" />,
    title: "Aumento de Productividad",
    text: "Mejora rendimientos por hectárea y eficiencia de maquinaria.",
    bg: "bg-yellow-50",
  },
  {
    icon: <Eye className="w-6 h-6 text-purple-600" />,
    title: "Visibilidad y Control Total",
    text: "Monitoreo 24/7 y datos en tiempo real para decisiones informadas y rápidas.",
    bg: "bg-purple-50",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-red-600" />,
    title: "Mejora de Calidad",
    text: "Asegura la trazabilidad, mejora el control de calidad y facilita el cumplimiento normativo.",
    bg: "bg-red-50",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    title: "Reducción de Riesgos",
    text: "Anticipa problemas (plagas, averías, condiciones adversas) y asegura la continuidad.",
    bg: "bg-indigo-50",
  },
];

const Beneficios = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Beneficios Reales para tu Rentabilidad
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((item, index) => (
            <div key={index} className={`${item.bg} p-6 rounded-lg shadow transition hover:shadow-lg`}>
              <div className="flex items-center mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
