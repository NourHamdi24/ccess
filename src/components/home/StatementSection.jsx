import Image from "next/image";
import React from "react";
const StatementSection = () => {
  return (
    <div className="container  overflow-visible">
      <div className="grid grid-cols-1  lg:grid-cols-3 items-center justify-items-center lg:justify-items-normal lg:gap-50 xl:gap-0 relative  rounded-[50px] bg-linear-to-br from-[#6FA0DA] to-[#2E547D]">
        <div className="relative w-80 lg:w-108 pt-4 xl:w-auto ">
          <div className="absolute inset-x-1  bottom-8 md:bottom-14 md:inset-x-3  top-0 rounded-full border border-white lg:border-0 bg-white/10 lg:bg-transparent" />
          <Image
            src="/Object.png"
            alt="object"
            width={92}
            height={281}
            className="absolute  w-20 h-auto top-6 lg:-top-30 right-4 lg:right-6"
          />
          <div className="relative z-10 -top-8 md:-top-14 block lg:hidden overflow-hidden rounded-b-full h-full">
            <Image src="/smallceo.svg" alt="ceo" width={900} height={900} />
          </div>

          <Image
            src="/ceo.svg"
            alt="ceo"
            width={600}
            height={600}
            className="relative z-10 hidden lg:block lg:absolute lg:bottom-0 lg:translate-y-46.5 xl:translate-y-42.5 lg:right-0 lg:[clip-path:inset(0_0_2%_0)]"
          />
        </div>

        <div className="lg:col-span-2  xl:px-16 py-8 relative text-white">
          <Image
            src="/quote.png"
            alt="quote mark"
            width={64}
            height={64}
            className="absolute w-10 lg:w-16 lg:block top-2 lg:top-4 right-6 lg:-right-18 xl:-right-6"
          />
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 w-full text-center lg:text-start">
            كلمة رئيس المركز
          </h1>
          <div className="text-lg md:text-xl font-light mb-3 text-[#EDEDED] px-6 xl:px-0 relative w-full lg:w-2/3">
            <h1 className="text-start lg:pr-8 leading-relaxed">
              &quot;نلتزم في مركز القاهرة للدراسات الاقتصادية والاستراتيجية
              بتقديم أبحاث ودراسات علمية رصينة تساهم في صنع القرارات الاقتصادية
              الوطنية. نؤمن بأن البحث العلمي هو أساس التنمية المستدامة والتقدم
              الاقتصادي.&quot;
            </h1>
            <div className="absolute inset-s-3   lg:inset-s-0 top-1/2 -translate-y-1/2 h-34 lg:h-40 w-1 bg-[#EC4D38]" />
          </div>
          <div className="flex flex-col lg:flex-row justify-center text-center lg:text-start px-2 xl:px-0 lg:justify-start items-end lg:items-center gap-2 lg:gap-36 mt-4 w-full">
            <Image
              src="/quoteflipped.png"
              alt="quote mark"
              width={64}
              height={64}
              className="w-10 h-10 order-first lg:order-last lg:w-16 lg:h-16"
            />
            <div className=" self-center">
              <h2 className="text-lg md:text-2xl font-bold">
                د.عبد المنعم السيد
              </h2>
              <p className="font-semibold text-sm lg:text-base">
                رئيس مجلس الإدارة والمدير التنفيذي
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementSection;
