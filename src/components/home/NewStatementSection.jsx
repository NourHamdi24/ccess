import Image from "next/image";
import React from "react";

const StatementSection = () => {
  return (
    <div className="container  overflow-visible">
      <div className="grid grid-cols-3 items-center relative  rounded-[50px] bg-linear-to-br from-[#3E78C5] to-[#1E3A5F]">
        <div className="relative ">
          <Image
            src="/ceo.png"
            alt="ceo"
            width={600}
            height={600}
            className="absolute bottom-0 translate-y-42.5 right-0"
          />
        </div>

        <div className="col-span-2 px-16 py-8 relative text-white">
          <Image
            src="/quote.png"
            alt="quote mark"
            width={64}
            height={64}
            className="absolute hidden lg:block top-4 -right-6"
          />
          <h1 className="text-2xl lg:text-3xl font-semibold mb-8 w-full text-center lg:text-start">
            كلمة رئيس المركز
          </h1>
          <div className="text-lg lg:text-xl font-light mb-3 text-[#EDEDED] relative w-full lg:w-2/3">
            <h1 className="text-center lg:text-start lg:pr-8 leading-relaxed">
              &quot;نلتزم في مركز القاهرة للدراسات الاقتصادية والاستراتيجية
              بتقديم أبحاث ودراسات علمية رصينة تساهم في صنع القرارات الاقتصادية
              الوطنية. نؤمن بأن البحث العلمي هو أساس التنمية المستدامة والتقدم
              الاقتصادي.&quot;
            </h1>
            <div className="hidden lg:block absolute inset-s-0 top-1/2 -translate-y-1/2 h-40 w-1 bg-[#EC4D38]" />
          </div>
          <div className="flex justify-start items-center gap-4 lg:gap-36 mt-4 w-full">
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
              className="w-10 h-10 hidden lg:block lg:w-16 lg:h-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementSection;
