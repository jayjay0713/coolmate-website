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
      className="bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Our Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Preventive Maintenance,
            <br className="hidden lg:block" />
            <span className="lg:inline">
              {" "}Troubleshooting & Repair Specialists
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            Coolmate Maintenance & Solutions Co. provides expert preventive maintenance, troubleshooting, and
            repair services for VRF and split-type air conditioning systems. We deliver dependable HVAC solutions
            that maximize system performance, minimize downtime, and ensure efficient operation across
            residential, commercial, and industrial facilities.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005BAC]/10 lg:mb-8 lg:h-16 lg:w-16">
                  <Icon className="h-7 w-7 text-[#005BAC] lg:h-8 lg:w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 lg:mt-5 lg:leading-8">
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