"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const FieldsSection = () => {
  const [activeTab, setActiveTab] = useState("economy");

  const tabs = [
    { id: "investment", label: "الاستثمار والتمويل" },
    { id: "planning", label: "التخطيط الاستراتيجي" },
    { id: "trade", label: "التجارة الدولية" },
    { id: "economy", label: "الدراسات الاقتصادية" },
    { id: "development", label: "التنمية المستدامة" },
  ];

  const researches = [
    // Investment
    {
      id: 1,
      image: "/researches/research1.png",
      title: "مناخ الاستثمار",
      description: "تقييم البيئة الاستثمارية والفرص المتاحة.",
      type: "investment",
    },
    {
      id: 2,
      image: "/researches/research2.png",
      title: "الاستثمار الأجنبي المباشر",
      description: "تحليل تدفقات الاستثمار الأجنبي وتأثيرها.",
      type: "investment",
    },
    {
      id: 3,
      image: "/researches/research3.png",
      title: "حوافز الاستثمار",
      description: "دراسة السياسات المشجعة لجذب المستثمرين.",
      type: "investment",
    },

    // Planning
    {
      id: 4,
      image: "/researches/research2.png",
      title: "التخطيط الاستراتيجي للمؤسسات",
      description: "دراسة آليات بناء الخطط الاستراتيجية وتحقيق الأهداف.",
      type: "planning",
    },
    {
      id: 5,
      image: "/researches/research1.png",
      title: "إدارة الأداء المؤسسي",
      description: "تحليل أفضل الممارسات في قياس الأداء المؤسسي.",
      type: "planning",
    },
    {
      id: 6,
      image: "/researches/research3.png",
      title: "إدارة المخاطر",
      description: "تطوير استراتيجيات فعالة لإدارة المخاطر المؤسسية.",
      type: "planning",
    },

    // Trade
    {
      id: 7,
      image: "/researches/research3.png",
      title: "التجارة الدولية",
      description: "تحليل حركة التجارة العالمية وأثرها على الاقتصاد.",
      type: "trade",
    },
    {
      id: 8,
      image: "/researches/research2.png",
      title: "اتفاقيات التجارة الحرة",
      description: "دراسة تأثير الاتفاقيات التجارية على الأسواق.",
      type: "trade",
    },
    {
      id: 9,
      image: "/researches/research1.png",
      title: "سلاسل الإمداد العالمية",
      description: "تحليل التحديات والفرص في سلاسل الإمداد.",
      type: "trade",
    },

    // Economy
    {
      id: 10,
      image: "/researches/research1.png",
      title: "تحليل أداء الاقتصاد المصري",
      description: "دراسة شاملة لمؤشرات النمو والتضخم والسياسات النقدية.",
      type: "economy",
    },
    {
      id: 11,
      image: "/researches/research2.png",
      title: "معدلات التضخم وتأثيرها",
      description: "تحليل تأثير التضخم على الأسواق والقدرة الشرائية.",
      type: "economy",
    },
    {
      id: 12,
      image: "/researches/research3.png",
      title: "السياسات المالية الحديثة",
      description: "تقييم أثر السياسات المالية على الاقتصاد الكلي.",
      type: "economy",
    },

    // Development
    {
      id: 13,
      image: "/researches/research1.png",
      title: "أهداف التنمية المستدامة",
      description: "تحليل جهود تحقيق أهداف التنمية المستدامة.",
      type: "development",
    },
    {
      id: 14,
      image: "/researches/research3.png",
      title: "الاقتصاد الأخضر",
      description: "دراسة التحول نحو اقتصاد أكثر استدامة.",
      type: "development",
    },
    {
      id: 15,
      image: "/researches/research2.png",
      title: "الطاقة المتجددة",
      description: "أثر مشروعات الطاقة النظيفة على التنمية.",
      type: "development",
    },
  ];
  const selectedResearches = researches.filter(
    (research) => research.type === activeTab,
  );
  return (
    <div className="container">
      <div className="relative text-center lg:text-start mb-10 ">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl ">
          مجالاتنا البحثية
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>{" "}
      <div className="bg-[#F8F8F8] px-3 py-4 rounded-3xl mb-10 container">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.6}
          breakpoints={{
            640: {
              slidesPerView: 3.6,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id}>
              <button
                className={`w-full font-bold  lg:text-xl px-2 py-3 rounded-3xl cursor-pointer transition-colors ${
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
      <div className="bg-[#F8F8F8] rounded-4xl px-6 py-4 ">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {selectedResearches.map((research) => {
            return (
              <Link key={research.id} href={`/`}>
                <div>
                  <div className="relative w-full xl:w-96 h-64 ">
                    <Image
                      src={research.image}
                      alt={research.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-3 my-4">
                    <h3 className="text-[#434343] text-base lg:text-lg font-bold">
                      {research.title}
                    </h3>

                    <h4 className="text-[#434343] text-lg font-semibold shrink-0">
                      {research.date}
                    </h4>
                  </div>

                  <h1 className="text-[#18181A] font-semibold text-xl lg:text-2xl">
                    {research.description}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FieldsSection;
