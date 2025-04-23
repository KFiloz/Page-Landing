"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="px-0 py-16 bg-gray-800 text-white">
      <div className="flex justify-between items-center px-8 mx-auto max-w-[1200px] max-sm:flex-col max-sm:gap-8 max-sm:text-center">
        <div>
          <h4 className="mb-4 text-2xl font-bold">Ktronika</h4>
          <p className="text-gray-400">© 2024 Ktronika SAS. Todos los derechos reservados.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">GitHub</a></li>
            </ul>
          </nav>

          {/* Botón para ir al blog */}
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow"
          >
            Visitar Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
