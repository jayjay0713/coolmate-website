"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ChevronDown,
} from "lucide-react";

const serviceLinks = [
  {
    name: "Air Conditioning Preventive Maintenance",
    href: "/services/preventive-maintenance",
  },
  {
    name: "Air Conditioning General Cleaning",
    href: "/services/cleaning",
  },
  {
    name: "Air Conditioning Repair",
    href: "/services/repair",
  },
  {
    name: "Air Conditioning Troubleshooting",
    href: "/services/troubleshooting",
  },
  {
    name: "Air Conditioning Sales & Installation",
    href: "/services/installation",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  /* ============================================================
     SCROLL TO TOP WHEN CHANGING PAGE
  ============================================================ */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  /* ============================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ============================================================ */

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      {/* ========================================================= */}
      {/* TOP CONTACT BAR */}
      {/* ========================================================= */}

      <div className="bg-[#28538A] text-white">

        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-between
            gap-x-4
            gap-y-1
            px-4
            py-2
            sm:px-6
            lg:px-10
            xl:px-12
          "
        >

          {/* CONTACT INFORMATION */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-1
              text-[11px]
              sm:gap-x-5
              sm:text-sm
            "
          >

            {/* PHONE */}

            <a
              href="tel:+639959279906"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                transition
                hover:text-[#4EA8FF]
              "
            >
              <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

              <span>
                0995 927 9906
              </span>
            </a>

            {/* EMAIL */}

            <a
              href="mailto:info@coolmateco.com"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                transition
                hover:text-[#4EA8FF]
              "
            >
              <Mail className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

              <span>
                info@coolmateco.com
              </span>
            </a>

            {/* OFFICE HOURS */}

            <div
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
              "
            >
              <Clock className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />

              <span>
                Mon - Sat 08:00 - 17:00
              </span>
            </div>

          </div>

          {/* FACEBOOK */}

          <div className="hidden items-center sm:flex">

            <a
              href="https://www.facebook.com/profile.php?id=61580222981185"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white
                text-[18px]
                font-extrabold
                leading-none
                text-[#28538A]
                transition
                duration-300
                hover:scale-110
              "
            >
              f
            </a>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR */}
      {/* ========================================================= */}

      <div className="border-b border-slate-200 bg-white">

        <div
          className="
            flex
            h-[82px]
            w-full
            items-center
            justify-between
            px-4
            sm:h-[95px]
            sm:px-6
            lg:h-[110px]
            lg:px-10
            xl:px-12
          "
        >

          {/* ===================================================== */}
          {/* LOGO */}
          {/* ===================================================== */}

          <div className="flex min-w-0 items-center">

            <Link
              href="/"
              className="flex shrink-0 items-center"
            >

              <Image
                src="/images/logo/logo2.png"
                alt="Coolmate Maintenance & Solutions Co."
                width={700}
                height={260}
                priority
                className="
                  block
                  h-[58px]
                  w-auto
                  shrink-0
                  object-contain
                  sm:h-[72px]
                  lg:h-[105px]
                "
              />

            </Link>

          </div>

          {/* ===================================================== */}
          {/* DESKTOP NAVIGATION */}
          {/* ===================================================== */}

          <nav
            className="
              hidden
              items-center
              justify-center
              gap-3
              lg:flex
            "
          >

            {/* HOME */}

            <Link
              href="/"
              className="
                whitespace-nowrap
                rounded-lg
                px-4
                py-3
                text-[16px]
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Home
            </Link>

            {/* ABOUT US */}

            <Link
              href="/about"
              className="
                whitespace-nowrap
                rounded-lg
                px-4
                py-3
                text-[16px]
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              About Us
            </Link>

            {/* ================================================= */}
            {/* SERVICES */}
            {/* ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >

              <div className="flex items-center">

                <Link
                  href="/services"
                  className="
                    whitespace-nowrap
                    rounded-lg
                    px-4
                    py-3
                    text-[16px]
                    font-bold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:bg-slate-50
                    hover:text-[#1683FF]
                  "
                >
                  Our Services
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((previous) => !previous)
                  }
                  aria-label="Toggle services dropdown"
                  aria-expanded={servicesOpen}
                  className="
                    -ml-2
                    rounded-md
                    p-2
                    text-slate-900
                    transition
                    hover:bg-slate-100
                    hover:text-[#1683FF]
                  "
                >

                  <ChevronDown
                    className={`
                      h-5
                      w-5
                      transition-transform
                      duration-200
                      ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>

              </div>

              {/* SERVICES DROPDOWN */}

              {servicesOpen && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-[100]
                    w-[370px]
                    -translate-x-1/2
                    pt-3
                  "
                >

                  <div
                    className="
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_15px_45px_rgba(0,0,0,0.18)]
                    "
                  >

                    <div className="py-2">

                      {serviceLinks.map((service) => (

                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() =>
                            setServicesOpen(false)
                          }
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            px-5
                            py-4
                            text-sm
                            font-semibold
                            text-slate-700
                            transition-all
                            duration-200
                            hover:bg-[#08213D]
                            hover:text-white
                          "
                        >

                          <span
                            className="
                              h-2
                              w-2
                              shrink-0
                              rounded-full
                              bg-[#1683FF]
                              transition-transform
                              duration-200
                              group-hover:scale-125
                            "
                          />

                          <span>
                            {service.name}
                          </span>

                        </Link>

                      ))}

                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* PROJECTS */}

            <Link
              href="/projects"
              className="
                whitespace-nowrap
                rounded-lg
                px-4
                py-3
                text-[16px]
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Projects
            </Link>

            {/* CLIENTS */}

            <Link
              href="/clients"
              className="
                whitespace-nowrap
                rounded-lg
                px-4
                py-3
                text-[16px]
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Clients
            </Link>

            {/* CONTACT US */}

            <Link
              href="/contact"
              className="
                whitespace-nowrap
                rounded-lg
                px-4
                py-3
                text-[16px]
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Contact Us
            </Link>

          </nav>

          {/* ===================================================== */}
          {/* MOBILE RIGHT SIDE */}
          {/* ===================================================== */}

          <div
            className="
              flex
              items-center
              justify-end
              lg:hidden
            "
          >

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                text-slate-900
                transition
                hover:bg-slate-100
              "
              aria-label="Toggle menu"
              aria-expanded={open}
            >

              {open ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}

            </button>

          </div>

        </div>

        {/* ========================================================= */}
        {/* MOBILE MENU */}
        {/* ========================================================= */}

        {open && (
          <nav
            className="
              border-t
              border-slate-200
              bg-white
              shadow-lg
              lg:hidden
            "
          >

            {/* HOME */}

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                px-6
                py-4
                text-base
                font-bold
                text-slate-900
                transition
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Home
            </Link>

            {/* ABOUT US */}

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                px-6
                py-4
                text-base
                font-bold
                text-slate-900
                transition
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              About Us
            </Link>

            {/* SERVICES */}

            <div className="border-b border-slate-100">

              <div className="flex items-center justify-between">

                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="
                    flex-1
                    px-6
                    py-4
                    text-base
                    font-bold
                    text-slate-900
                    transition
                    hover:text-[#1683FF]
                  "
                >
                  Our Services
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setServicesOpen((previous) => !previous)
                  }
                  aria-label="Toggle services"
                  aria-expanded={servicesOpen}
                  className="
                    px-6
                    py-4
                    text-slate-900
                    transition
                    hover:text-[#1683FF]
                  "
                >

                  <ChevronDown
                    className={`
                      h-5
                      w-5
                      transition-transform
                      duration-200
                      ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>

              </div>

              {servicesOpen && (
                <div className="bg-slate-50">

                  {serviceLinks.map((service) => (

                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => {
                        setOpen(false);
                        setServicesOpen(false);
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                        border-t
                        border-slate-200
                        px-8
                        py-3.5
                        text-sm
                        font-semibold
                        text-slate-700
                        transition
                        hover:bg-white
                        hover:text-[#1683FF]
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          bg-[#1683FF]
                        "
                      />

                      {service.name}

                    </Link>

                  ))}

                </div>
              )}

            </div>

            {/* PROJECTS */}

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                px-6
                py-4
                text-base
                font-bold
                text-slate-900
                transition
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Projects
            </Link>

            {/* CLIENTS */}

            <Link
              href="/clients"
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                px-6
                py-4
                text-base
                font-bold
                text-slate-900
                transition
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Clients
            </Link>

            {/* CONTACT US */}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                block
                border-b
                border-slate-100
                px-6
                py-4
                text-base
                font-bold
                text-slate-900
                transition
                hover:bg-slate-50
                hover:text-[#1683FF]
              "
            >
              Contact Us
            </Link>

          </nav>
        )}

      </div>

    </header>
  );
}