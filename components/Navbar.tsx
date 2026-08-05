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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/#home" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Coolmate Maintenance & Solutions Co."
            width={600}
            height={200}
            priority
            className="h-20 w-auto object-contain lg:h-24 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll
              className="relative text-lg font-medium text-slate-700 transition-all duration-300 hover:text-[#005BAC]
              after:absolute after:-bottom-2 after:left-0 after:h-[2px]
              after:w-0 after:bg-[#005BAC] after:transition-all
              after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-8 w-8 text-slate-700" />
          ) : (
            <Menu className="h-8 w-8 text-slate-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 px-6 py-4 text-lg text-slate-700 transition hover:bg-slate-50 hover:text-[#005BAC]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}