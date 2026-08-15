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
    <section className="border-t border-[#25282D] bg-[#101214] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">

        {/* Left Side */}
        <div>
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1683FF] lg:text-xl">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#F8FAFC] lg:mt-4 lg:text-4xl">
            Trusted Air Conditioning
            <span className="block text-[#1683FF]">
              Professionals
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#94A3B8] lg:mt-6 lg:text-lg lg:leading-8">
            Coolmate Maintenance & Solutions Co. specializes in
            preventive maintenance, troubleshooting, repair, and VRF
            air conditioning systems. We are committed to delivering
            reliable, efficient, and professional HVAC solutions for
            residential, commercial, and industrial clients.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1683FF]" />

                <p className="text-base text-[#CBD5E1] lg:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-[#25282D]
                  bg-[#15171A]
                  p-5
                  text-center
                  shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#1683FF]/60
                  hover:bg-[#1A1D21]
                  hover:shadow-[0_15px_45px_rgba(22,131,255,0.12)]
                  lg:p-6
                "
              >

                {/* Blue Top Accent */}
                <div
                  className="
                    absolute left-0 top-0
                    h-[2px] w-0
                    bg-[#1683FF]
                    shadow-[0_0_12px_rgba(22,131,255,0.8)]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                {/* Icon */}
                <div className="mb-3 flex justify-center">
                  <div
                    className="
                      rounded-xl
                      border border-[#1683FF]/20
                      bg-[#1683FF]/10
                      p-2.5
                      transition-all duration-300
                      group-hover:border-[#1683FF]/50
                      group-hover:bg-[#1683FF]/15
                      group-hover:shadow-[0_0_25px_rgba(22,131,255,0.15)]
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
                </div>

                {/* Number */}
                <h3 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC] lg:text-4xl">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-base font-semibold text-[#1683FF]">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-[#94A3B8] lg:text-sm">
                  {stat.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}