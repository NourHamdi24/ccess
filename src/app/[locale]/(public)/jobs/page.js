import BannerSection from "@/components/jobs/BannerSection";
import JobsListSection from "@/components/jobs/JobsListSection";
import React from "react";

const JobsPage = async () => {
  // fetch jobs here once the endpoint is ready and pass them to JobsListSection
  const jobs = [
    {
      id: 1,
      title: "محلل بيانات",
      department: "قسم التحاليل",
      shift: "دوام كامل",
      category: 2,
    },
    {
      id: 2,
      title: "باحث اقتصادي أول",
      department: "قسم الابحاث",
      shift: "دوام كامل",
      category: 5,
    },
    {
      id: 3,
      title: "مستشار استيراتيجي",
      department: "قسم الاستشارات",
      shift: "دوام كامل",
      category: 1,
    },
    {
      id: 4,
      title: "محلل بيانات",
      department: "قسم التحاليل",
      shift: "دوام كامل",
      category: 0,
    },
    {
      id: 5,
      title: "باحث اقتصادي أول",
      department: "قسم الابحاث",
      shift: "دوام كامل",
      category: 4,
    },
    {
      id: 6,
      title: "مستشار استيراتيجي",
      department: "قسم الاستشارات",
      shift: "دوام كامل",
      category: 3,
    },
  ];

  return (
    <>
      <BannerSection />
      <JobsListSection jobs={jobs} />
    </>
  );
};

export default JobsPage;
