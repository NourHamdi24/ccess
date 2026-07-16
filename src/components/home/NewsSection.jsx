"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoPopup from "./VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const NewsSection = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  const articles = [
    {
      id: 1,
      image: "/articles/article1.png",
      title: "أخبار أقتصادية ",
      description:
        "«المركزي»: تدفقات قياسية لتحويلات العاملين في الخارج بقيمة 39.2 مليار دولار في 10 شهور",
      date: "الاثنين 15 يونية 2026 | 02:07 مساء",
    },
    {
      id: 2,
      image: "/articles/article2.png",
      title: "أخبار أقتصادية ",
      description:
        "خبير اقتصادي :صفقة كويك فويل تدعم برنامج الطروحات الحكومية ",
      date: "الاثنين 15 يونية 2026 | 02:07 مساء",
    },
    {
      id: 3,
      image: "/articles/article1.png",
      title: "ظهور  اعلامي ",
      description:
        "مداخله د عبدالمنعم السيد  بقناه الحدث و تعليق علي ازمه السحب من ماكينات ATM  قبل العيد حجم المسحوبات الذي تجاوز 9 مليار جنيه ",
      date: "الاثنين 15 يونية 2026 | 02:07 مساء",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
    },
    {
      id: 4,
      image: "/articles/article2.png",
      title: "أخبار أقتصادية ",
      description:
        "صرف 400 جنيه على بطاقة التموين قبل عيد الأضحى.. التموين تزف بشرى سارة للمستحقين",
      date: "الاثنين 15 يونية 2026 | 02:07 مساء",
    },
    {
      id: 5,
      image: "/articles/article1.png",
      title: "ظهور  اعلامي ",
      description:
        "تصريحات الدكتور عبدالمنعم السيد  حول حسن فرص الاستثمار للمواطن المصري في ٢٠٢٦",
      date: "الاثنين 15 يونية 2026 | 02:07 مساء",
      video: "https://www.youtube.com/embed/etVyK08zdZM",
    },
  ];
  return (
    <section className="container ">
      <VideoPopup
        isOpen={!!popupVideo}
        videoSrc={popupVideo}
        onClose={() => setPopupVideo(null)}
      />
      <div className="relative text-center lg:text-start mb-16">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          تسليط الضوء
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {articles.map((article) => {
          return article.video ? (
            <SwiperSlide key={article.id} className="!h-auto">
              <div>
                <div
                  className="relative w-full xl:w-100 h-64 lg:h-72"
                  onClick={() => setPopupVideo(article.video)}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />

                  <div className="absolute inset-0 bg-black/40 rounded-t-2xl" />

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-[#EC4D38] p-4 lg:p-6 rounded-full">
                      <FaPlay className="text-2xl lg:text-3xl text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-3 my-4">
                  <h3 className="text-[#434343] text-base lg:text-lg">
                    {article.title}
                  </h3>

                  <h4 className="text-[#434343] text-xs font-semibold shrink-0">
                    {article.date}
                  </h4>
                </div>

                <h1 className="text-[#18181A] font-semibold text-xl lg:text-2xl">
                  {article.description}
                </h1>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={article.id} className="!h-auto">
              <Link href={`/news/${article.id}`}>
                <div>
                  <div className="relative w-full xl:w-100 h-64 lg:h-72">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-3 my-4">
                    <h3 className="text-[#434343] text-base lg:text-lg">
                      {article.title}
                    </h3>

                    <h4 className="text-[#434343] text-xs font-semibold shrink-0">
                      {article.date}
                    </h4>
                  </div>

                  <h1 className="text-[#18181A] font-semibold text-xl lg:text-2xl">
                    {article.description}
                  </h1>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default NewsSection;
