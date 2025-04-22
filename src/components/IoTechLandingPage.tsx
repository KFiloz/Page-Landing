"use client";
import React from "react";
import HeroSection from "./HeroSection";
import RetosIoT from "./RetosIoT";
import NuestraSolucion from "./NuestraSolucion";
import Beneficios from "./Beneficios";
import CasosExito from "@/components/CasosExito";
import PorqueElegirnos from "@/components/PorqueElegirnos";
import Contactar from "@/components/Contactar";
import Footer from "./Footer";

const IoTechLandingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <RetosIoT />
      <NuestraSolucion />
      <Beneficios />
      <CasosExito />
      <PorqueElegirnos />
      <Contactar />
      <Footer />
    </div>
  );
};

export default IoTechLandingPage;