import Image from "next/image";
import React from "react";

const GallerySection = () => {
  const gallery = [
    { id: 0, image: "/gallery/1.png" },
    { id: 1, image: "/gallery/2.png" },
    { id: 2, image: "/gallery/3.png" },
    { id: 3, image: "/gallery/1.png" },
    { id: 4, image: "/gallery/2.png" },
    { id: 5, image: "/gallery/3.png" },
  ];
  return (
    <div className="container">
      <div className="mb-12">
        <div className="relative text-center lg:text-start">
          <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
            معرض المركز
          </h1>

          <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {gallery.map((pic) => (
          <div
            key={pic.id}
            className="w-full aspect-[4/4.5] overflow-hidden rounded-2xl"
          >
            <Image
              src={pic.image}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
