import { MapPin } from "lucide-react";

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
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Service Areas
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Serving Cavite, Metro Manila & Nearby Areas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
            Coolmate Maintenance & Solutions Co. provides professional
            air conditioning installation, preventive maintenance,
            repair, chemical cleaning, troubleshooting, and VRF
            services for residential, commercial, and industrial
            clients across Southern Luzon and Metro Manila.
          </p>
        </div>

        {/* Areas */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <MapPin className="h-5 w-5 text-[#005BAC]" />

              <span className="font-medium text-slate-700">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}