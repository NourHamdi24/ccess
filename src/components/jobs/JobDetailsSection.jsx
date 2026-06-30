"use client";

import { useDispatch, useSelector } from "react-redux";
import JobCard from "./JobCard";
import { setSelectedJobCategory } from "@/store/slices/jobsSlice";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

// id: the job id from the route, use it to fetch job data once the endpoint is ready
const JobDetailsSection = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    currentJob: "",
    notes: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const locale = useLocale();

  const tabs = [
    { id: 0, label: "قسم التحاليل" },
    { id: 1, label: "قسم الابحاث " },
    { id: 2, label: "قسم الاستشارات " },
    { id: 3, label: "الحسابات  " },
    { id: 4, label: " أعمال إدارية  " },
  ];
  const job = {
    id: 1,
    title: "محلل بيانات",
    department: "قسم التحاليل",
    shift: "دوام كامل",
  };
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedJobCategory = useSelector(
    (state) => state.jobs.selectedJobCategory,
  );
  const jobCategoryHandler = (id) => {
    dispatch(setSelectedJobCategory(id));

    router.push(`/${locale}/jobs`);
  };
  const handleChange = () => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileChange = () => {
    if (e.target.files?.length) {
      setCvFile(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("education", formData.education);
    data.append("currentJob", formData.currentJob);
    data.append("notes", formData.notes);

    if (cvFile) {
      data.append("cv", cvFile);
    }

    console.log(data);
  };
  return (
    <section className="container">
      <div className="bg-[#F8F8F8] px-3 py-4 flex justify-evenly flex-wrap items-center gap-4 rounded-3xl mb-0 container">
        {" "}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={` font-bold text-2xl px-6 py-6 rounded-3xl cursor-pointer ${selectedJobCategory === tab.id ? "text-white bg-[#1E3A5F]" : "text-[#1E3A5F] bg-white"}`}
            onClick={() => jobCategoryHandler(tab.id)}
          >
            <p>{tab.label}</p>
          </button>
        ))}
      </div>
      <div key={job.id}>
        <h1 className="text-[#717182] text-3xl mt-14 mb-10 ">
          نبحث دائماً عن المواهب المتميزة للانضمام إلى فريق العمل
        </h1>

        <JobCard job={job} disabled={true} />
      </div>
      <div className="text-[#434343] text-2xl leading-relaxed my-10">
        <p className="mb-6">
          يختص محلل البيانات بجمع البيانات وتنظيمها وتحليلها بهدف استخراج رؤى
          ومؤشرات تدعم اتخاذ القرارات الاستراتيجية. يعمل على إعداد التقارير
          ولوحات المعلومات التفاعلية، وتحليل الاتجاهات والأنماط، وتحويل البيانات
          المعقدة إلى معلومات واضحة وقابلة للتنفيذ تساعد في تحسين الأداء وتحقيق
          الأهداف المؤسسية. المسؤوليات الرئيسية
        </p>
        <ul className="list-disc pl-5 mx-8">
          <li> جمع وتنظيف وتنظيم البيانات من مصادر مختلفة.</li>
          <li> تحليل البيانات واستخراج المؤشرات والاتجاهات الرئيسية.</li>
          <li> إعداد التقارير الدورية ولوحات المتابعة (Dashboards).</li>
          <li> تقديم توصيات مبنية على نتائج التحليل.</li>
        </ul>
      </div>
      <div className="flex justify-center my-20">
        <button
          onClick={() => {
            document.getElementById("form")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="w-full sm:w-auto bg-[#1E3A5F] text-white rounded-full px-10 md:px-14 py-3 text-base md:text-lg cursor-pointer transition hover:bg-[#294f7a]"
        >
          <p>أنضم إلينا الآن</p>
        </button>
      </div>
      <div id="form" className="scroll-mt-24">
        <div className="flex justify-center mb-8">
          <div className=" px-8 py-2 bg-white">
            <h2 className="text-xl text-[#6B7280] font-medium">
              املأ البيانات التالية وسنتواصل معك قريبًا
            </h2>
          </div>
        </div>
      </div>
      <form className="space-y-4 md:space-y-5">
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-2xl md:rounded-full px-4 md:px-6 py-3 text-right text-sm md:text-base outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="رقم التليفون"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-2xl md:rounded-full px-4 md:px-6 py-3 text-right text-sm md:text-base outline-none"
        />

        <input
          type="text"
          name="education"
          placeholder="العنوان السكني"
          value={formData.education}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-2xl md:rounded-full px-4 md:px-6 py-3 text-right text-sm md:text-base outline-none"
        />

        <input
          type="text"
          name="currentJob"
          placeholder="العمل الحالي / جهة العمل"
          value={formData.currentJob}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-2xl md:rounded-full px-4 md:px-6 py-3 text-right text-sm md:text-base outline-none"
        />

        <div className="w-full border border-gray-500 rounded-2xl md:rounded-full px-4 py-3 flex items-center justify-between">
          <span className="text-gray-500 text-sm md:text-base truncate">
            {cvFile ? cvFile.name : "نسخة من السيرة الذاتية"}
          </span>

          <label
            htmlFor="cv"
            className="cursor-pointer text-[#6B6B6B] text-lg md:text-xl flex-shrink-0"
          >
            <FaUpload />
          </label>

          <input
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <textarea
          name="notes"
          rows={6}
          placeholder="خبراتك السابقة مع ذكر الراتب المتوقع"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border border-gray-500 rounded-2xl md:rounded-3xl px-4 md:px-6 py-4 text-right text-sm md:text-base resize-none outline-none min-h-36 md:min-h-48"
        />

        <div className="pt-2 md:pt-4 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#1E3A5F] text-white rounded-full px-10 md:px-14 py-3 text-base md:text-lg cursor-pointer transition hover:bg-[#294f7a]"
          >
            سجل الآن
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobDetailsSection;
