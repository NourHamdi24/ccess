import AboutUsSection from "@/components/who-we-are/AboutUsSection";
import BannerSection from "@/components/who-we-are/BannerSection";
import ConsultationSection from "@/components/who-we-are/ConsultationSection";
import ServicesSection from "@/components/who-we-are/ServicesSection";
import StatementSection from "@/components/who-we-are/StatementSection";
import React from "react";

const page = () => {
  return (
    <>
      <BannerSection />
      <StatementSection />
      <AboutUsSection />
      <ServicesSection />
      <ConsultationSection />
    </>
  );
};

export default page;
