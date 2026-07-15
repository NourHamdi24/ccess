import Image from "next/image";
import React from "react";

const Development = ({ services }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-5 md:p-6 lg:p-8 border border-[rgba(30,58,95,0.39)] rounded-2xl ${
            service.id % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-2/5 shrink-0">
            <Image
              src={service.image}
              alt="service"
              width={999}
              height={999}
              className="rounded-lg w-full h-56 sm:h-72 lg:h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-3/5 text-center lg:text-start">
            <div className="w-14 h-14 md:w-16 md:h-16 p-3 md:p-4 rounded-2xl bg-[rgba(30,58,95,0.1)] mb-5 mx-auto lg:mx-0">
              <Image
                src="/services/Icon1.png"
                alt="icon"
                width={50}
                height={50}
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#434343] font-bold mb-4">
              {service.type}
            </h1>

            <p className="text-base md:text-lg lg:text-2xl text-[#18181A] font-semibold leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Development;
