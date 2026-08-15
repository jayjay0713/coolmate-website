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

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#94A3B8] lg:mt-6 lg:text-lg lg:leading-8">
            We're proud to provide professional HVAC preventive
            maintenance, troubleshooting, repair, and VRF services to
            leading companies, educational institutions, and trusted
            air conditioning contractors across the Philippines.
          </p>
        </div>

        {/* ==================== OUR CLIENTS ==================== */}
        <div className="mt-16">
          <h3 className="mb-10 text-center text-xl font-bold uppercase tracking-widest text-[#1683FF]">
            Our Clients
          </h3>

          <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-16 lg:gap-y-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="
                  group flex h-32 w-32
                  items-center justify-center
                  rounded-full
                  bg-white
                  p-5
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(22,131,255,0.22)]
                  sm:h-36 sm:w-36
                  sm:p-6
                  lg:h-40 lg:w-40
                  lg:p-7
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={220}
                  height={100}
                  className="
                    max-h-24
                    max-w-full
                    w-auto
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#25282D]" />

        {/* ==================== STRATEGIC PARTNERS ==================== */}
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
                  group flex h-40
                  items-center justify-center
                  rounded-3xl
                  border border-[#25282D]
                  bg-[#15171A]
                  p-6
                  shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#1683FF]/60
                  hover:bg-[#1A1D21]
                  hover:shadow-[0_15px_45px_rgba(22,131,255,0.12)]
                "
              >
                {/* White Logo Background */}
                <div
                  className="
                    flex h-28 w-full
                    items-center justify-center
                    rounded-2xl
                    bg-white
                    px-8 py-5
                    shadow-sm
                    transition-all duration-300
                    group-hover:scale-[1.03]
                  "
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={340}
                    height={160}
                    className="
                      max-h-20
                      max-w-full
                      w-auto
                      object-contain
                      transition-transform duration-300
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}