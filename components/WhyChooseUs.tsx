import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Certified Technicians",
  "Residential & Commercial Services",
  "Transparent Pricing",
  "Quality Workmanship Warranty",
];

const stats = [
  {
    value: "EST. 2024",
    label: "Established",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "Residential",
    label: "& Commercial",
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
            We provide dependable air conditioning services backed by
            experienced technicians, transparent pricing, and quality
            workmanship for every residential and commercial client.
          </p>

          <div className="mt-8 space-y-4 lg:mt-10 lg:space-y-6">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 lg:gap-4"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#005BAC] lg:h-6 lg:w-6" />

                <p className="text-base text-slate-700 lg:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-slate-900 p-6 text-center text-white shadow-lg lg:p-10"
            >
              <h3 className="text-2xl font-bold lg:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-slate-300 lg:mt-4 lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}