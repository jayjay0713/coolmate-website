import {
  CheckCircle2,
  Award,
  Headphones,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  "Certified Technicians",
  "Residential & Commercial Services",
  "Transparent Pricing",
  "Quality Workmanship Warranty",
];

const stats = [
  {
    value: "2024",
    label: "Established",
    desc: "Built on years of industry experience.",
    icon: Award,
  },
  {
    value: "24/7",
    label: "Customer Support",
    desc: "Quick assistance whenever you need us.",
    icon: Headphones,
  },
  {
    value: "100+",
    label: "Projects Completed",
    desc: "Successfully completed residential and commercial projects.",
    icon: Briefcase,
  },
  {
    value: "100%",
    label: "Commitment",
    desc: "Dedicated to quality workmanship and customer satisfaction.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="
        border-t
        border-slate-200
        bg-white
        py-16
        lg:py-24
      "
    >

      {/* ===================================================== */}
      {/* MAIN CONTAINER - SAME AS HERO */}
      {/* ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
        "
      >

        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
            lg:items-center
            lg:gap-16
          "
        >

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div>

            {/* Section Label */}

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
              Why Choose Us
            </p>

            {/* Heading */}

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                leading-tight
                text-slate-900
                lg:mt-4
                lg:text-4xl
              "
            >
              Trusted Air Conditioning

              <span className="block text-[#1683FF]">
                Professionals
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-5
                text-base
                leading-7
                text-slate-600
                lg:mt-6
                lg:text-lg
                lg:leading-8
              "
            >
              Coolmate Maintenance & Solutions Co. specializes in
              preventive maintenance, troubleshooting, repair, and VRF
              air conditioning systems. We are committed to delivering
              reliable, efficient, and professional HVAC solutions for
              residential, commercial, and industrial clients.
            </p>

            {/* ================================================= */}
            {/* HIGHLIGHTS */}
            {/* ================================================= */}

            <div
              className="
                mt-8
                space-y-4
                lg:mt-10
                lg:space-y-5
              "
            >

              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-[#1683FF]
                    "
                  />

                  <p
                    className="
                      text-base
                      text-slate-700
                      lg:text-lg
                    "
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE - DARK NAVY CARDS */}
          {/* ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
              lg:gap-5
            "
          >

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#08213D]
                    p-5
                    text-center
                    shadow-[0_10px_35px_rgba(8,33,61,0.20)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#061A31]
                    hover:shadow-[0_15px_45px_rgba(8,33,61,0.30)]
                    lg:p-6
                  "
                >

                  {/* ================================================= */}
                  {/* BLUE TOP ACCENT */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[2px]
                      w-0
                      bg-[#1683FF]
                      shadow-[0_0_12px_rgba(22,131,255,0.8)]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* ================================================= */}
                  {/* ICON */}
                  {/* ================================================= */}

                  <div className="mb-3 flex justify-center">

                    <div
                      className="
                        rounded-xl
                        border
                        border-[#1683FF]/30
                        bg-[#1683FF]/10
                        p-2.5
                        transition-all
                        duration-300
                        group-hover:border-[#4EA8FF]/60
                        group-hover:bg-[#1683FF]/20
                        group-hover:shadow-[0_0_25px_rgba(22,131,255,0.20)]
                      "
                    >

                      <Icon
                        className="
                          h-6
                          w-6
                          text-[#4EA8FF]
                          transition-transform
                          duration-300
                          group-hover:scale-110
                          lg:h-7
                          lg:w-7
                        "
                      />

                    </div>

                  </div>

                  {/* ================================================= */}
                  {/* NUMBER */}
                  {/* ================================================= */}

                  <h3
                    className="
                      text-3xl
                      font-extrabold
                      tracking-tight
                      text-white
                      lg:text-4xl
                    "
                  >
                    {stat.value}
                  </h3>

                  {/* ================================================= */}
                  {/* LABEL */}
                  {/* ================================================= */}

                  <p
                    className="
                      mt-2
                      text-base
                      font-semibold
                      text-[#4EA8FF]
                    "
                  >
                    {stat.label}
                  </p>

                  {/* ================================================= */}
                  {/* DESCRIPTION */}
                  {/* ================================================= */}

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-300
                      lg:text-sm
                    "
                  >
                    {stat.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}