import BannerSection from "@/components/research-areas/BannerSection";
import ConsultationSection from "@/components/research-areas/ConsultationSection";
import FieldsSection from "@/components/research-areas/FieldsSection";
import ResearchSection from "@/components/research-areas/ResearchSection";
import ServicesSection from "@/components/research-areas/ServicesSection";
import React from "react";

const page = () => {
  return (
    <>
      <BannerSection />
      <ResearchSection />
      <FieldsSection />
      <ServicesSection />
      <ConsultationSection />
    </>
  );
};

export default page;
