"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#25282D]/80 bg-[#090A0C]/90 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/#home" className="flex items-center">
          <Image
            src="/images/logo/coolmate-dark.png"
            alt="Coolmate Maintenance & Solutions Co."
            width={600}
            height={200}
            priority
            className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 lg:h-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll
              className="
                relative text-lg font-medium text-[#CBD5E1]
                transition-all duration-300
                hover:text-[#1683FF]
                after:absolute after:-bottom-2 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1683FF]
                after:shadow-[0_0_10px_rgba(22,131,255,0.8)]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[#CBD5E1] transition hover:bg-[#15171A] hover:text-[#1683FF] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-[#25282D] bg-[#101214] lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll
              onClick={() => setOpen(false)}
              className="
                block border-b border-[#25282D]
                px-6 py-4 text-lg font-medium
                text-[#CBD5E1]
                transition-all duration-300
                hover:bg-[#15171A]
                hover:text-[#1683FF]
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}