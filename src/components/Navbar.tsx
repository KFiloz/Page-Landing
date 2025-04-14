"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="fixed z-50 p-4 w-full border-b border-solid bg-white">
        <div className="flex justify-between items-center mx-auto my-0 max-w-[1200px]">
          <Link href="/" className="w-[150px] h-[40px] block">
            <Image
              src="/images/Ktronika.png"
              alt="Ktronika"
              width={150}
              height={40}
              priority
            />
          </Link>
          <ul className="flex gap-8 max-sm:hidden">
            <li><a href="#" className="text-gray-800">Inicio</a></li>
            <li><a href="#" className="text-gray-800">Servicios</a></li>
            <li><a href="#" className="text-gray-800">Dashboard</a></li>
            <li><a href="#" className="text-gray-800">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
