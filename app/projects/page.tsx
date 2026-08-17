import Image from "next/image";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "VRF Preventive Maintenance",
    category: "VRF SERVICE",
    location: "School • Malate, Manila",
    system: "Mitsubishi Electric VRF System",
    image: "/images/projects/vrf-pm.jpg",
  },
  {
    title: "Various Aircon Repairs",
    category: "AIRCON REPAIR",
    location: "Call Center • McKinley Hill, Taguig",
    system: "Split-Type & Commercial Systems",
    image: "/images/projects/aircon-repair.jpg",
  },
  {
    title: "HVAC System Diagnostics",
    category: "HVAC DIAGNOSTICS",
    location: "Office • Pasig, Metro Manila",
    system: "HVAC Diagnostic Tools & Software",
    image: "/images/projects/laptop-repair.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ===================================================== */}
        {/* PROJECTS HERO */}
        {/* ===================================================== */}

        <section
          className="
            relative
            min-h-[430px]
            overflow-hidden
            lg:min-h-[520px]
          "
        >

          {/* Background Photo */}

          <Image
            src="/images/projects/projects-hero.jpg"
            alt="Multiple Mitsubishi Electric VRF outdoor units"
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />

          {/* Dark Navy Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[#08213D]/60
            "
          />

          {/* Gradient Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061A31]/85
              via-[#08213D]/50
              to-[#08213D]/20
            "
          />

          {/* ================================================= */}
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[430px]
              items-center
              lg:min-h-[520px]
            "
          >

            <div
              className="
                mx-auto
                w-full
                max-w-7xl
                px-6
              "
            >

              <div className="max-w-4xl">

                {/* Label */}

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#4EA8FF]
                    sm:text-base
                  "
                >
                  Our Projects
                </p>

                {/* Heading */}

                <h1
                  className="
                    mt-4
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Our Recent Work

                  <span className="block text-[#1683FF]">
                    & Completed Projects
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
                    lg:text-xl
                  "
                >
                  Explore some of the air conditioning maintenance,
                  repair, troubleshooting, and HVAC projects completed
                  by Coolmate Maintenance & Solutions Co.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* PROJECTS SECTION */}
        {/* ===================================================== */}

        <section
          className="
            bg-white
            py-16
            lg:py-24
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              px-6
            "
          >

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div className="text-center">

              <p
                className="
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                  lg:text-xl
                "
              >
                Featured Projects
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
                Quality Work in Action
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
                Every completed project reflects our commitment to
                quality, reliability, and professional workmanship
                across residential, commercial, and industrial
                air conditioning systems.
              </p>

            </div>

            {/* ================================================= */}
            {/* PROJECT CARDS */}
            {/* ================================================= */}

            <div
              className="
                mt-10
                grid
                gap-6
                md:grid-cols-2
                lg:mt-16
                lg:grid-cols-3
                lg:gap-8
              "
            >

              {projects.map((project) => (
                <div
                  key={project.title}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#08213D]
                    shadow-[0_10px_40px_rgba(8,33,61,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#061A31]
                    hover:shadow-[0_20px_50px_rgba(8,33,61,0.30)]
                  "
                >

                  {/* ================================================= */}
                  {/* PROJECT IMAGE */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      h-60
                      overflow-hidden
                      lg:h-64
                    "
                  >

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="
                        (max-width: 768px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Image Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#061A31]/80
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Category Badge */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        border
                        border-[#4EA8FF]/30
                        bg-[#08213D]/90
                        px-4
                        py-2
                        text-xs
                        font-bold
                        tracking-wide
                        text-white
                        shadow-lg
                        backdrop-blur-md
                      "
                    >
                      <span className="text-[#4EA8FF]">
                        ●
                      </span>{" "}
                      {project.category}
                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* PROJECT CONTENT */}
                  {/* ================================================= */}

                  <div className="p-6 lg:p-7">

                    {/* Blue Accent */}

                    <div
                      className="
                        mb-4
                        h-1
                        w-12
                        rounded-full
                        bg-[#1683FF]
                        shadow-[0_0_10px_rgba(22,131,255,0.4)]
                        transition-all
                        duration-300
                        group-hover:w-20
                      "
                    />

                    {/* Title */}

                    <h3
                      className="
                        text-xl
                        font-bold
                        leading-7
                        text-white
                      "
                    >
                      {project.title}
                    </h3>

                    {/* Location */}

                    <div
                      className="
                        mt-4
                        flex
                        items-start
                        gap-2
                        text-slate-200
                      "
                    >

                      <MapPin
                        className="
                          mt-0.5
                          h-5
                          w-5
                          shrink-0
                          text-[#4EA8FF]
                        "
                      />

                      <span>
                        {project.location}
                      </span>

                    </div>

                    {/* System */}

                    <p
                      className="
                        mt-4
                        text-sm
                        leading-6
                        text-slate-300
                      "
                    >
                      {project.system}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* BOTTOM CTA */}
        {/* ===================================================== */}

        <section
          className="
            bg-slate-50
            py-16
            lg:py-20
          "
        >

          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              px-6
              text-center
            "
          >

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#1683FF]
              "
            >
              Need Air Conditioning Service?
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
              Let's Work on Your Next Project
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Whether you need preventive maintenance, repair,
              troubleshooting, or installation, our team is ready
              to help.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}