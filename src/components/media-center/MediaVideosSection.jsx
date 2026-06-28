"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../home/VideoPopup";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import styles from "./MediaVideosSection.module.css";
const MediaVideosSection = ({ date }) => {
  const [popupVideo, setPopupVideo] = useState(null);

  const articles = [
    {
      id: 1,
      image: "/articles/article1.png",
      title: "ظهور  اعلامي ",
      description:
        "د. عبد المنعم السيد يوضح تأثير رفع سعر الفائدة من قبل المركزي الأمريكي",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "week",
    },
    {
      id: 2,
      image: "/articles/article2.png",
      title: "أخبار أقتصادية ",
      description:
        "د. عبد المنعم السيد يوضح تأثير رفع سعر الفائدة من قبل المركزي الأمريكي",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "month",
    },
    {
      id: 3,
      image: "/articles/article1.png",
      title: "ظهور  اعلامي ",
      description: "مع توالي الأزمات التي تضرب اقتصادات العالم",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "older",
    },
    {
      id: 4,
      image: "/articles/article1.png",
      title: "ظهور  اعلامي ",
      description:
        "د. عبد المنعم السيد يوضح تأثير رفع سعر الفائدة من قبل المركزي الأمريكي",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "week",
    },
    {
      id: 5,
      image: "/articles/article2.png",
      title: "أخبار أقتصادية ",
      description:
        "د. عبد المنعم السيد يوضح تأثير رفع سعر الفائدة من قبل المركزي الأمريكي",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "month",
    },
    {
      id: 6,
      image: "/articles/article2.png",
      title: "أخبار أقتصادية ",
      description:
        "د. عبد المنعم السيد يوضح تأثير رفع سعر الفائدة من قبل المركزي الأمريكي",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
      date: "month",
    },
  ];
  const videos =
    date === "older"
      ? articles.filter((video) => video.date === "older")
      : date === "month"
        ? articles.filter((video) => video.date === "month")
        : date === "week"
          ? articles.filter((video) => video.date === "week")
          : articles;
  return (
    <div className="overflow-hidden">
      <div className="container mb-12">
        <div className="relative text-center lg:text-start ">
          <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
            الظهور الأعلامي
          </h1>
          <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
        </div>
      </div>
      <VideoPopup
        isOpen={!!popupVideo}
        videoSrc={popupVideo}
        onClose={() => setPopupVideo(null)}
      />
      <section
        className={`z-10 py-16 md:py-20 ${styles.swiper_wrapper_custom}`}
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 4.5,
            },
          }}
        >
          {videos.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="h-full"
              onClick={() => setPopupVideo(slide.video)}
            >
              <div className="relative h-60 w-full xl:w-80 overflow-hidden rounded-xl  cursor-pointer">
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-[#EC4D38] p-4 md:p-6 rounded-full">
                    <FaPlay className="text-2xl md:text-3xl text-white" />
                  </div>
                </div>
                {/* Title
                <div className="absolute top-4 inset-s-4 z-10">
                  <div className="bg-white py-2 px-4 rounded-lg inline-block">
                    <h3 className="text-sm font-bold text-[#1E3A5F]">
                      {slide.title}
                    </h3>
                  </div>
                </div> */}

                {/* Description */}
                <div className="absolute bottom-4 inset-e-4 inset-s-4 z-10">
                  <p className="text-base lg:text-lg text-white line-clamp-3">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default MediaVideosSection;
