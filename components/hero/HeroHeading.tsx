
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HeroHeading() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-w-0"
    >
      <div className="mb-6 flex min-w-0 items-center gap-3 sm:mb-8">
        <span className="h-px w-7 shrink-0 bg-[#795b43] sm:w-9" />

        <p className="text-[9px] font-semibold leading-relaxed tracking-[0.13em] text-[#795b43] sm:text-xs sm:tracking-[0.18em]">
          COMPUTER ENGINEER & FULL-STACK DEVELOPER
        </p>
      </div>

      <h1 className="hero-title text-[clamp(2.5rem,8vw,5.7rem)] font-semibold">
        <span className="block">Beyond Code,</span>

        <motion.span
          className="hero-title-accent mt-1 block origin-left text-[#795b43] sm:mt-2"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -3, 0] }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Into Engineering.
        </motion.span>
      </h1>

      {/* Main actions */}
      <div className="mt-7 flex flex-col items-stretch gap-3 min-[380px]:flex-row min-[380px]:flex-wrap min-[380px]:items-center sm:mt-9">
        <a
          href="#projects"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#30231d] px-6 py-3 text-sm font-medium text-[#f6f0e6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#493529] hover:shadow-xl hover:shadow-[#30231d]/15"
        >
          Explore my work
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="#about"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#493529] transition-colors hover:bg-[#e4d5c2]/60"
        >
          Discover more
          <ArrowDown size={15} />
        </a>
      </div>

      {/* Areas of focus */}
      <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs leading-6 tracking-wide text-[#795b43] sm:mt-10 sm:text-sm">
        <span>Web Development</span>
        <span aria-hidden="true" className="text-[#d6c1a5]">/</span>
        <span>Mobile Applications</span>
        <span aria-hidden="true" className="text-[#d6c1a5]">/</span>
        <span>Software Engineering</span>
      </div>
    </motion.div>
  );
}
