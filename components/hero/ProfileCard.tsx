
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "@/data/profile";

const details = [
  {
    label: "EDUCATION",
    value: profile.education,
    icon: GraduationCap,
  },
  {
    label: "LOCATION",
    value: profile.location,
    icon: MapPin,
  },
  {
    label: "PHONE",
    value: profile.phone,
    href: profile.whatsapp,
    icon: Phone,
  },
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

const socialLinks = [
  {
    label: "CV",
    href: "/MAWJ_DHABYAN_AHMED_CV.pdf",
    abbreviation: "CV",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mawj-ahmed-287794318/",
    abbreviation: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/MawjAhmed",
    abbreviation: "GH",
  },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="mx-auto w-full max-w-140 overflow-hidden rounded-2xl border border-[#d6c1a5]/70 bg-[#fbf7f0] shadow-[0_18px_50px_rgba(73,53,41,0.10)]"
    >
      {/* Header */}
      <div className="flex h-11 items-center justify-between border-b border-[#e4d5c2] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#b4957a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d6c1a5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#795b43]" />
        </div>

        <div className="flex items-center gap-2 text-xs text-[#795b43]">
          <Code2 size={14} />
          <span>profile.ts</span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Identity row */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="relative h-22 w-22 shrink-0 overflow-hidden rounded-full border-2 border-[#d6c1a5] bg-[#e4d5c2] sm:h-26 sm:w-26">
            <Image
              src="/images/mawj.jpg.png"
              alt="Mawj Alhayaly"
              fill
              priority
              sizes="104px"
              className="object-cover object-[center_20%]"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold tracking-[0.17em] text-[#795b43] sm:text-[10px]">
              DEVELOPER PROFILE
            </p>

            <h2 className="mt-1.5 wrap-break-word text-xl font-semibold leading-tight tracking-tight text-[#30231d] sm:text-2xl">
              {profile.name}
            </h2>

            <p className="mt-2 text-sm font-bold leading-5 text-[#795b43] sm:text-base sm:leading-6">
              {profile.title}
            </p>
          </div>
        </div>

        {/* Education, location and contact details */}
        <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#e4d5c2] pt-4 min-[430px]:grid-cols-2">
          {details.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="flex min-w-0 items-start gap-2.5">
                <Icon
                  size={16}
                  className="mt-0.5 shrink-0 text-[#795b43]"
                />

                <div className="min-w-0">
                  <p className="text-[9px] font-semibold tracking-wider text-[#9a8069]">
                    {item.label}
                  </p>

                  <p className="mt-1 wrap-break-word text-xs leading-5 text-[#493529]">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg p-1 transition-colors hover:bg-[#e4d5c2]/30"
              >
                {content}
              </a>
            ) : (
              <div key={item.label} className="p-1">
                {content}
              </div>
            );
          })}
        </div>

    
{/* CV and social links replacing MY PHILOSOPHY */}
<div className="mt-4 rounded-xl border border-[#d6c1a5]/70 bg-[#564d46] px-4 py-4 shadow-sm">
  <p className="text-[9px] font-semibold tracking-[0.15em] text-[#e8e5e2]">
    CONNECT WITH ME
  </p>

  <div className="mt-3 flex flex-wrap items-center gap-2">
    {socialLinks.map(({ label, href, abbreviation }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          label === "CV"
            ? "Open my CV"
            : `Visit my ${label} profile`
        }
        className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-[#795b43]/25 bg-[#fbf7f0] px-3 py-2 text-xs font-medium text-[#493529] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#795b43]/50 hover:bg-[#e4d5c2] hover:shadow-md"
      >
        <span
          aria-hidden="true"
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#795b43]/30 text-[9px] font-bold text-[#795b43] transition-colors group-hover:border-[#795b43]/60"
        >
          {abbreviation}
        </span>

        <span>{label}</span>

        <ArrowUpRight
          size={12}
          className="text-[#795b43] opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </a>
    ))}
  </div>
</div>

      </div>
    </motion.div>
  );
}
