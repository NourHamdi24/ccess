import Image from "next/image";
import React from "react";
const NewStatementSection = () => {
  return (
    <div className="container  overflow-visible">
      <div className="grid grid-cols-1  lg:grid-cols-3 items-center justify-items-center lg:justify-items-normal lg:gap-50 xl:gap-0 relative  rounded-[50px] bg-linear-to-br from-[#3E78C5] to-[#1E3A5F]">
        <div className=" lg:relative w-80 lg:w-108 xl:w-auto">
          <Image
            src="/ceo.png"
            alt="ceo"
            width={600}
            height={600}
            className="lg:absolute lg:bottom-0 lg:translate-y-46.5 xl:translate-y-42.5 lg:right-0"
          />
        </div>

        <div className="lg:col-span-2  xl:px-16 py-8 relative text-white">
          <Image
            src="/quote.png"
            alt="quote mark"
            width={64}
            height={64}
            className="absolute hidden lg:block top-4 lg:-right-18 xl:-right-6"
          />
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 w-full text-center lg:text-start">
            كلمة رئيس المركز
          </h1>
          <div className="text-lg md:text-xl font-light mb-3 text-[#EDEDED] px-2 xl:px-0 relative w-full  lg:w-2/3">
            <h1 className="text-center lg:text-start lg:pr-8 leading-relaxed">
              &quot;نلتزم في مركز القاهرة للدراسات الاقتصادية والاستراتيجية
              بتقديم أبحاث ودراسات علمية رصينة تساهم في صنع القرارات الاقتصادية
              الوطنية. نؤمن بأن البحث العلمي هو أساس التنمية المستدامة والتقدم
              الاقتصادي.&quot;
            </h1>
            <div className="hidden lg:block absolute inset-s-0 top-1/2 -translate-y-1/2 h-40 w-1 bg-[#EC4D38]" />
          </div>
          <div className="flex justify-end px-2 xl:px-0 lg:justify-start items-center gap-4 lg:gap-36 mt-4 w-full">
            <div className="">
              <h2 className="text-lg md:text-2xl font-bold">
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

export default NewStatementSection;
