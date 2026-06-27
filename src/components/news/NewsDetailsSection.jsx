import Link from "next/link";
import React from "react";

const NewsDetailsSection = () => {
  return (
    <div className="container mb-40 ">
      <div className="flex justify-between items-center mb-8">
        <p className="text-[#434343] font-bold text-xl">أخبار أقتصادية </p>
        <p className="text-[#434343] font-semibold text-xs">
          الاثنين 15 يونية 2026 | 02:07 مساء
        </p>
      </div>
      <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#18181A] mb-8">
        «المركزي»: تدفقات قياسية لتحويلات العاملين في الخارج بقيمة 39.2 مليار
        دولار في 10 شهور
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1E3A5F] mb-6 leading-relaxed">
        أعلن البنك المركزي المصري أن تحويلات المصريين العاملين بالخارج واصلت
        وتيرتها المتصاعدة، حيث ارتفعت خلال الفترة يوليو/أبريل 2025/2026 بمعدل
        33.2% لتسجل تدفقات قياسية بلغت نحو 39.2 مليار دولار (مقابل نحو 29.4
        مليار دولار خلال الفترة يوليو/أبريل 2024/2025).
      </p>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1E3A5F] mb-14 leading-relaxed">
        وعلى المستوى الشهري، ارتفعت التحويلات خلال شهر أبريل 2026 بمعدل 44.0%
        لتسجل نحو 4.3 مليار دولار (مقابل نحو 3.0 مليارات دولار خلال شهر أبريل
        2025).
      </p>

      <div className="flex justify-center items-center">
        <Link
          className="text-white px-16 py-4 text-base sm:text-lg md:text-xl rounded-3xl bg-[#1E3A5F]"
          href="/"
        >
          الرجوع للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsSection;
