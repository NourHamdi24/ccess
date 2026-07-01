"use client";
import React, { useState } from "react";
import { FaEnvelope, FaMapPin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call here

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section className="container">
      <div className="mb-12">
        <div className="relative text-center lg:text-start">
          <h1 className="text-[#1E3A5F] font-bold text-3xl md:text-4xl">
            تواصل معنا
          </h1>

          <span className="absolute left-1/2 -translate-x-1/2 lg:inset-s-0 lg:translate-x-0 -bottom-6 h-1 w-20 bg-[#EC4D38]" />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 items-stretch">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:col-span-2 gap-6"
          dir="rtl"
        >
          <input
            type="text"
            name="name"
            placeholder="الاسم"
            value={formData.name}
            onChange={handleChange}
            className="h-14 rounded-2xl border border-gray-300 px-6 outline-none focus:border-[#2F588E]"
          />

          <input
            type="email"
            name="email"
            placeholder="الايميل"
            value={formData.email}
            onChange={handleChange}
            className="h-14 rounded-2xl border border-gray-300 px-6 outline-none focus:border-[#2F588E]"
          />

          <input
            type="text"
            name="phone"
            placeholder="رقم التليفون"
            value={formData.phone}
            onChange={handleChange}
            className="h-14 rounded-2xl border border-gray-300 px-6 outline-none focus:border-[#2F588E]"
          />

          <textarea
            rows={8}
            name="message"
            placeholder="رسالتك"
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl border border-gray-300 px-6 py-5 outline-none resize-none focus:border-[#2F588E]"
          />

          <button
            type="submit"
            className="self-center lg:self-start  rounded-full bg-[#28456F] px-20 py-4 text-white font-semibold transition hover:bg-[#1d3658]"
          >
            سجل الآن
          </button>
        </form>
        {/* Contact Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#2F588E] text-white p-10 flex flex-col justify-center min-h-[650px]">
          {/* Decorative circles */}
          <div className="absolute -top-28 right-0 h-56 w-56 rounded-full border border-red-400" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full border border-red-400" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-red-400" />

          <h2 className="text-3xl font-bold mb-16 ">تواصل معنا</h2>

          <div className="space-y-10">
            <div className="flex items-center justify-start gap-4">
              <FaMapPin className="w-8 h-8 shrink-0" />

              <div className="text-right">
                <p className="font-semibold">Nasr City, Cairo</p>
                <p>Governorate, Egypt</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <FaPhone className="w-8 h-8 shrink-0" />

              <div className="text-right">
                <p className="font-semibold">+20 2 1234 5678</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <FaEnvelope className="w-8 h-8 shrink-0" />

              <div className="text-right">
                <p className="font-semibold">info@ccess.gov.eg</p>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4">
              <FaWhatsapp className="w-8 h-8 shrink-0" />

              <div className="text-right">
                <p className="font-semibold">تواصل معنا عبر الواتساب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 overflow-hidden h-150 w-full">
        <iframe
          src="https://www.google.com/maps?q=Nasr%20City,Cairo,Egypt&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactSection;
