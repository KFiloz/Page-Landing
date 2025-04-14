"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed z-50 p-4 w-full border-b border-solid bg-white shadow">
        <div className="flex justify-between items-center mx-auto max-w-[1200px]">
          {/* Logo */}
          <Link href="/" className="w-[150px] h-[40px] block">
            <Image
              src="/images/Ktronika.png"
              alt="Ktronika"
              width={300}
              height={122}
              priority
            />
          </Link>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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

          {/* Menú (oculto en móvil) */}
          <ul className="hidden sm:flex gap-8">
            <li><a href="#" className="text-gray-800">Inicio</a></li>
            <li><a href="#" className="text-gray-800">Servicios</a></li>
            <li><a href="#" className="text-gray-800">Dashboard</a></li>
            <li><a href="#" className="text-gray-800">Contacto</a></li>
          </ul>
        </div>

        {/* Menú desplegable móvil */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-4 px-4">
            <li><a href="#" className="block text-gray-800">Inicio</a></li>
            <li><a href="#" className="block text-gray-800">Servicios</a></li>
            <li><a href="#" className="block text-gray-800">Dashboard</a></li>
            <li><a href="#" className="block text-gray-800">Contacto</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
