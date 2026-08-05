import Image from "next/image";

const clients = [
  {
    name: "De La Salle University",
    logo: "/images/clients/dlsu.png",
  },
  {
    name: "Amway",
    logo: "/images/clients/amway.png",
  },
  {
    name: "HealthFirst",
    logo: "/images/clients/healthfirst.png",
  },
  {
    name: "StraightArrow",
    logo: "/images/clients/straightarrow.png",
  },
  {
    name: "ASA Foundation",
    logo: "/images/clients/asa.png",
  },
  {
    name: "Akulaku",
    logo: "/images/clients/akulaku.png",
  },
  {
    name: "Artelia",
    logo: "/images/clients/artelia.png",
  },
  {
    name: "ICON",
    logo: "/images/clients/icon.png",
  },
];

const partners = [
  {
    name: "Metroaire Industrial Corp.",
    logo: "/images/partners/metroaire.png",
  },
  {
    name: "KHG Engineering Services",
    logo: "/images/partners/khg.png",
  },
  {
    name: "ProfBuilders & Services OPC",
    logo: "/images/partners/profbuilders.png",
  },
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Trusted by Clients & Strategic Partners
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-4xl">
            Building Long-Term Professional Relationships
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 lg:text-lg lg:leading-8">
            We're proud to provide professional HVAC preventive
            maintenance, troubleshooting, repair, and VRF services to
            leading companies, educational institutions, and trusted
            air conditioning contractors across the Philippines.
          </p>
        </div>

        {/* OUR CLIENTS */}
        <div className="mt-16">
          <h3 className="mb-10 text-center text-xl font-bold uppercase tracking-widest text-[#005BAC]">
            Our Clients
          </h3>

          <div className="grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-14">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={120}
                  className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_12px_25px_rgba(0,91,172,0.20)] lg:h-20"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-slate-200" />

        {/* STRATEGIC PARTNERS */}
        <div>
          <h3 className="mb-4 text-center text-xl font-bold uppercase tracking-widest text-[#005BAC]">
            Strategic Partners
          </h3>

          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-7 text-slate-600">
            Trusted by leading air conditioning contractors for
            subcontracted preventive maintenance, troubleshooting,
            repair, and specialized VRF services.
          </p>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-40 items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={340}
                  height={160}
                  className="max-h-24 w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}