import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Home,
  ShieldCheck,
  Wrench,
  Building2,
  Settings,
} from "lucide-react";

export default function AirConditioningInstallationPage() {
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
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/services/installation-bg.jpg")',
            }}
          />

          {/* Dark Navy Overlay */}
          <div className="absolute inset-0 bg-[#08213D]/50" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A31]/80 via-[#08213D]/50 to-[#08213D]/20" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 lg:min-h-[620px] lg:px-10">

            <div className="max-w-4xl">

              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.25em] text-[#4EA8FF] sm:text-base">
                Air Conditioning Service
              </p>

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
                  Sales & Installation
                </span>
              </h1>

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
                Professional air conditioning sales and installation
                services for residential, commercial, and industrial
                applications throughout the Philippines.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* INTRODUCTION */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                  Air Conditioning Sales & Installation
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                  The Right Air Conditioning System for Your Space
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Choosing and installing the right air conditioning system
                  is important for comfort, efficiency, reliability, and
                  long-term operating performance.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Coolmate Maintenance & Solutions Co. provides air
                  conditioning sales and installation services for homes,
                  offices, commercial establishments, and industrial
                  facilities.
                </p>

              </div>

              {/* RIGHT PHOTO */}
              <div className="relative">

                <div className="absolute -inset-4 rounded-[2rem] bg-[#1683FF]/10 blur-2xl" />

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
                    src="/images/services/installation-hero.jpg"
                    alt="Air conditioning installation service"
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

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08213D]/30 via-transparent to-transparent" />

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* BENEFITS */}
            {/* ================================================= */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

              {/* Proper System Selection */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                "
              >

                <ClipboardCheck className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Proper System Selection
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Help determine an appropriate air conditioning solution
                  based on the space and application.
                </p>

              </div>

              {/* Professional Installation */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                "
              >

                <Wrench className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Professional Installation
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Installation performed with attention to proper equipment
                  setup and system operation.
                </p>

              </div>

              {/* Reliable Operation */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                "
              >

                <Settings className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Reliable Operation
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Proper installation helps support dependable system
                  performance and operation.
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
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.20)]
                "
              >

                <ShieldCheck className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Professional Service
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Installation handled by experienced air conditioning
                  technicians.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* INSTALLATION SERVICES */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Installation Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                What We Provide
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our installation service covers the essential activities
                required to properly install and prepare an air conditioning
                system for operation.
              </p>

            </div>

            {/* ================================================= */}
            {/* CHECKLIST */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

              {[
                "Site assessment and installation planning",
                "Air conditioning unit selection support",
                "Indoor unit installation",
                "Outdoor unit installation",
                "Refrigerant piping installation",
                "Drain piping installation",
                "Electrical and control connections",
                "System testing and commissioning",
                "Operating performance checking",
                "Installation recommendations",
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
                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#061A31]
                    hover:border-[#4EA8FF]/60
                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                  "
                >

                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-[#4EA8FF]"
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
        {/* SYSTEMS */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Systems We Install
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Air Conditioning Systems for Different Applications
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Coolmate provides installation support for air conditioning
                systems used in residential, commercial, and industrial
                environments.
              </p>

            </div>

            {/* ================================================= */}
            {/* SYSTEM CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

              {/* Split-Type */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                "
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1683FF]/15">
                  <Home className="h-6 w-6 text-[#4EA8FF]" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Split-Type Systems
                </h3>

                <p className="mt-4 leading-7 text-white/85">
                  Installation for residential properties, offices, small
                  businesses, and other spaces using split-type systems.
                </p>

              </div>

              {/* VRF */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                "
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1683FF]/15">
                  <Cpu className="h-6 w-6 text-[#4EA8FF]" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  VRF Systems
                </h3>

                <p className="mt-4 leading-7 text-white/85">
                  Installation support for VRF systems used in offices,
                  commercial buildings, and larger facilities.
                </p>

              </div>

              {/* Commercial */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                  hover:border-[#4EA8FF]/60
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                "
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1683FF]/15">
                  <Building2 className="h-6 w-6 text-[#4EA8FF]" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Commercial Systems
                </h3>

                <p className="mt-4 leading-7 text-white/85">
                  Air conditioning installation for commercial and industrial
                  facilities requiring reliable cooling solutions.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* INSTALLATION PROCESS */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Our Installation Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                From Planning to Commissioning
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We follow a structured installation process to help ensure
                the system is properly installed and ready for operation.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROCESS CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Assess",
                  description:
                    "Review the space, requirements, and installation conditions.",
                },
                {
                  number: "02",
                  title: "Plan",
                  description:
                    "Determine equipment placement, piping, drainage, and installation requirements.",
                },
                {
                  number: "03",
                  title: "Install",
                  description:
                    "Install the indoor and outdoor units and required connections.",
                },
                {
                  number: "04",
                  title: "Test",
                  description:
                    "Test and check the system before turnover and normal operation.",
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
                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:bg-[#061A31]
                    hover:border-[#4EA8FF]/60
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                  "
                >

                  <div className="text-4xl font-extrabold text-[#4EA8FF]">
                    {item.number}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/85">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* APPLICATIONS */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Applications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Residential, Commercial & Industrial
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our installation services can support a variety of
                air conditioning requirements throughout the Philippines.
              </p>

            </div>

            {/* ================================================= */}
            {/* APPLICATION CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

              {[
                {
                  title: "Residential",
                  description:
                    "Air conditioning solutions for houses, apartments, and residential properties.",
                  icon: Home,
                },
                {
                  title: "Commercial",
                  description:
                    "Installation services for offices, retail establishments, restaurants, and commercial spaces.",
                  icon: Building2,
                },
                {
                  title: "Industrial & Large Facilities",
                  description:
                    "Air conditioning installation support for larger facilities and applications requiring planned system installation.",
                  icon: Settings,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#08213D]
                      p-7
                      shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:bg-[#061A31]
                      hover:border-[#4EA8FF]/60
                      hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                    "
                  >

                    <Icon className="h-8 w-8 text-[#4EA8FF]" />

                    <h3 className="mt-5 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/85">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* FINAL INFORMATION */}
        {/* ===================================================== */}

        <section className="bg-[#08213D] py-16 lg:py-20">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4EA8FF]">
              Professional Air Conditioning Service
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
              Professional Air Conditioning Installation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Coolmate Maintenance & Solutions Co. provides professional
              air conditioning sales and installation services for
              residential, commercial, and industrial clients throughout
              the Philippines.
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