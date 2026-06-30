"use client";

import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { useDispatch } from "react-redux";
import { setSelectedJobCategory } from "@/store/slices/jobsSlice";

// jobs: array of job objects passed from the page once the endpoint is ready
const JobsListSection = ({ jobs = [] }) => {
  const tabs = [
    { id: 0, label: "قسم التحاليل" },
    { id: 1, label: "قسم الابحاث " },
    { id: 2, label: "قسم الاستشارات " },
    { id: 3, label: "الحسابات  " },
    { id: 4, label: " أعمال إدارية  " },
  ];
  const dispatch = useDispatch();

  const selectedJobCategory = useSelector(
    (state) => state.jobs.selectedJobCategory,
  );
  const selectedJobs = jobs.filter(
    (job) => job.category === selectedJobCategory,
  );
  return (
    <section className="container">
      <div className="bg-[#F8F8F8] px-3 py-4 flex justify-evenly flex-wrap items-center gap-4 rounded-3xl mb-0 container">
        {" "}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` font-bold text-2xl px-6 py-6 rounded-3xl cursor-pointer ${selectedJobCategory === tab.id ? "text-white bg-[#1E3A5F]" : "text-[#1E3A5F] bg-white"}`}
            onClick={() => dispatch(setSelectedJobCategory(tab.id))}
          >
            <p>{tab.label}</p>
          </button>
        ))}
      </div>
      {selectedJobs.map((job) => (
        <div key={job.id}>
          <h1 className="text-[#717182] text-3xl mt-14 mb-10 ">
            نبحث دائماً عن المواهب المتميزة للانضمام إلى فريق العمل
          </h1>

          <JobCard job={job} />
        </div>
      ))}
    </section>
  );
};

export default JobsListSection;
