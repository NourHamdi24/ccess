"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

const LatestSection = () => {
  const slides = [
    {
      title: "سياسات",
      description: "د عبد المنعم السيد: اتفاق واشنطن وطهران يدعم تراجع النفط",
      image: "/latestSlide.png",
    },
    {
      title: "مقالات",
      description: "مقال د عبدالمنعم السيد منشور في مجله المصور",
      image: "/latestSlide.png",
    },
    {
      title: "سياسات",
      description: "د عبد المنعم السيد: اتفاق واشنطن وطهران يدعم تراجع النفط",
      image: "/latestSlide.png",
    },
    {
      title: "مقالات",
      description: "مقال د عبدالمنعم السيد منشور في مجله المصور",
      image: "/latestSlide.png",
    },
    {
      title: "سياسات",
      description: "د عبد المنعم السيد: اتفاق واشنطن وطهران يدعم تراجع النفط",
      image: "/latestSlide.png",
    },
    {
      title: "مقالات",
      description: "مقال د عبدالمنعم السيد منشور في مجله المصور",
      image: "/latestSlide.png",
    },
    {
      title: "سياسات",
      description: "د عبد المنعم السيد: اتفاق واشنطن وطهران يدعم تراجع النفط",
      image: "/latestSlide.png",
    },
    {
      title: "مقالات",
      description: "مقال د عبدالمنعم السيد منشور في مجله المصور",
      image: "/latestSlide.png",
    },
    {
      title: "سياسات",
      description: "د عبد المنعم السيد: اتفاق واشنطن وطهران يدعم تراجع النفط",
      image: "/latestSlide.png",
    },
    {
      title: "مقالات",
      description: "مقال د عبدالمنعم السيد منشور في مجله المصور",
      image: "/latestSlide.png",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative text-center lg:text-start mb-16 container">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          أحدث الإصدارات
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>

      <section
        className="relative bg-cover h-124 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/latestBg.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 py-16 md:py-24 px-4 lg:px-0 lg:ml-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
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
                slidesPerView: 5,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="relative h-60 w-full xl:w-80 overflow-hidden rounded-xl group cursor-pointer">
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

                  {/* Title */}
                  <div className="absolute top-4 inset-s-4 z-10">
                    <div className="bg-white py-2 px-4 rounded-lg inline-block">
                      <h3 className="text-sm font-bold text-[#1E3A5F]">
                        {slide.title}
                      </h3>
                    </div>
                  </div>

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
        </div>
      </section>
    </div>
  );
};

export default LatestSection;
