import Image from "next/image";
import Link from "next/link";
import React from "react";

const ForumSection = () => {
  return (
    <div className="container">
      {" "}
      <div className="relative text-center lg:text-start mb-16 ">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          منتدي الأقتصاد العالمي
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-3xl h-67.5 bg-linear-to-l from-[#0065F2] to-[#FFFFFF]">
          {/* Background image (left side only) */}
          <div className="absolute left-0 top-0 h-full w-[42%]">
            <Image
              src="/forum/forum1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-center text-right text-white p-8 md:px-10">
            <p className="text-xl md:text-2xl font-bold mb-5 md:mb-8">
              التنبؤات الاقتصادية
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
              ارتفاع اسعار الدولار الفترة القادمة
            </h2>

            <div className="flex items-center justify-start gap-4">
              <span className="md:text-lg cursor-pointer">اعرف المزيد</span>

              <button className="text-2xl md:text-3xl transition hover:-translate-x-1">
                ←
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl h-67.5 bg-linear-to-l from-[#1B2439] to-[#55658F]">
          {/* Background image (left side only) */}
          <div className="absolute left-0 top-0 h-full w-[42%]">
            <Image
              src="/forum/forum2.png"
              alt=""
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-center text-right text-white p-8 md:px-10">
            <p className="text-xl md:text-2xl font-bold mb-5 md:mb-8">
              التنبؤات الاقتصادية
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
              هبوط الذهب اليوم
            </h2>

            <div className="flex items-center justify-start gap-4">
              <span className="md:text-lg cursor-pointer">اعرف المزيد</span>

              <button className="text-2xl md:text-3xl transition hover:-translate-x-1">
                ←
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumSection;
