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
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">

        {/* Left Side */}
        <div>
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Trusted Air Conditioning Professionals
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            Coolmate Maintenance & Solutions Co. specializes in
            preventive maintenance, troubleshooting, repair, and VRF
            air conditioning systems. We are committed to delivering
            reliable, efficient, and professional HVAC solutions for
            residential, commercial, and industrial clients.
          </p>

          <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#005BAC]" />

                <p className="text-base text-slate-700 lg:text-lg">
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
                className="group rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-[#005BAC] lg:p-6"
              >
                <div className="mb-3 flex justify-center">
                  <div className="rounded-xl bg-[#005BAC]/20 p-2.5">
                    <Icon className="h-6 w-6 text-[#4EA8FF] lg:h-7 lg:w-7" />
                  </div>
                </div>

                <h3 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
                  {stat.value}
                </h3>

                <p className="mt-2 text-base font-semibold text-[#4EA8FF]">
                  {stat.label}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-300 lg:text-sm">
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