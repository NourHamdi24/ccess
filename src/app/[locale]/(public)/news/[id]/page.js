import BannerSection from "@/components/news/BannerSection";
import ConsultationSection from "@/components/news/ConsultationSection";
import NewsDetailsSection from "@/components/news/NewsDetailsSection";
import React from "react";

const News = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <BannerSection />
      <NewsDetailsSection />
      <ConsultationSection />
    </>
  );
};

export default News;
