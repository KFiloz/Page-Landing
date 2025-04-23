"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useNavigateWithHash } from "@/utils/navigateWithHash";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const goToSection = useNavigateWithHash();

  return (
    <header className="bg-[#154EBF]/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <Image
            src="/images/Ktronika2.png"
            alt="Ktronika Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => goToSection('#inicio')} className="text-white hover:text-blue-100 transition">
            Inicio
          </button>
          <button onClick={() => goToSection('#solucion')} className="text-white hover:text-blue-100 transition">
            Nuestra Solución
          </button>
          <button onClick={() => goToSection('#beneficios')} className="text-white hover:text-blue-100 transition">
            Beneficios
          </button>
          <button onClick={() => goToSection('#casos-exito')} className="text-white hover:text-blue-100 transition">
            Casos de Éxito
          </button>
          <button onClick={() => goToSection('#por-que-nosotros')} className="text-white hover:text-blue-100 transition">
            Por Qué Elegirnos
          </button>
          <button
            onClick={() => goToSection('#contacto')}
            className="bg-white text-[#154EBF] font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition shadow"
          >
            Contactar
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#154EBF] px-6 py-4 space-y-4 text-white">
          <button onClick={() => goToSection('#inicio')} className="hover:text-blue-100">Inicio</button>
          <button onClick={() => goToSection('#solucion')} className="hover:text-blue-100">Nuestra Solución</button>
          <button onClick={() => goToSection('#beneficios')} className="hover:text-blue-100">Beneficios</button>
          <button onClick={() => goToSection('#casos-exito')} className="hover:text-blue-100">Casos de Éxito</button>
          <button onClick={() => goToSection('#por-que-nosotros')} className="hover:text-blue-100">Por Qué Elegirnos</button>
          <button
            onClick={() => goToSection('#contacto')}
            className="bg-white text-[#154EBF] py-2 px-4 rounded-lg shadow hover:bg-blue-100"
          >
            Contactar
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
