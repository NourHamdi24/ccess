import Image from "next/image";
import React from "react";

const FactsSection = () => {
  return (
    <div className="container mb-36 bg-[#F8F8F8] rounded-[50px]">
      <div className="grid grid-cols-4 p-3 lg:p-0">
        <div className="flex flex-col items-center justify-center gap-4  lg:p-6">
          <div className="bg-[rgba(0,0,0,0.1)] p-4 rounded-full">
            <Image
              src="/faxIcon1.svg"
              alt="icon1"
              width={20}
              height={20}
              className="w-6 h-6 lg:w-9 lg:h-9"
            />
          </div>
          <h1 className=" text-2xl lg:text-5xl font-bold text-[#1E3A5F]">
            50+
          </h1>
          <h2 className="text-[#1E3A5F] text-sm lg:text-2xl font-normal">
            أبحاث ودراسات
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 lg:p-6">
          <div className="bg-[rgba(0,0,0,0.1)] p-4 rounded-full">
            <Image
              src="/faxIcon2.svg"
              alt="icon2"
              width={20}
              height={20}
              className="w-6 h-6 lg:w-9 lg:h-9"
            />
          </div>
          <h1 className=" text-2xl lg:text-5xl font-bold text-[#1E3A5F]">
            50+
          </h1>
          <h2 className="text-[#1E3A5F] text-sm lg:text-2xl font-normal">
            باحث وخبير
          </h2>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-18 lg:h-36 border-r border-solid border-[#4A5565]" />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 lg:p-6">
          <div className="bg-[rgba(0,0,0,0.1)] p-4 rounded-full">
            <Image
              src="/faxIcon3.svg"
              alt="icon3"
              width={20}
              height={20}
              className="w-6 h-6 lg:w-9 lg:h-9"
            />
          </div>
          <h1 className=" text-2xl lg:text-5xl font-bold text-[#1E3A5F]">
            80+
          </h1>
          <h2 className="text-[#1E3A5F] text-sm lg:text-2xl font-normal">
            شريك دولي
          </h2>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-18 lg:h-36 border-r border-solid border-[#4A5565]" />
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 lg:p-6">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-18 lg:h-36 border-r border-solid border-[#4A5565]" />

          <div className="bg-[rgba(0,0,0,0.1)] p-4 rounded-full">
            <Image
              src="/faxIcon4.svg"
              alt="icon4"
              width={20}
              height={20}
              className="w-6 h-6 lg:w-9 lg:h-9"
            />
          </div>

          <h1 className=" text-2xl lg:text-5xl font-bold text-[#1E3A5F]">
            15+
          </h1>
          <h2 className="text-[#1E3A5F] text-sm lg:text-2xl font-normal">
            عام من التميز
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
