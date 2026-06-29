import Image from "next/image";
import Link from "next/link";
import React from "react";

const MediaIntrosSection = ({ date }) => {
  const news = [
    {
      id: 1,
      image: "/articles/article1.png",
      title: "أخبار عن المركز ",
      description:
        "حضور د عبد المنعم اخر فاعليات مركز القاهرة للدراسات الاقتصادية والاستيراتيجية.",
      date: "منذ يومين",
      release: "week",
    },
    {
      id: 2,
      image: "/articles/article2.png",
      title: "أخبار عن المركز ",
      description: "إطلاق مبادرة البحث الاقتصادي للشباب",
      date: "منذ يومين",
      release: "month",
    },
    {
      id: 3,
      image: "/articles/article2.png",
      title: "أخبار عن المركز ",
      description:
        "تصريحات الدكتور عبدالمنعم السيد احول جهود الدولة المصرية للحفاظ علي الهدوء بالمنطقة.",
      date: "منذ يومين",
      release: "older",
    },
  ];
  const selectedNews =
    date === "older"
      ? news.filter((video) => video.release === "older")
      : date === "month"
        ? news.filter((video) => video.release === "month")
        : date === "week"
          ? news.filter((video) => video.release === "week")
          : news;
  return (
    <section className="container">
      <div className="relative text-center lg:text-start mb-16 container">
        <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
          مداخلات إعلامية
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>
      <div className="bg-[#F8F8F8] rounded-4xl px-10 py-8 ">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {selectedNews.map((article) => {
            return (
              <Link key={article.id} href={`/news/${article.id}`}>
                <div>
                  <div className="relative w-full xl:w-96 h-64 ">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-3 my-4">
                    <h3 className="text-[#434343] text-base lg:text-lg font-bold">
                      {article.title}
                    </h3>

                    <h4 className="text-[#434343] text-lg font-semibold shrink-0">
                      {article.date}
                    </h4>
                  </div>

                  <h1 className="text-[#18181A] font-semibold text-xl lg:text-2xl">
                    {article.description}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MediaIntrosSection;
