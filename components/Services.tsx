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
    <section
      id="services"
      className="scroll-mt-32 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Complete Air Conditioning Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            We provide professional HVAC services for residential,
            commercial, and industrial clients.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-xl lg:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 lg:h-14 lg:w-14">
                  <Icon className="h-6 w-6 text-[#005BAC] lg:h-7 lg:w-7" />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}