import {
  Wrench,
  PenTool,
  Sparkles,
  Building2,
  Search,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Preventive Maintenance",
    description:
      "Keep your air conditioning system running efficiently with scheduled maintenance, inspections, and performance checks.",
    icon: Wrench,
  },
  {
    title: "Aircon Repair",
    description:
      "Professional diagnosis and repair for residential and commercial air conditioning systems.",
    icon: PenTool,
  },
  {
    title: "Troubleshooting",
    description:
      "Accurate fault diagnosis and systematic troubleshooting to identify and resolve air conditioning problems.",
    icon: Search,
  },
  {
    title: "Chemical Cleaning",
    description:
      "Deep cleaning services that help restore cooling performance, improve airflow, and maintain system cleanliness.",
    icon: Sparkles,
  },
  {
    title: "VRF Services",
    description:
      "Specialized preventive maintenance, troubleshooting, and repair for VRF air conditioning systems.",
    icon: Building2,
  },
  {
    title: "System Diagnostics",
    description:
      "Professional inspection and technical assessment to identify system issues and recommend appropriate solutions.",
    icon: Settings,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-[#25282D] bg-[#090A0C] py-16 lg:scroll-mt-32 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">

          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1683FF] lg:text-xl">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#F8FAFC] lg:mt-4 lg:text-4xl">
            Professional Air Conditioning
            <span className="block text-[#1683FF]">
              Maintenance & Technical Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] lg:mt-6 lg:text-lg lg:leading-8">
            We provide reliable preventive maintenance, troubleshooting,
            repair, chemical cleaning, and VRF services for residential,
            commercial, and industrial clients.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-[#25282D]
                  bg-[#15171A]
                  p-6
                  shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#1683FF]/60
                  hover:bg-[#1A1D21]
                  hover:shadow-[0_15px_45px_rgba(22,131,255,0.12)]
                  lg:p-7
                "
              >

                {/* Hover Accent */}
                <div
                  className="
                    absolute left-0 top-0 h-[2px] w-0
                    bg-[#1683FF]
                    shadow-[0_0_12px_rgba(22,131,255,0.8)]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    border border-[#1683FF]/20
                    bg-[#1683FF]/10
                    transition-all duration-300
                    group-hover:border-[#1683FF]/50
                    group-hover:bg-[#1683FF]/15
                    group-hover:shadow-[0_0_25px_rgba(22,131,255,0.15)]
                    lg:h-14 lg:w-14
                  "
                >
                  <Icon
                    className="
                      h-6 w-6
                      text-[#1683FF]
                      transition-transform duration-300
                      group-hover:scale-110
                      lg:h-7 lg:w-7
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-[#F8FAFC]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-[#94A3B8]">
                  {service.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
                    mt-6 h-px w-10
                    bg-[#1683FF]/40
                    transition-all duration-300
                    group-hover:w-16
                    group-hover:bg-[#1683FF]
                  "
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}