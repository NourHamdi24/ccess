"use client";
import Image from "next/image";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const options = [
    { code: "ar", label: "AR", flag: "/egypt.png" },
    { code: "en", label: "EN", flag: "/us.png" },
  ];

  const links = [
    { href: "/", label: t("home") },
    { href: "/who-are-we", label: t("whoWeAre") },
    { href: "/research-areas", label: t("research") },
    { href: "/media-center", label: t("media") },
    { href: "/jobs", label: t("jobs") },
    { href: "/services", label: t("services") },
    { href: "/contact-us", label: t("contact") },
  ];

  const selected = options.find((l) => l.code === locale);

  const switchLang = (code) => {
    router.push(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <header className="max-w-7xl mx-auto rounded-[50px] gap-6 p-6 bg-[#F4F4F4] transition-all duration-300">
      {/* Desktop & Tablet Row */}
      <div className="flex justify-center items-center gap-4 lg:gap-6">
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 bg-white"
          >
            <span
              className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
            >
              ▼
            </span>
            <span className="text-[14px]">{selected?.label}</span>
            <Image
              alt="Flag"
              src={selected?.flag}
              width={20}
              height={20}
              className="w-5 h-5 rounded-full"
            />
          </button>
          <div
            className={`absolute mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-md w-full z-50 overflow-hidden transition-all duration-200 origin-top ${
              open
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-75 pointer-events-none"
            }`}
          >
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => switchLang(opt.code)}
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100"
              >
                <span>{opt.label}</span>
                <Image
                  alt="Flag"
                  src={opt.flag}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp Icon */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition">
          <FaWhatsapp className="text-[#1E3A5F] text-xl" />
        </button>

        {/* Search — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A5F] bg-white w-40 lg:w-52">
          <input
            type="text"
            placeholder={t("search")}
            className="w-full outline-none text-[14px] text-[#1E3A5F]"
          />
          <FiSearch className="text-gray-500" />
        </div>

        {/* Nav links — hidden on mobile/tablet */}
        <nav className="hidden lg:flex gap-4 items-center justify-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 text-sm whitespace-nowrap ${
                  isActive
                    ? "text-[rgba(30,58,95,1)]"
                    : "text-[rgba(30,58,95,0.51)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Logo */}
        <Image alt="Logo" src="/logo.png" width={100} height={50} />

        {/* Hamburger — visible on mobile/tablet only */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <FiMenu
            className={`text-[#1E3A5F] text-xl absolute transition-all duration-200 ${
              mobileMenuOpen
                ? "opacity-0 rotate-90 scale-50"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <FiX
            className={`text-[#1E3A5F] text-xl absolute transition-all duration-200 ${
              mobileMenuOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
          {/* Search on mobile */}
          <div className="sm:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A5F] bg-white">
            <input
              type="text"
              placeholder={t("search")}
              className="w-full outline-none text-[14px] text-[#1E3A5F]"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Nav links */}
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 40}ms` : "0ms",
                }}
                className={`transition-all duration-300 text-right py-2 px-4 rounded-full hover:bg-gray-200 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                } ${
                  isActive
                    ? "text-[rgba(30,58,95,1)] bg-white"
                    : "text-[rgba(30,58,95,0.51)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
