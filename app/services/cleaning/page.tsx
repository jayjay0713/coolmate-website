import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Droplets,
  Fan,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function AirConditioningCleaningPage() {
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
                'url("/images/services/cleaning-bg.jpg")',
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#08213D]/50" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A31]/75 via-[#08213D]/45 to-[#08213D]/20" />

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
                  General Cleaning
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
                Professional air conditioning general cleaning to help
                maintain cleaner systems, better airflow, proper drainage,
                and reliable cooling performance for residential,
                commercial, and industrial clients.
              </p>

            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* WHY GENERAL CLEANING */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Introduction + Photo */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                  Why General Cleaning?
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                  Keep Your Air Conditioning System Clean & Efficient
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Regular air conditioning cleaning helps remove accumulated
                  dust, dirt, and debris from accessible system components
                  that can affect airflow and cooling performance.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our technicians carefully clean and inspect the air
                  conditioning system, including the drain pan and drain line,
                  to help maintain proper operation and a cleaner,
                  more comfortable environment.
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
                    src="/images/services/cleaning-hero.jpg"
                    alt="Air conditioning general cleaning service"
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
            {/* BENEFIT CARDS */}
            {/* ================================================= */}

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

              {/* Cleaner System */}
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
                <Sparkles className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Cleaner System
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Helps remove accumulated dust and dirt from accessible
                  air conditioning components.
                </p>
              </div>

              {/* Better Airflow */}
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
                <Fan className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Better Airflow
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Proper cleaning helps maintain airflow through the air
                  conditioning system.
                </p>
              </div>

              {/* Drainage Maintenance */}
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
                <Droplets className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Drainage Maintenance
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Drain pan cleaning and drain line vacuuming help remove
                  accumulated dirt and debris from the condensate drainage
                  system.
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
                  Cleaning is performed by experienced air conditioning
                  technicians.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* WHAT WE CLEAN */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section Header */}
            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Our Cleaning Service
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                What We Clean & Inspect
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our general cleaning service focuses on key accessible
                components of your air conditioning system, including
                drain pan cleaning and drain line vacuuming.
              </p>

            </div>

            {/* ================================================= */}
            {/* CHECKLIST CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

              {[
                "Air filter cleaning",
                "Indoor unit cleaning",
                "Evaporator coil cleaning",
                "Blower and fan inspection",
                "Air outlet and louvers cleaning",
                "Drain pan cleaning",
                "Drain line vacuuming",
                "Outdoor unit cleaning",
                "Condenser coil cleaning",
                "General system inspection",
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
        {/* SERVICE APPLICATIONS */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section Header */}
            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Service Applications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Cleaning for Different Environments
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Coolmate provides air conditioning general cleaning services
                for residential, commercial, and industrial applications.
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
                    "General cleaning for split-type air conditioning systems used in homes, apartments, and residential properties.",
                },
                {
                  title: "Commercial",
                  description:
                    "Cleaning services for offices, retail establishments, restaurants, and other commercial facilities.",
                },
                {
                  title: "Industrial & Large Facilities",
                  description:
                    "Professional cleaning support for larger facilities and air conditioning systems requiring scheduled servicing.",
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
                    shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:bg-[#061A31]
                    hover:border-[#4EA8FF]/60
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.20)]
                  "
                >

                  {/* Accent */}
                  <div className="mb-5 h-1 w-12 rounded-full bg-[#4EA8FF]" />

                  <h3 className="text-xl font-bold text-white">
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
        {/* GENERAL VS CHEMICAL CLEANING */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-20">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
              Need Deeper Cleaning?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
              General Cleaning vs. Chemical Cleaning
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              General cleaning is suitable for routine cleaning and
              maintenance. For systems with heavy dirt, buildup, or
              contamination, a more intensive chemical cleaning service
              may be recommended after inspection.
            </p>

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
              Keep Your Air Conditioning System Clean & Efficient
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Coolmate Maintenance & Solutions Co. provides professional
              air conditioning general cleaning services for residential,
              commercial, and industrial clients.
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