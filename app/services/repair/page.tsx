import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Aircon Repair Services Philippines",

  description:
    "Professional air conditioning repair services for residential, commercial, and industrial clients in the Philippines. Coolmate diagnoses cooling problems, leaks, unusual operation, electrical issues, component failures, and other air conditioning performance problems.",

  alternates: {
    canonical: "https://www.coolmateco.com/services/repair",
  },

  openGraph: {
    title: "Aircon Repair Services Philippines",
    description:
      "Professional air conditioning repair services for residential, commercial, and industrial clients in the Philippines.",
    url: "https://www.coolmateco.com/services/repair",
    siteName: "Coolmate Maintenance & Solutions Co.",
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/services/repair-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Air conditioning repair service",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AirConditioningRepairPage() {
  return (
    <>
      {/* ===================================================== */}
      {/* HEADER / NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      <main className="bg-white">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative min-h-[560px] overflow-hidden lg:min-h-[620px]">

          {/* Background Photo */}
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                'url("/images/services/repair-bg.jpg")',
            }}
          />

          {/* Dark Navy Overlay */}
          <div className="absolute inset-0 bg-[#08213D]/50" />

          {/* Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061A31]/75
              via-[#08213D]/45
              to-[#08213D]/20
            "
          />

          {/* Hero Content */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[560px]
              max-w-7xl
              items-center
              px-6
              lg:min-h-[620px]
              lg:px-10
            "
          >
            <div className="max-w-4xl">

              {/* Service Label */}
              <p
                className="
                  mb-5
                  text-sm
                  font-extrabold
                  uppercase
                  tracking-[0.25em]
                  text-[#4EA8FF]
                  sm:text-base
                "
              >
                Air Conditioning Service
              </p>

              {/* Main Heading */}
              <h1
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Air Conditioning

                <span className="block text-[#1683FF]">
                  Repair
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-slate-200
                  sm:text-xl
                  lg:text-2xl
                  lg:leading-9
                "
              >
                Professional air conditioning repair services for systems
                experiencing cooling problems, unusual operation, component
                failures, and other performance issues.
              </p>

            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* WHY AIR CONDITIONING REPAIR */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* LEFT - CONTENT */}
              <div>

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#1683FF]
                  "
                >
                  Air Conditioning Repair
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    leading-tight
                    text-slate-900
                    lg:text-4xl
                  "
                >
                  Get Your Air Conditioning System Back to Proper Operation
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-8
                    text-slate-600
                  "
                >
                  When an air conditioning system stops cooling properly,
                  develops unusual noises, leaks water, or experiences
                  electrical and control problems, proper diagnosis is
                  important before repairs are performed.
                </p>

                <p
                  className="
                    mt-5
                    text-lg
                    leading-8
                    text-slate-600
                  "
                >
                  Our technicians inspect the system, identify the likely
                  cause of the problem, and perform appropriate repair work
                  to help restore reliable operation.
                </p>

              </div>

              {/* RIGHT - HERO PHOTO */}
              <div className="relative">

                {/* Blue Glow */}
                <div
                  className="
                    absolute
                    -inset-4
                    rounded-[2rem]
                    bg-[#1683FF]/10
                    blur-2xl
                  "
                />

                {/* Image Frame */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  "
                >

                  <img
                    src="/images/services/repair-hero.jpg"
                    alt="Air conditioning repair service"
                    className="
                      h-[320px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                      sm:h-[380px]
                      lg:h-[460px]
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#08213D]/30
                      via-transparent
                      to-transparent
                    "
                  />

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* BENEFIT CARDS - DARK NAVY ONLY */}
            {/* ================================================= */}

            <div
              className="
                mt-16
                grid
                gap-5
                sm:grid-cols-2
                lg:mt-20
                lg:grid-cols-4
              "
            >

              {/* Accurate Diagnosis */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4EA8FF]/60
                  hover:bg-[#0B2D52]
                  hover:shadow-xl
                "
              >
                <Search className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Accurate Diagnosis
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Identify possible causes of system problems before repair
                  work is performed.
                </p>
              </div>

              {/* Component Repair */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4EA8FF]/60
                  hover:bg-[#0B2D52]
                  hover:shadow-xl
                "
              >
                <Wrench className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Component Repair
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Repair or replacement of applicable air conditioning
                  components when required.
                </p>
              </div>

              {/* System Expertise */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4EA8FF]/60
                  hover:bg-[#0B2D52]
                  hover:shadow-xl
                "
              >
                <Cpu className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  System Expertise
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Support for split-type, VRF, and commercial air
                  conditioning systems.
                </p>
              </div>

              {/* Professional Service */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4EA8FF]/60
                  hover:bg-[#0B2D52]
                  hover:shadow-xl
                "
              >
                <ShieldCheck className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Professional Service
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Repair work performed by experienced air conditioning
                  technicians.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* COMMON PROBLEMS */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section Header */}
            <div className="text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Repair Services
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                Common Air Conditioning Problems
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Our technicians can assess a variety of air conditioning
                problems affecting system performance and operation.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROBLEM CARDS - DARK NAVY ONLY */}
            {/* ================================================= */}

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-5xl
                gap-4
                md:grid-cols-2
              "
            >

              {[
                "Air conditioning not cooling properly",
                "Weak or reduced airflow",
                "Water leaking from indoor unit",
                "Unusual noise or vibration",
                "Unit frequently turning on and off",
                "Indoor or outdoor unit not operating",
                "Electrical and control problems",
                "Fan motor problems",
                "Compressor-related issues",
                "Refrigerant system problems",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-[#08213D]
                    p-5
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#0B2D52]
                    hover:shadow-xl
                  "
                >

                  <AlertTriangle
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-[#4EA8FF]
                    "
                  />

                  <span className="font-medium text-white">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* OUR REPAIR PROCESS */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Our Repair Process
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                From Diagnosis to Repair
              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                We approach air conditioning repairs systematically to help
                identify the problem and determine the appropriate solution.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROCESS CARDS - DARK NAVY ONLY */}
            {/* ================================================= */}

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-5xl
                gap-6
                md:grid-cols-3
              "
            >

              {[
                {
                  number: "01",
                  title: "Inspect",
                  description:
                    "Inspect the air conditioning system and assess the reported problem.",
                },
                {
                  number: "02",
                  title: "Diagnose",
                  description:
                    "Use appropriate testing and diagnostic procedures to identify the likely cause.",
                },
                {
                  number: "03",
                  title: "Repair",
                  description:
                    "Perform the required repair or component replacement based on the findings.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#08213D]
                    p-7
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#0B2D52]
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      text-4xl
                      font-extrabold
                      text-[#4EA8FF]
                    "
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* SYSTEMS WE REPAIR */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Systems We Service
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                Residential, Commercial & Industrial
              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Coolmate provides air conditioning repair services for
                different system types and applications.
              </p>

            </div>

            {/* ================================================= */}
            {/* SYSTEM CARDS - DARK NAVY ONLY */}
            {/* ================================================= */}

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-5xl
                gap-6
                md:grid-cols-3
              "
            >

              {[
                {
                  title: "Split-Type Systems",
                  description:
                    "Repair services for residential and commercial split-type air conditioning systems.",
                },
                {
                  title: "VRF Systems",
                  description:
                    "Repair and component support for VRF systems used in offices, commercial buildings, and facilities.",
                },
                {
                  title: "Commercial Systems",
                  description:
                    "Repair services for larger air conditioning systems serving commercial and industrial facilities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#08213D]
                    p-7
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#0B2D52]
                    hover:shadow-xl
                  "
                >

                  <div
                    className="
                      mb-5
                      h-1
                      w-12
                      rounded-full
                      bg-[#1683FF]
                    "
                  />

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* FINAL INFORMATION */}
        {/* ===================================================== */}

        <section className="bg-[#08213D] py-16 lg:py-20">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#4EA8FF]
              "
            >
              Professional Air Conditioning Service
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-white
                lg:text-4xl
              "
            >
              Get Your Air Conditioning System Working Properly Again
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              Coolmate Maintenance & Solutions Co. provides professional
              air conditioning repair services for residential, commercial,
              and industrial clients.
            </p>

          </div>

        </section>

      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </>
  );
}