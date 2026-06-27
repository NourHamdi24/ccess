import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";

const ConsultationSection = () => {
  return (
    <div className="container flex flex-col items-center gap-6 bg-linear-to-b from-[#3E78C5] to-[#1E3A5F] text-white px-6 sm:px-10 lg:px-20 py-10 lg:py-15 rounded-3xl lg:rounded-4xl">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center leading-tight mb-2">
        هل تحتاج إلى استشارة اقتصادية متخصصة؟
      </h1>

      <h2 className="text-lg sm:text-xl lg:text-2xl text-center leading-relaxed max-w-4xl">
        فريقنا من الخبراء مستعد لمساعدتك في تحليل البيانات الاقتصادية واتخاذ
        القرارات الاستراتيجية الصحيحة
      </h2>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-4 mt-4">
        <Link
          href="/contact-us"
          className="rounded-3xl bg-white flex items-center justify-center px-6 lg:px-7 py-4 gap-4 lg:gap-6"
        >
          <h3 className="text-lg lg:text-2xl text-[#6A7282]">احجز استشارة</h3>

          <span className="text-2xl lg:text-3xl transition hover:-translate-x-1 text-[#1E3A5F]">
            ←
          </span>
        </Link>

        <Link
          href="/contact-us"
          className="rounded-3xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] flex items-center justify-center px-6 lg:px-7 py-4 gap-4 lg:gap-6"
        >
          <FaPhone className="text-lg lg:text-xl" />

          <h3 className="text-lg lg:text-2xl text-white">احجز استشارة</h3>
        </Link>
      </div>
    </div>
  );
};

export default ConsultationSection;
