import { MapPin, ArrowUpRight } from "lucide-react";

const areas = [
  "Imus",
  "Bacoor",
  "Dasmariñas",
  "General Trias",
  "Silang",
  "Trece Martires",
  "Cavite",
  "Metro Manila",
  "Laguna",
  "Batangas",
];

export default function ServiceAreas() {
  return (
    <section className="border-t border-[#25282D] bg-[#090A0C] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1683FF] lg:text-xl">
            Service Areas
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#F8FAFC] lg:text-4xl">
            Serving Cavite, Metro Manila
            <span className="block text-[#1683FF]">
              & Nearby Areas
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#94A3B8] lg:text-lg lg:leading-8">
            Coolmate Maintenance & Solutions Co. provides professional
            air conditioning preventive maintenance, repair, chemical
            cleaning, troubleshooting, and VRF services for residential,
            commercial, and industrial clients across Southern Luzon and
            Metro Manila.
          </p>
        </div>

        {/* Areas */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {areas.map((area) => (
            <div
              key={area}
              className="
                group flex items-center justify-between gap-3
                rounded-2xl
                border border-[#25282D]
                bg-[#15171A]
                p-4
                shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#1683FF]/60
                hover:bg-[#1A1D21]
                hover:shadow-[0_12px_30px_rgba(22,131,255,0.10)]
              "
            >
              <div className="flex items-center gap-3">
                <MapPin
                  className="
                    h-5 w-5 shrink-0
                    text-[#1683FF]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />

                <span className="font-medium text-[#CBD5E1]">
                  {area}
                </span>
              </div>

              <ArrowUpRight
                className="
                  h-4 w-4
                  text-[#475569]
                  opacity-0
                  transition-all duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-[#1683FF]
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

        {/* SEO Support Text */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm leading-6 text-[#64748B]">
            Our service coverage includes Imus, Bacoor, Dasmariñas,
            General Trias, Silang, Trece Martires, and other areas
            throughout Cavite, Metro Manila, Laguna, and Batangas.
          </p>
        </div>

      </div>
    </section>
  );
}