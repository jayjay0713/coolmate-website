import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Clock,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export default function PreventiveMaintenancePage() {
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
                'url("/images/services/preventive-maintenance-bg.jpg")',
            }}
          />

          {/* Dark Blue Overlay */}
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
                  Preventive Maintenance
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
                Keep your air conditioning systems running efficiently,
                reliably, and safely with professional preventive maintenance
                from Coolmate Maintenance & Solutions Co.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* WHY PREVENTIVE MAINTENANCE */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                  Why Preventive Maintenance?
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                  Protect Your Air Conditioning Investment
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Regular preventive maintenance helps identify potential
                  problems before they become major system failures. Our
                  technicians inspect, clean, and assess your air conditioning
                  equipment to help maintain reliable performance.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you operate a residential property, office,
                  commercial establishment, or industrial facility, a
                  structured maintenance program can help reduce unexpected
                  downtime and keep your systems operating efficiently.
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
                    src="/images/services/preventive-maintenance-hero.jpg"
                    alt="Air conditioning preventive maintenance service"
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

              {/* Better Performance */}
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
                  Better Performance
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Maintain reliable cooling performance through regular
                  inspection and servicing.
                </p>

              </div>

              {/* Prevent Problems */}
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
                  Prevent Problems
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Identify potential issues before they develop into costly
                  breakdowns.
                </p>

              </div>

              {/* Reduce Downtime */}
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

                <Clock className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Reduce Downtime
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Scheduled maintenance helps keep your equipment available
                  when you need it.
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

                <Wrench className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Professional Service
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Maintenance performed by experienced air conditioning
                  technicians.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* WHAT WE DO */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Our Maintenance Service
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                What We Check & Maintain
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our preventive maintenance service is designed to assess the
                condition and operation of your air conditioning equipment.
              </p>

            </div>

            {/* ================================================= */}
            {/* CHECKLIST */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

              {[
                "General system inspection",
                "Indoor unit inspection",
                "Outdoor unit inspection",
                "Filter inspection and cleaning",
                "Drain system inspection",
                "Electrical and control inspection",
                "Operating performance assessment",
                "Abnormal noise and vibration checking",
                "Refrigerant system assessment",
                "Basic troubleshooting and recommendations",
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
        {/* SYSTEMS WE SERVICE */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Systems We Service
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Residential, Commercial & Industrial
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Coolmate provides preventive maintenance services for a range
                of air conditioning systems and applications.
              </p>

            </div>

            {/* ================================================= */}
            {/* SYSTEM CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">

              {[
                {
                  title: "Split-Type Systems",
                  description:
                    "Preventive maintenance for residential and commercial split-type air conditioning systems.",
                },
                {
                  title: "VRF Systems",
                  description:
                    "Maintenance support for VRF systems used in offices, commercial buildings, and other facilities.",
                },
                {
                  title: "Commercial Systems",
                  description:
                    "Maintenance programs for air conditioning systems serving commercial and industrial facilities.",
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
        {/* FINAL INFORMATION */}
        {/* ===================================================== */}

        <section className="bg-[#08213D] py-16 lg:py-20">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4EA8FF]">
              Professional Air Conditioning Service
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
              Keep Your Air Conditioning System Running Reliably
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Coolmate Maintenance & Solutions Co. provides preventive
              maintenance services for residential, commercial, and
              industrial air conditioning systems.
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