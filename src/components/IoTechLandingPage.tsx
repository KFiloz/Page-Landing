"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import Footer from "./Footer";

const IoTechLandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default IoTechLandingPage;