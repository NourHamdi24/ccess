import BannerSection from "@/components/jobs/BannerSection";
import JobDetailsSection from "@/components/jobs/JobDetailsSection";
import React from "react";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;

  return (
    <>
      <BannerSection />
      <JobDetailsSection id={id} />
    </>
  );
};

export default JobDetailsPage;
