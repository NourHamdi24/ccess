import Link from "next/link";
import { useLocale } from "next-intl";

const JobCard = ({ job, disabled = false }) => {
  const locale = useLocale();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-6 py-6 px-5 md:px-10 border-[.8px] border-[rgba(0,0,0,0.1)] rounded-4xl bg-[rgba(236,238,242,0.2)]">
        <div className="text-center md:text-start">
          <h1 className="text-[#1E3A5F] text-2xl md:text-3xl font-semibold">
            {job.title}
          </h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-8 mt-2 text-base md:text-xl text-[#717182]">
            <p>{job.department}</p>
            <p>{job.shift}</p>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Link
            onClick={(e) => {
              if (disabled) e.preventDefault();
            }}
            href={`/${locale}/jobs/${job.id}`}
            className={`block w-full md:w-auto text-center bg-[#1E3A5F] text-white font-bold px-5 py-3 rounded-2xl ${disabled ? "pointer-events-none opacity-50" : ""}`}
          >
            اذهب للتقديم
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
