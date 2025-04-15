"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
     <nav className="fixed z-50 p-4 w-full border-b border-solid bg-[#E0F7FA] shadow">
        <div className="flex justify-between items-center mx-auto max-w-[1200px] px-4 h-[50px]">
          {/* Logo con tamaño 300x120 */}
          <Link href="/" className="block w-[300px] h-[50px] relative">
            <Image
              src="/images/Ktronika.png"
              alt="Ktronika Logo"
              width={300}
              height={50}
              priority
            />
          </Link>

          {/* Botón hamburguesa en móvil */}
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

          {/* Menú horizontal */}
          <ul className="hidden sm:flex gap-8 items-center">
            <li><a href="#" className="text-gray-800">Inicio</a></li>
            <li><a href="#" className="text-gray-800">Servicios</a></li>
            <li>
              <a
                href="https://grafana.ktronika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800"
              >
                Dashboard
              </a>
            </li>
            <li><a href="#" className="text-gray-800">Contacto</a></li>
          </ul>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-4 px-4">
            <li><a href="#" className="block text-gray-800">Inicio</a></li>
            <li><a href="#" className="block text-gray-800">Servicios</a></li>
            <li>
              <a
                href="https://grafana.ktronika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-800"
              >
                Dashboard
              </a>
            </li>
            <li><a href="#" className="block text-gray-800">Contacto</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
