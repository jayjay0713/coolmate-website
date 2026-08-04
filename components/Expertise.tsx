import {
  Home,
  Building2,
  Factory,
} from "lucide-react";

const expertise = [
  {
    icon: Home,
    title: "Residential",
    description:
      "Professional air conditioning solutions for homes, apartments and condominiums.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description:
      "Reliable HVAC services for offices, retail stores, restaurants and commercial buildings.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Preventive maintenance and specialized cooling solutions for warehouses and industrial facilities.",
  },
];

export default function Expertise() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Our Expertise
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Professional HVAC Solutions
            <br />
            for Every Environment
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether it's a home, office, retail space or industrial facility,
            Coolmate delivers reliable air conditioning solutions tailored to
            every environment.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#005BAC]/10">
                  <Icon className="h-8 w-8 text-[#005BAC]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
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