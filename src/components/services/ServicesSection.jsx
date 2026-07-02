"use client";

import { useState } from "react";
import Development from "./Development";
import Finance from "./Finance";
import Research from "./Research";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const ServicesSection = () => {
  const tabs = [
    { id: "research", label: " الدراسات والبحوث الاقتصادية" },
    { id: "finance", label: "الاستشارات المالية والاستثمارية" },
    { id: "development", label: "التطوير المؤسسي والاستراتيجي" },
  ];
  const services = [
    // Research
    {
      id: 1,
      category_id: "research",
      type: "دراسات الجدوى الاقتصادية والمالية",
      description:
        "نُعد دراسات جدوى متكاملة للمشروعات الاستثمارية، تتضمن التحليل المالي والاقتصادي والتشغيلي، بهدف تقييم فرص النجاح وتقليل المخاطر ودعم اتخاذ القرار الاستثماري.",
      image: "/services/service1.jpg",
    },
    {
      id: 2,
      category_id: "research",
      type: "البحوث والدراسات الاقتصادية",
      description:
        "نقدم بحوثًا ودراسات اقتصادية متخصصة تعتمد على التحليل العلمي والبيانات الدقيقة لفهم التحديات والفرص في مختلف القطاعات الاقتصادية.",

      image: "/services/service2.jpg",
    },

    // Finance
    {
      id: 3,
      category_id: "finance",
      type: "التحليل المالي والمؤشرات الاقتصادية",
      description:
        "نوفر خدمات التحليل المالي وتقييم الأداء من خلال دراسة المؤشرات المالية والاقتصادية، بما يساعد المؤسسات على تحسين كفاءتها وتعزيز قدرتها التنافسية.",
      image: "/services/service3.jpg",
    },
    {
      id: 4,
      category_id: "finance",
      type: "الاستشارات المالية والاقتصادية ",
      description:
        "نقدم حلولًا واستشارات متكاملة تساعد المؤسسات على مواجهة التحديات الاقتصادية والمالية واتخاذ قرارات أكثر فاعلية واستدامة.",
      image: "/services/service4.jpg",
    },

    // Development
    {
      id: 5,
      category_id: "development",
      type: "إعادة هيكلة الشركات",
      description:
        "نساعد المؤسسات على إعادة هيكلة أنظمتها المالية والإدارية والتشغيلية بهدف رفع كفاءة الأداء وتحسين الربحية وتحقيق النمو المستدام.",
      image: "/services/service2.jpg",
    },
    {
      id: 6,
      category_id: "development",
      type: "التخطيط الاستراتيجي وخطط الأعمال",
      description:
        "نُعد الخطط الاستراتيجية وخطط الأعمال التي تدعم تحقيق الأهداف المؤسسية وتعزز فرص النمو والتوسع في الأسواق المختلفة.",
      image: "/services/service1.jpg",
    },
  ];
  const [activeTab, setActiveTab] = useState("research");
  const renderTab = () => {
    switch (activeTab) {
      case "finance":
        return (
          <Finance
            services={services.filter(
              (service) => service.category_id === "finance",
            )}
          />
        );
      case "development":
        return (
          <Development
            services={services.filter(
              (service) => service.category_id === "development",
            )}
          />
        );
      default:
        return (
          <Research
            services={services.filter(
              (service) => service.category_id === "research",
            )}
          />
        );
    }
  };
  return (
    <div className="container">
      <div className="bg-[#F8F8F8] px-3 py-4 rounded-3xl mb-10 container">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.6}
          breakpoints={{
            640: {
              slidesPerView: 2.6,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {tabs.map((tab) => (
            <SwiperSlide key={tab.id}>
              <button
                className={`w-full font-bold text-lg  lg:text-2xl px-2 py-3 rounded-3xl cursor-pointer transition-colors ${
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
      <div className="relative text-center lg:text-start mb-16">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          خدمتنا
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <div>{renderTab()}</div>
    </div>
  );
};

export default ServicesSection;
