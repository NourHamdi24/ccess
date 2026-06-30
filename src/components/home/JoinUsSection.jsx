import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const JoinUsSection = () => {
  const items = [
    {
      id: 1,
      title: "محلل بيانات",
      department: "قسم التحاليل",
      shift: "دوام كامل",
    },
    {
      id: 2,
      title: "باحث اقتصادي أول",
      department: "قسم الابحاث ",
      shift: "دوام كامل",
    },
    {
      id: 3,
      title: "مستشار استيراتيجي",
      department: "قسم الاستشارات ",
      shift: "دوام كامل",
    },
  ];
  const locale = useLocale();

  return (
    <section className="container">
      <div className="relative text-center lg:text-start mb-16 ">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          أنضم إلي فريقنا
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <div className="px-8 mb-8">
        <h2 className="text-[#717182] text-3xl">
          نبحث دائماً عن المواهب المتميزة للانضمام إلى فريق العمل
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 py-6 px-5 md:px-10 border-[.8px] border-[rgba(0,0,0,0.1)] rounded-4xl bg-[rgba(236,238,242,0.2)]"
          >
            <div className="text-center md:text-start">
              <h1 className="text-[#1E3A5F] text-2xl md:text-3xl font-semibold">
                {item.title}
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-8 mt-2 text-base md:text-xl text-[#717182]">
                <p>{item.department}</p>
                <p>{item.shift}</p>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <Link
                href={`/${locale}/jobs/${item.id}`}
                className="block w-full md:w-auto text-center bg-[#1E3A5F] text-white font-bold px-5 py-3 rounded-2xl"
              >
                اذهب للتقديم
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/jobs"
        className="flex justify-center md:justify-end items-center gap-6 mt-4"
      >
        <h3 className="text-2xl text-[#6A7282]">عرض جميع الوظائف المتاحة</h3>
        <button className="text-2xl md:text-3xl transition hover:-translate-x-1 text-[#1E3A5F]">
          ←
        </button>
      </Link>
    </section>
  );
};

export default JoinUsSection;
