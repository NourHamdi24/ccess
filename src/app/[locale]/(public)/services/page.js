import ConsultationSection from "@/components/services/ConsultationSection";
import HeroSection from "@/components/services/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ConsultationSection />
    </>
  );
};

export default page;
