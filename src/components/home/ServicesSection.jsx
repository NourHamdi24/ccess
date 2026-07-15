"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ServicesSection.css";
import "swiper/css";
import "swiper/css/navigation";
const ServicesSection = () => {
  const slides = [
    {
      id: 1,
      title: "إعادة هيكلة الشركات",
      subtitle: "نساعد المؤسسات على إعادة هيكلة.",
      image: "/services/service1.jpg",
      href: "/services/1",
      icon: "/serviceIcon.png",
    },
    {
      id: 2,
      title: "البحوث والدراسات الاقتصادية",
      subtitle: "نقدم بحوثًا ودراسات اقتصادية متخصصة.",
      image: "/services/service2.jpg",
      href: "/services/2",
      icon: "/serviceIcon.png",
    },
    {
      id: 3,
      title: "إعادة هيكلة الشركات",
      subtitle: "نساعد المؤسسات على إعادة هيكلة.",
      image: "/services/service1.jpg",
      href: "/services/3",
      icon: "/serviceIcon.png",
    },
    {
      id: 4,
      title: "البحوث والدراسات الاقتصادية",
      subtitle: "نقدم بحوثًا ودراسات اقتصادية متخصصة.",
      image: "/services/service2.jpg",
      href: "/news/4",
      icon: "",
    },
  ];
  return (
    <div className=" overflow-hidden">
      <div className="relative container text-center lg:text-start mb-16 ">
        <div className="flex items-center justify-around lg:justify-between">
          <h1 className="text-[#1E3A5F] font-bold text-3xl  md:text-4xl">
            خدمتنا
          </h1>
          <span className="absolute hidden lg:block left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />

          <Link href="/services" className="text-[#6A7282] text-2xl">
            عرض الكل
          </Link>
        </div>

        <span className="absolute hidden lg:block left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <div className="w-full  swiper-wrapper-custom  overflow-hidden">
        {" "}
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2.3,
            },
            1600: {
              slidesPerView: 2.5,
            },
          }}
          className="w-full"
        >
          {slides.map((service) => (
            <SwiperSlide key={service.id}>
              <Link
                href={service.href}
                className="block w-full xl:w-140 rounded-2xl bg-[rgba(250,250,250,1)] shadow-sm transition hover:shadow-md"
              >
                {/* Image */}
                <div className="relative h-56 rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-items-start gap-8 mb-6">
                    <div className="flex h-15 w-15 items-center justify-center rounded-md bg-[rgba(30,58,95,0.1)]">
                      <img
                        src="/services/serviceicon.svg"
                        alt="icon"
                        className="h-16 w-16"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[#434343] ">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-2xl font-semibold mb-6 leading-8 text-[#18181A]">
                    {service.subtitle}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;
