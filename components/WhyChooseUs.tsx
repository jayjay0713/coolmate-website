import {
  CheckCircle2,
  CalendarDays,
  Headset,
  BriefcaseBusiness,
  Building2,
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
    icon: CalendarDays,
  },
  {
    value: "24/7",
    label: "Customer Support",
    icon: Headset,
  },
  {
    value: "100+",
    label: "Projects Completed",
    icon: BriefcaseBusiness,
  },
  {
    value: "Residential",
    label: "& Commercial",
    icon: Building2,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Air Conditioning Professionals
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            We provide dependable air conditioning services backed by
            experienced technicians, transparent pricing, and quality
            workmanship for every residential and commercial client.
          </p>

          <div className="mt-10 space-y-6">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 text-[#005BAC]" />

                <p className="text-lg text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="h-7 w-7 text-[#005BAC]" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}