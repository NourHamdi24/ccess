import BannerSection from "@/components/media-center/BannerSection";
import ConsultationSection from "@/components/media-center/ConsultationSection";
import GallerySection from "@/components/media-center/GallerySection";
import MediaSection from "@/components/media-center/MediaSection";
import React from "react";

const page = () => {
  return (
    <>
      <BannerSection />
      <MediaSection />
      <GallerySection />
      <ConsultationSection />
    </>
  );
};

export default page;
