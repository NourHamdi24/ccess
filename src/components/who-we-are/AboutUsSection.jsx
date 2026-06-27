import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  const basis = [
    {
      id: 1,
      title: "رسالتنا ",
      subtitle:
        "تقديم أبحاث واستشارات عالية الجودة تدعم التنمية المستدامة وصناعة القرار.",
      icon: "/basis/basis1.png",
    },
    {
      id: 2,
      title: "رؤيتنا",
      subtitle:
        "أن نكون مرجعًا رائدًا في الدراسات الاقتصادية والاستراتيجية على المستويين المحلي والإقليمي.",
      icon: "/basis/basis2.png",
    },
    {
      id: 3,
      title: "قيمنا  ",
      subtitle: "الدقة  المصداقية الابتكار الاحترافية الاستدامة",
      icon: "/basis/basis3.png",
    },
  ];
  return (
    <div className="container">
      <div className="h-150">
        <Image
          src="/ccess.png"
          alt="ccess logo"
          width={900}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-center text-[#1E3A5F] font-semibold text-xl sm:text-2xl md:text-3xl">
        بيت خبرة للدراسات الاقتصادية والاستراتيجية
      </h1>

      <div className="relative text-center lg:text-start my-16">
        <h1 className="text-[#1E3A5F] font-bold text-2xl sm:text-3xl md:text-4xl">
          من نحن
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>

      <div className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-10 text-[#434343]">
        <h2 className="text-[#1E3A5F] mb-6">
          نبذة عن مركز القاهرة للدراسات الأقتصادية والأستيراتيجية
        </h2>

        <p className="mb-6 leading-relaxed">
          مركز متخصص في إعداد الدراسات الاقتصادية والاستراتيجية وتقديم التحليلات
          المالية والاستشارات التنموية التي تدعم متخذي القرار والجهات الحكومية
          والخاصة. نعمل على تقديم رؤى قائمة على البيانات وأبحاث متعمقة تساهم في
          تحقيق التنمية المستدامة وتعزيز كفاءة المشروعات والاستثمارات.
        </p>

        <h2 className="text-[#1E3A5F] mb-6">
          المدير الحالي الدكتور عبد المنعم السيد
        </h2>

        <h2 className="text-[#1E3A5F] mb-2">طبيعة العمل:</h2>

        <p className="mb-4 leading-relaxed">
          مركز متخصص في إعداد الدراسات الاقتصادية والاستراتيجية وتقديم التحليلات
          المالية والاستشارات التنموية التي تدعم متخذي القرار والجهات الحكومية
          والخاصة. نعمل على تقديم رؤى قائمة على البيانات وأبحاث متعمقة تساهم في
          تحقيق التنمية المستدامة وتعزيز كفاءة المشروعات والاستثمارات. المدير
          الحالي الدكتور عبد المنعم السيد .طبيعة العمل: مركز بحثي مستقل متخصص في
          إعداد دراسات الجدوى الاقتصادية، التحليل المالي للشركات، وتحليل
          السياسات والمشروعات القومية في مصر.الظهور الإعلامي: يبرز رئيسه بشكل
          مستمر في وسائل الإعلام المصرية لتقديم تحليلات حول التضخم، الموازنة
          العامة، وتحركات البنك المركزي.
        </p>

        <div className="relative text-center lg:text-start mb-14 mt-16">
          <h1 className="text-[#1E3A5F] font-bold text-2xl sm:text-3xl md:text-4xl">
            قصتنا و تاريخنا
          </h1>

          <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
        </div>

        <h2 className="text-[#1E3A5F] mb-6">
          انطلق مركز القاهرة للدراسات الاقتصادية والاستراتيجية
        </h2>

        <p className="mb-4 leading-relaxed">
          بدأت رحلتنا بهدف تقديم دراسات اقتصادية واستراتيجية عالية الجودة تساعد
          على اتخاذ قرارات أكثر دقة وفاعلية. ومن خلال البحث والتحليل والخبرة
          المتخصصة، نواصل دعم المؤسسات والمشروعات برؤى مبنية على البيانات ومعرفة
          عميقة بالمتغيرات الاقتصادية والتنموية
        </p>

        <h2 className="text-[#1E3A5F] mb-1">
          .1. النشأة والتحول إلى بيت خبرة البداية كمؤسسة استشارية:
        </h2>

        <p className="mb-4 leading-relaxed">
          انبثقت فكرة المركز من واقع عمل مؤسسه الدكتور عبد المنعم السيد في مجال
          الاستشارات المالية والضريبية والمحاسبة.التأسيس والهدف: تم تدشين المركز
          في القاهرة ليكون كياناً مستقلاً متخصصاً في إعداد دراسات الجدوى
          الاقتصادية، التحليل المالي للقوائم المالية للشركات، وتقديم الاستشارات
          التدريبية والمحاسبية.
        </p>

        <h2 className="text-[#1E3A5F] mb-1">
          2. التوسع نحو التحليل الاستراتيجي والسياسات الربط بين الاقتصاد
          والسياسة:
        </h2>

        <p className="mb-4 leading-relaxed">
          لم يكتفِ المركز بتقديم الخدمات التجارية والمالية للشركات، بل توسع
          ليصبح &quot;مركز فكر&quot; يحلل السياسات الاقتصادية الكلية للدولة
          المصرية.الاعتماد الدولي والمحلي: يرتبط المركز بخبرات مؤسسه المقيد لدى
          البنك المركزي المصري والهيئة العامة للرقابة المالية، بجانب عضويته في
          شبكات محاسبية واستشارية دولية (مثل KRESTON INTERNATIONAL).
        </p>

        <h2 className="text-[#1E3A5F] mb-1">
          3. البروز الإعلامي والمشاركة السيادية (المرحلة الحالية) تغطية
          المشروعات القومية:
        </h2>

        <p className="mb-4 leading-relaxed">
          ارتبط اسم المركز تاريخياً بتقديم تحليلات مدعمة بالأرقام للمشروعات
          القومية المصرية مثل (مشروع الدلتا الجديدة، الموازنة العامة، وقضايا
          الأمن الغذائي).التواجد في صنع القرار: يشارك المركز بانتظام في تقديم
          أوراق عمل وتوصيات للمجالس الاقتصادية وجمعيات الاستثمار ورجال الأعمال
          في مصر.
        </p>
      </div>

      <div className="relative text-center lg:text-start mb-16 mt-20">
        <h1 className="text-[#1E3A5F] font-bold text-2xl sm:text-3xl md:text-4xl">
          الأسس التي نقود بها النجاح
        </h1>

        <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-4 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {basis.map((base) => (
          <div
            key={base.id}
            className="rounded-3xl bg-[rgba(43,76,140,0.1)] p-8 py-14"
          >
            <div className="flex justify-start items-center gap-5 mb-4">
              <Image
                src={base.icon}
                alt="icon"
                width={100}
                height={100}
                className="w-17"
              />

              <h2 className="text-[#1E3A5F] text-xl sm:text-2xl lg:text-3xl font-bold">
                {base.title}
              </h2>
            </div>

            <p className="text-[rgba(27,36,57,0.67)] text-base sm:text-lg lg:text-xl font-bold">
              {base.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsSection;
