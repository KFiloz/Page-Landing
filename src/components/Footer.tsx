"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-0 py-16 bg-gray-800 text-white">
      <div className="flex justify-between items-center px-8 mx-auto max-w-[1200px] max-sm:flex-col max-sm:gap-8 max-sm:text-center">
        <div>
          <h4 className="mb-4 text-2xl font-bold">Ktronika</h4>
          <p className="text-gray-400">© 2024 Ktronika SAS. Todos los derechos reservados.</p>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="text-gray-400">LinkedIn</a></li>
            <li><a href="#" className="text-gray-400">Twitter</a></li>
            <li><a href="#" className="text-gray-400">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;