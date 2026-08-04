import {
  Wrench,
  PenTool,
  Fan,
  Sparkles,
  Building2,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Preventive Maintenance",
    description:
      "Keep your air conditioning system running efficiently with scheduled maintenance.",
    icon: Wrench,
  },
  {
    title: "Aircon Repair",
    description:
      "Fast diagnosis and repair for residential and commercial air conditioners.",
    icon: PenTool,
  },
  {
    title: "Installation",
    description:
      "Professional installation of split-type, window-type, and VRF systems.",
    icon: Fan,
  },
  {
    title: "Chemical Cleaning",
    description:
      "Deep cleaning to restore cooling performance and improve air quality.",
    icon: Sparkles,
  },
  {
    title: "VRF Services",
    description:
      "Specialized maintenance and repair for VRF air conditioning systems.",
    icon: Building2,
  },
  {
    title: "Troubleshooting",
    description:
      "Quick identification and resolution of air conditioning problems.",
    icon: Search,
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Complete Air Conditioning Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We provide professional HVAC services for residential,
            commercial, and industrial clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50">
                  <Icon className="h-7 w-7 text-[#005BAC]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 font-semibold text-[#005BAC] hover:underline">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}