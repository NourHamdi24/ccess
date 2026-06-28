import React from "react";

const BannerSection = () => {
  return (
    <section className="relative container mt-14 pb-6">
      <div className="rounded-[50px] overflow-x-hidden">
        <div
          className="relative h-162.5 bg-cover bg-center rounded-[50px] overflow-hidden"
          style={{
            backgroundImage: `url(/researchBanner.png)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="w-full md:w-2/3  relative z-10 flex flex-col items-start h-full justify-center gap-4 md:gap-6 px-6 md:px-10 lg:px-16">
            <div className="text-white text-base md:text-xl bg-[#E94E3D] px-5 md:px-8 py-3 md:py-4 rounded-full">
              أبحاثنا ومجالاتنا
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              اخر الأبحاث والدراسات الأقتصادية والاستيراتيجية{" "}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
