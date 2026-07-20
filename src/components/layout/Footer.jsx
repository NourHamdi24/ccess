import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import {
  FiFacebook,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] max-w-7xl text-[#434343] mx-auto lg:rounded-[50px] mt-4 px-4 sm:px-6 lg:px-10 py-8">
      <div>
        <div className="grid grid-cols-1 mx-22 md:mx-0 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-bold leading-relaxed">
          <div className="flex flex-col gap-2  md:text-start">
            <Image
              alt="Logo"
              src="/logo.png"
              width={100}
              height={100}
              className="w-56 lg:w-44 h-20 mx-auto mb-2 lg:mb-0 md:mx-0"
            />
            <p>
              مركز بحثي حكومي رائد في تقديم الدراسات الاقتصادية والاستراتيجية
              المتخصصة
            </p>
          </div>

          <div className="flex flex-col gap-2  md:text-right">
            <h3 className="font-bold mb-2 text-xl">روابط سريعة</h3>
            <Link href="/">عن المركز</Link>
            <Link href="/">الأبحاث والدراسات</Link>
            <Link href="/">المركز الأعلامي</Link>
            <Link href="/">الوظائف</Link>
            <Link href="/">تواصل معنا</Link>
          </div>

          <div className="flex flex-col gap-2  md:text-right">
            <h3 className="font-bold mb-2 text-xl">خدمتنا</h3>
            <Link href="/">عن المركز</Link>
            <Link href="/">الأبحاث والدراسات</Link>
            <Link href="/">المركز الأعلامي</Link>
            <Link href="/">الوظائف</Link>
          </div>

          <div className="flex flex-col gap-2  md:text-right">
            <h3 className="font-bold mb-2 text-xl">تواصل معنا</h3>

            <div className="flex items-center justify-start gap-2">
              <FiMapPin className="text-lg shrink-0" />
              <div>Nasr City, Cairo Governorate, Egypt</div>
            </div>

            <div className="flex items-center justify-start gap-2">
              <FiPhone className="text-lg shrink-0" />
              <p dir="ltr">+20 10 18402400</p>
            </div>

            <div className="flex items-center justify-start gap-2">
              <FaRegEnvelope className="text-lg shrink-0" />
              <p>info@ccess.gov.eg</p>
            </div>

            <div className="flex items-center justify-start gap-2">
              <PiWhatsappLogo className="text-lg shrink-0" />
              <p>تواصل معنا عبر الواتساب</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-8">
          <div className="bg-[rgba(67,67,67,0.1)] rounded-xl p-4 cursor-pointer">
            <FiFacebook className="text-lg" />
          </div>

          <div className="bg-[rgba(67,67,67,0.1)] rounded-xl p-4 cursor-pointer">
            <FaInstagram className="text-lg" />
          </div>

          <div className="bg-[rgba(67,67,67,0.1)] rounded-xl p-4 cursor-pointer">
            <FiLinkedin className="text-lg" />
          </div>

          <div className="bg-[rgba(67,67,67,0.1)] rounded-xl p-4 cursor-pointer">
            <FiYoutube className="text-lg" />
          </div>
        </div>

        <div className="w-full text-[rgba(67,67,67,0.6)] mt-8 text-sm md:text-base">
          <div className="flex flex-col  lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-right">
              © 2026 مركز القاهرة للدراسات الاقتصادية والاستراتيجية. جميع الحقوق
              محفوظة.
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <div>سياسة الخصوصية</div>
              <div>الشروط والأحكام</div>
            </div>
          </div>

          <div className="border-t border-gray-300 text-center mt-4 pt-2">
            Powered By Angel Quotes
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
