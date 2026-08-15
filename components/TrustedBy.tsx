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
    <section className="border-t border-[#25282D] bg-[#101214] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1683FF] lg:text-xl">
            Trusted by Clients & Strategic Partners
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#F8FAFC] lg:mt-4 lg:text-4xl">
            Building Long-Term Professional
            <span className="block text-[#1683FF]">
              Relationships
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#94A3B8] lg:text-lg lg:leading-8">
            We're proud to provide professional HVAC preventive
            maintenance, troubleshooting, repair, and VRF services to
            leading companies, educational institutions, and trusted
            air conditioning contractors across the Philippines.
          </p>
        </div>

        {/* OUR CLIENTS */}
        <div className="mt-16">
          <h3 className="mb-10 text-center text-xl font-bold uppercase tracking-widest text-[#1683FF]">
            Our Clients
          </h3>

          <div className="grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-14">
            {clients.map((client) => (
              <div
                key={client.name}
                className="
                  group flex h-24 items-center justify-center
                  rounded-2xl
                  border border-transparent
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#25282D]
                  hover:bg-[#15171A]
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={120}
                  className="
                    h-16 w-auto object-contain
                    opacity-85
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_12px_25px_rgba(22,131,255,0.18)]
                    lg:h-20
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#25282D]" />

        {/* STRATEGIC PARTNERS */}
        <div>
          <h3 className="mb-4 text-center text-xl font-bold uppercase tracking-widest text-[#1683FF]">
            Strategic Partners
          </h3>

          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-7 text-[#94A3B8]">
            Trusted by leading air conditioning contractors for
            subcontracted preventive maintenance, troubleshooting,
            repair, and specialized VRF services.
          </p>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="
                  group flex h-40 items-center justify-center
                  rounded-3xl
                  border border-[#25282D]
                  bg-[#15171A]
                  p-8
                  shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#1683FF]/60
                  hover:bg-[#1A1D21]
                  hover:shadow-[0_15px_45px_rgba(22,131,255,0.12)]
                "
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={340}
                  height={160}
                  className="
                    max-h-24 w-auto object-contain
                    transition-all duration-300
                    group-hover:scale-110
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}