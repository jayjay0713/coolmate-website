import {
  ShieldCheck,
  Wrench,
  Clock3,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Skilled Technicians",
    description:
      "Our experienced technicians deliver professional air conditioning services with attention to detail.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "We respond promptly to service requests to minimize downtime and inconvenience.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description:
      "Every service is performed using industry best practices and quality standards.",
  },
  {
    icon: Handshake,
    title: "Reliable Support",
    description:
      "We build long-term relationships by providing dependable after-service support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Air Conditioning Professionals
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600">
            We are committed to delivering reliable, professional, and
            high-quality air conditioning solutions for residential and
            commercial clients.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-200 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-8 w-8 text-[#005BAC]" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}