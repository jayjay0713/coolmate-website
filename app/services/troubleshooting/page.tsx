import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Search,
  ShieldCheck,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";

export default function AirConditioningTroubleshootingPage() {
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
                'url("/images/services/troubleshooting-bg.jpg")',
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
                  Troubleshooting
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
                Professional troubleshooting and system diagnostics to
                identify the causes of air conditioning performance,
                electrical, drainage, control, and operating problems.
              </p>

            </div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* WHY TROUBLESHOOTING */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                  Air Conditioning Troubleshooting
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                  Find the Cause of Your Air Conditioning Problem
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Air conditioning problems can have different causes.
                  Proper troubleshooting helps identify the source of the
                  problem before repair or replacement work is performed.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our technicians inspect system operation, electrical
                  components, controls, airflow, drainage, and other relevant
                  areas to help determine the appropriate next step.
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
                    src="/images/services/troubleshooting-hero.jpg"
                    alt="Air conditioning troubleshooting and diagnostics"
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

              {/* System Diagnosis */}
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

                <Search className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  System Diagnosis
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Inspect system operation and identify possible causes of
                  reported problems.
                </p>

              </div>

              {/* Technical Assessment */}
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

                <Cpu className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Technical Assessment
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Assess electrical, control, mechanical, and operating
                  conditions of the system.
                </p>

              </div>

              {/* Performance Checking */}
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

                <Thermometer className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-4 text-lg font-bold text-white">
                  Performance Checking
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/85">
                  Check cooling performance, airflow, temperatures, and other
                  operating conditions.
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
                  Troubleshooting performed by experienced air conditioning
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

            <div className="text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Troubleshooting Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                Problems We Can Investigate
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Our troubleshooting service can help investigate a variety
                of symptoms affecting air conditioning system operation.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROBLEM CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

              {[
                "Air conditioning not cooling properly",
                "Weak or reduced airflow",
                "Indoor unit not operating",
                "Outdoor unit not operating",
                "Unit frequently turning on and off",
                "Unusual noise or vibration",
                "Water leaking from indoor unit",
                "Drainage problems",
                "Electrical and control problems",
                "Error codes or abnormal indications",
                "Fan motor problems",
                "Compressor-related problems",
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

                  <AlertTriangle
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
        {/* WHAT WE CHECK */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Diagnostic Inspection
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                What We Check
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our technicians assess the relevant components and operating
                conditions to help determine the cause of the problem.
              </p>

            </div>

            {/* ================================================= */}
            {/* CHECKLIST */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">

              {[
                "System operating condition",
                "Indoor unit operation",
                "Outdoor unit operation",
                "Airflow and temperature",
                "Electrical supply and connections",
                "Control and communication signals",
                "Drainage system",
                "Fan and motor operation",
                "Refrigerant system condition",
                "Abnormal noise and vibration",
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
        {/* TROUBLESHOOTING PROCESS */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1683FF]">
                Our Troubleshooting Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
                From Symptoms to Solution
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We follow a systematic approach to help identify the cause
                of an air conditioning problem.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROCESS CARDS */}
            {/* ================================================= */}

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Inspect",
                  description:
                    "Review the reported problem and inspect the system condition.",
                },
                {
                  number: "02",
                  title: "Test",
                  description:
                    "Perform appropriate checks and measurements based on the symptoms.",
                },
                {
                  number: "03",
                  title: "Diagnose",
                  description:
                    "Determine the likely cause of the system problem.",
                },
                {
                  number: "04",
                  title: "Recommend",
                  description:
                    "Provide the appropriate repair, maintenance, or corrective recommendation.",
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
                Coolmate provides troubleshooting and diagnostic services
                for different air conditioning systems and applications.
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
                    "Troubleshooting services for residential and commercial split-type air conditioning systems.",
                },
                {
                  title: "VRF Systems",
                  description:
                    "Diagnostic support for VRF systems used in offices, commercial buildings, and other facilities.",
                },
                {
                  title: "Commercial Systems",
                  description:
                    "Troubleshooting support for larger air conditioning systems serving commercial and industrial facilities.",
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
              Find the Cause of Your Air Conditioning Problem
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Coolmate Maintenance & Solutions Co. provides professional
              air conditioning troubleshooting and diagnostic services
              for residential, commercial, and industrial clients.
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