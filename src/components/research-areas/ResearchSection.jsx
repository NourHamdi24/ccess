"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ResearchSection = () => {
  const [activeTab, setActiveTab] = useState("economy");

  const tabs = [
    { id: "economy", label: "الاقتصاد الكلي" },
    { id: "industry", label: "الصناعة" },
    { id: "investment", label: "الاستثمار" },
    { id: "development", label: "التنمية المستدامة" },
    { id: "realEstate", label: "العقارات" },
  ];

  const researches = [
    // Economy
    {
      id: 1,
      image: "/researches/research1.png",
      title: "تحليل أداء الاقتصاد المصري",
      description: "دراسة شاملة لمؤشرات النمو والتضخم والسياسات النقدية.",
      type: "economy",
    },
    {
      id: 2,
      image: "/researches/research2.png",
      title: "معدلات التضخم وتأثيرها",
      description: "تحليل تأثير التضخم على الأسواق والقدرة الشرائية.",
      type: "economy",
    },
    {
      id: 3,
      image: "/researches/research3.png",
      title: "السياسات المالية الحديثة",
      description: "تقييم أثر السياسات المالية على الاقتصاد الكلي.",
      type: "economy",
    },

    // Industry
    {
      id: 4,
      image: "/researches/research2.png",
      title: "تطوير القطاع الصناعي",
      description: "دراسة فرص تعزيز الإنتاج الصناعي المحلي.",
      type: "industry",
    },
    {
      id: 5,
      image: "/researches/research1.png",
      title: "الصناعات التصديرية",
      description: "تحليل مساهمة الصناعات التصديرية في الاقتصاد.",
      type: "industry",
    },
    {
      id: 6,
      image: "/researches/research3.png",
      title: "التكنولوجيا في الصناعة",
      description: "أثر التحول الرقمي على كفاءة المصانع.",
      type: "industry",
    },

    // Investment
    {
      id: 7,
      image: "/researches/research3.png",
      title: "مناخ الاستثمار",
      description: "تقييم البيئة الاستثمارية والفرص المتاحة.",
      type: "investment",
    },
    {
      id: 8,
      image: "/researches/research2.png",
      title: "الاستثمار الأجنبي المباشر",
      description: "تحليل تدفقات الاستثمار الأجنبي وتأثيرها.",
      type: "investment",
    },
    {
      id: 9,
      image: "/researches/research1.png",
      title: "حوافز الاستثمار",
      description: "دراسة السياسات المشجعة لجذب المستثمرين.",
      type: "investment",
    },

    // Development
    {
      id: 10,
      image: "/researches/research1.png",
      title: "أهداف التنمية المستدامة",
      description: "تحليل جهود تحقيق أهداف التنمية المستدامة.",
      type: "development",
    },
    {
      id: 11,
      image: "/researches/research3.png",
      title: "الاقتصاد الأخضر",
      description: "دراسة التحول نحو اقتصاد أكثر استدامة.",
      type: "development",
    },
    {
      id: 12,
      image: "/researches/research1.png",
      title: "الطاقة المتجددة",
      description: "أثر مشروعات الطاقة النظيفة على التنمية.",
      type: "development",
    },

    // Real Estate
    {
      id: 13,
      image: "/researches/research2.png",
      title: "سوق العقارات المصري",
      description: "تحليل تطورات أسعار العقارات والطلب.",
      type: "realEstate",
    },
    {
      id: 14,
      image: "/researches/research3.png",
      title: "الاستثمار العقاري",
      description: "تقييم الفرص الاستثمارية في القطاع العقاري.",
      type: "realEstate",
    },
    {
      id: 15,
      image: "/researches/research2.png",
      title: "المدن الجديدة",
      description: "دراسة تأثير مشروعات المدن الجديدة على السوق.",
      type: "realEstate",
    },
  ];
  const selectedResearches =
    activeTab === "industry"
      ? researches.filter((research) => research.type === "industry")
      : activeTab === "investment"
        ? researches.filter((research) => research.type === "investment")
        : activeTab === "development"
          ? researches.filter((research) => research.type === "development")
          : activeTab === "realEstate"
            ? researches.filter((research) => research.type === "realEstate")
            : researches.filter((research) => research.type === "economy");

  return (
    <div className="container">
      <div className="relative text-center lg:text-start mb-10 ">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl ">
          أبحاثنا ومجالاتنا
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>{" "}
      <div className="bg-[#F8F8F8] px-3 py-4 flex justify-evenly flex-wrap items-center gap-4 rounded-3xl mb-10 container">
        {" "}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` font-bold text-2xl px-4 py-3 rounded-3xl cursor-pointer ${activeTab === tab.id ? "text-white bg-[#1E3A5F]" : "text-[#1E3A5F] bg-white"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <p>{tab.label}</p>
          </button>
        ))}
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

export default ResearchSection;
