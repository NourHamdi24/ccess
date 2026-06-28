"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    image: "/homeBanner.jpg",
    title: "إصدار تقرير شهري حول مؤشرات التضخم وأسعار المستهلك",
    header: "التقارير الدورية",
    subtitle: "رصد وتحليل التطورات في الأسعار والقوة الشرائية",
    link: "/",
  },
  {
    image: "/homeBanner.jpg",
    title: "تعرف أكثر علي سعر الدولار في السوق السوداء اليوم ",
    header: "أبحاث مالية ",
    subtitle: "منصة متكاملة توفر مؤشرات اقتصادية محدثة وأدوات تحليلية متقدمة",
    link: "/",
  },
  {
    image: "/homeBanner.jpg",
    title: "إصدار تقرير شهري حول مؤشرات التضخم وأسعار المستهلك",
    header: "التقارير الدورية",
    subtitle: "رصد وتحليل التطورات في الأسعار والقوة الشرائية",
    link: "/",
  },
  {
    image: "/homeBanner.jpg",
    title: "تعرف أكثر علي سعر الدولار في السوق السوداء اليوم ",
    header: "أبحاث مالية ",
    subtitle: "منصة متكاملة توفر مؤشرات اقتصادية محدثة وأدوات تحليلية متقدمة",
    link: "/",
  },
];

export default function HeroSection() {
  return (
    <section className="relative container mt-14 pb-6">
      <div className="rounded-[50px] overflow-x-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-[650px] bg-cover bg-center rounded-[50px] overflow-hidden"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/80" />

                <div className="w-full md:w-2/3 lg:w-1/2 relative z-10 flex flex-col items-start h-full justify-center gap-4 md:gap-6 px-6 md:px-10 lg:px-16">
                  <div className="text-white text-base md:text-xl bg-[#E94E3D] px-5 md:px-8 py-3 md:py-4 rounded-full">
                    {slide.header}
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                    {slide.title}
                  </h2>
                  <h4 className="text-white text-base md:text-lg mt-2 md:mt-4">
                    {slide.subtitle}
                  </h4>
                  <Link
                    href={slide.link}
                    className="text-white text-base md:text-lg mt-4 md:mt-6 bg-[#E94E3D] px-10 md:px-16 py-3 md:py-4 rounded-full"
                  >
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
