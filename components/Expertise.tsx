import {
  Wrench,
  Search,
  Building2,
} from "lucide-react";

const expertise = [
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Comprehensive preventive maintenance programs that maximize system performance, reduce breakdowns, and extend the life of residential, commercial, and industrial air conditioning systems.",
  },
  {
    icon: Search,
    title: "Troubleshooting & Repair",
    description:
      "Accurate fault diagnosis and professional repair of split-type, package, ducted, and VRF air conditioning systems using industry-standard tools and proven procedures.",
  },
  {
    icon: Building2,
    title: "VRF Specialists",
    description:
      "Specialized maintenance, troubleshooting, and repair for Mitsubishi Electric and other VRF air conditioning systems handled by experienced technicians.",
  },
];

export default function Expertise() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24
        border-t
        border-slate-200
        bg-white
        py-16
        lg:scroll-mt-32
        lg:py-24
      "
    >

      {/* ===================================================== */}
      {/* MAIN CONTAINER - SAME ALIGNMENT AS HERO */}
      {/* ===================================================== */}

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
            Our Expertise
          </p>

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
            Preventive Maintenance,

            <br className="hidden lg:block" />

            <span className="text-[#1683FF]">
              {" "}Troubleshooting & Repair Specialists
            </span>
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
            Coolmate Maintenance & Solutions Co. provides expert
            preventive maintenance, troubleshooting, and repair
            services for VRF and split-type air conditioning systems.
            We deliver dependable HVAC solutions that maximize system
            performance, minimize downtime, and ensure efficient
            operation across residential, commercial, and industrial
            facilities.
          </p>

        </div>

        {/* ================================================= */}
        {/* CARDS */}
        {/* ================================================= */}

        <div
          className="
            mt-10
            grid
            gap-6
            lg:mt-16
            lg:grid-cols-3
            lg:gap-8
          "
        >

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_40px_rgba(8,33,61,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#4EA8FF]/60
                  hover:bg-[#061A31]
                  hover:shadow-[0_15px_50px_rgba(8,33,61,0.30)]
                  lg:p-10
                "
              >

                {/* ================================================= */}
                {/* BLUE ACCENT LINE */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-[#1683FF]
                    shadow-[0_0_15px_rgba(22,131,255,0.8)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#1683FF]/30
                    bg-[#1683FF]/10
                    transition-all
                    duration-300
                    group-hover:border-[#4EA8FF]/60
                    group-hover:bg-[#1683FF]/20
                    group-hover:shadow-[0_0_25px_rgba(22,131,255,0.20)]
                    lg:mb-8
                    lg:h-16
                    lg:w-16
                  "
                >

                  <Icon
                    className="
                      h-7
                      w-7
                      text-[#4EA8FF]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      lg:h-8
                      lg:w-8
                    "
                  />

                </div>

                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                    lg:text-2xl
                  "
                >
                  {item.title}
                </h3>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-300
                    lg:mt-5
                    lg:leading-8
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}