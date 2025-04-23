"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#154EBF]/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white flex items-center gap-2"
        >
          <Image
            src="/images/Ktronika2.png"
            alt="Ktronika Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/#inicio" className="text-white hover:text-blue-100 transition duration-300">
            Inicio
          </a>
          <a href="/#solucion" className="text-white hover:text-blue-100 transition duration-300">
            Nuestra Solución
          </a>
          <a href="/#beneficios" className="text-white hover:text-blue-100 transition duration-300">
            Beneficios
          </a>
          <a href="/#casos-exito" className="text-white hover:text-blue-100 transition duration-300">
            Casos de Éxito
          </a>
          <a href="/#por-que-nosotros" className="text-white hover:text-blue-100 transition duration-300">
            Por Qué Elegirnos
          </a>
          <a
            href="/#contacto"
            className="bg-white hover:bg-blue-100 text-[#154EBF] font-semibold py-2 px-4 rounded-lg transition duration-300 shadow"
          >
            Contactar
          </a>
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#154EBF] px-6 py-4 space-y-4 text-white">
          <a href="/#inicio" className="hover:text-blue-100 transition duration-300">Inicio</a>
          <a href="/#solucion" className="hover:text-blue-100 transition duration-300">Nuestra Solución</a>
          <a href="/#beneficios" className="hover:text-blue-100 transition duration-300">Beneficios</a>
          <a href="/#casos-exito" className="hover:text-blue-100 transition duration-300">Casos de Éxito</a>
          <a href="/#por-que-nosotros" className="hover:text-blue-100 transition duration-300">Por Qué Elegirnos</a>
          <a
            href="#contacto"
            className="bg-white text-[#154EBF] text-center py-2 px-4 rounded-lg shadow hover:bg-blue-100 transition duration-300"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

