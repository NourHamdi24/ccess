"use client";
import React, { useState } from "react";
import MediaIntrosSection from "./MediaIntrosSection";
import MediaVideosSection from "./MediaVideosSection";
import LatestNewsSection from "./LatestNewsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
      <div className="bg-[#F8F8F8] px-3 py-4 rounded-3xl mb-10 container">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.6}
          breakpoints={{
            640: {
              slidesPerView: 3.6,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id}>
              <button
                className={`w-full font-bold  lg:text-2xl px-2 py-3 rounded-3xl cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? "text-white bg-[#1E3A5F]"
                    : "text-[#1E3A5F] bg-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <p>{tab.label}</p>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MediaVideosSection date={activeTab} />
      <MediaIntrosSection date={activeTab} />
      <LatestNewsSection date={activeTab} />
    </div>
  );
};

export default MediaSection;
