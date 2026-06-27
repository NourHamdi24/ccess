import Image from "next/image";
import React from "react";

const StatementSection = () => {
  return (
    <div className="container pt-8 px-6  md:px-24 md:pt-24 lg:pt-0 lg:px-16   rounded-[50px] bg-linear-to-br from-[#3E78C5] to-[#1E3A5F] overflow-visible">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div
          className="w-full lg:w-125 h-80 sm:h-96 lg:h-112.5 -mt-8 relative shrink-0"
          style={{ clipPath: "inset(-9999px 0 0 0)" }}
        >
          <Image
            src="/president.png"
            alt="President"
            width={500}
            height={450}
            className="w-full h-full object-cover overflow-visible"
          />
          <Image
            src="/quote.png"
            alt="quote mark"
            width={64}
            height={64}
            className="absolute hidden lg:visible top-10 left-0"
          />
        </div>

        <div className="flex flex-col w-full lg:w-130 items-start gap-8 text-white pb-8 lg:pb-0">
          <h1 className="text-2xl lg:text-3xl font-semibold w-full text-center lg:text-start">
            كلمة رئيس المركز
          </h1>
          <div className="text-lg lg:text-2xl font-light text-[#EDEDED] relative w-full">
            <h1 className="text-center lg:text-start lg:pr-8">
              &quot;نلتزم في مركز القاهرة للدراسات الاقتصادية والاستراتيجية
              بتقديم أبحاث ودراسات علمية رصينة تساهم في صنع القرارات الاقتصادية
              الوطنية. نؤمن بأن البحث العلمي هو أساس التنمية المستدامة والتقدم
              الاقتصادي.&quot;
            </h1>
            <div className="hidden lg:block absolute inset-s-0 top-1/2 -translate-y-1/2 h-40 w-1 bg-[#EC4D38]" />
          </div>
          <div className="flex justify-between items-center gap-4 lg:gap-36 mt-4 w-full">
            <div className="">
              <h2 className="text-xl lg:text-2xl font-bold">
                د.عبد المنعم السيد
              </h2>
              <p className="font-semibold text-sm lg:text-base">
                رئيس مجلس الإدارة والمدير التنفيذي
              </p>
            </div>
            <Image
              src="/quoteflipped.png"
              alt="quote mark"
              width={64}
              height={64}
              className="w-10 h-10 hidden lg:visible lg:w-16 lg:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementSection;
