
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Code2,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Connect", href: "https://wa.me/905013480562" },
];

const whatsappLink = "https://wa.me/905013480562";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[#b4955a]/20 bg-[#faf9f6]/95 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="container flex min-h-24 items-center justify-between gap-5"
      >
        {/* Elegant personal logo */}
        <a
          href="#home"
          aria-label="Mawj Ahmed — Home"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#b4955a]/70 bg-[#30231d] transition duration-300 group-hover:border-[#d8bd83] group-hover:shadow-[0_0_20px_rgba(180,149,90,0.2)]">
            <span className="absolute inset-1 rounded-full border border-[#b4955a]/35" />

            <span className="font-serif text-2xl italic text-[#d8bd83]">
              M
            </span>

            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[#faf9f6] bg-[#b4955a]">
              <Code2 size={9} className="text-[#30231d]" />
            </span>
          </span>

          <span className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-[0.12em] text-[#30231d] sm:text-xl">
              MAWJ AHMED
            </span>

            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.19em] text-[#987653] sm:text-[11px]">
              Computer Engineer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.label === "Connect" ? "_blank" : undefined}
              rel={item.label === "Connect" ? "noopener noreferrer" : undefined}
              className="group relative py-2 text-[15px] font-medium tracking-wide text-[#795b43] transition-colors duration-300 hover:text-[#30231d]"
            >
              {item.label}

              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#b4955a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#b4955a]/60 bg-[#30231d] px-5 py-3 text-sm font-medium text-[#f7f0e4] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d8bd83] hover:bg-[#493529] md:inline-flex"
        >
          <span>Let&apos;s Connect</span>

          <ArrowUpRight
            size={17}
            className="text-[#d8bd83] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b4955a]/40 text-[#30231d] transition-colors hover:bg-[#30231d] hover:text-[#f7f0e4] md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#b4955a]/20 bg-[#faf9f6] md:hidden"
          >
            <div className="container py-4">
              <div className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target={item.label === "Connect" ? "_blank" : undefined}
                    rel={item.label === "Connect" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between border-b border-[#b4955a]/15 py-4 text-base font-medium text-[#493529] transition-colors hover:text-[#987653]"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={16}
                      className="text-[#b4955a]"
                    />
                  </motion.a>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#30231d] px-5 py-3.5 text-sm font-medium text-[#f7f0e4] transition hover:bg-[#493529]"
              >
                Let&apos;s Connect
                <ArrowUpRight size={17} className="text-[#d8bd83]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
