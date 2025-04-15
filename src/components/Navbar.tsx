import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed z-50 p-4 w-full border-b border-solid bg-[#0D47A1]/80 shadow text-white backdrop-blur-md">
        <div className="flex justify-between items-center mx-auto max-w-[1200px]">
          {/* Logo */}
          <Link href="/" className="block w-[150px] h-[50px] relative">
            <Image
              src="/images/Ktronika2.png"
              alt="Ktronika Logo"
              width={150}
              height={5s0}
              priority
            />
          </Link>

          {/* Botón hamburguesa en móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white focus:outline-none"
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

          {/* Menú horizontal (escritorio) */}
          <ul className="hidden sm:flex gap-8 items-center">
            <li><a href="#" className="text-white hover:text-gray-200">Inicio</a></li>
            <li><a href="#" className="text-white hover:text-gray-200">Servicios</a></li>
            <li>
              <a
                href="https://grafana.ktronika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                Dashboard
              </a>
            </li>
            <li><a href="#" className="text-white hover:text-gray-200">Contacto</a></li>
          </ul>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-4 px-4">
            <li><a href="#" className="block text-white hover:text-gray-200">Inicio</a></li>
            <li><a href="#" className="block text-white hover:text-gray-200">Servicios</a></li>
            <li>
              <a
                href="https://grafana.ktronika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-gray-200"
              >
                Dashboard
              </a>
            </li>
            <li><a href="#" className="block text-white hover:text-gray-200">Contacto</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
