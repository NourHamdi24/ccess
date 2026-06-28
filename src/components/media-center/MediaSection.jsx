"use client";
import React, { useState } from "react";
import MediaIntrosSection from "./MediaIntrosSection";
import MediaVideosSection from "./MediaVideosSection";
import LatestNewsSection from "./LatestNewsSection";

const MediaSection = () => {
  const tabs = [
    { id: "latest", label: "جميع الفاعليات" },
    { id: "week", label: " منذ أسبوع" },
    { id: "month", label: "منذ شهر " },
    { id: "older", label: "منذ 3 أشهر" },
  ];
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <div className="">
      {" "}
      <div className="bg-[#F8F8F8] px-3 py-4 flex justify-evenly flex-wrap items-center gap-4 rounded-3xl mb-0 container">
        {" "}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` font-bold text-2xl px-6 py-6 rounded-3xl cursor-pointer ${activeTab === tab.id ? "text-white bg-[#1E3A5F]" : "text-[#1E3A5F] bg-white"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p>{tab.label}</p>
          </button>
        ))}
      </div>
      <MediaVideosSection date={activeTab} />
      <MediaIntrosSection date={activeTab} />
      <LatestNewsSection date={activeTab} />
    </div>
  );
};

export default MediaSection;
