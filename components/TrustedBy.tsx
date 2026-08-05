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
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Trusted By
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Trusted by Leading Companies & Institutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            We're proud to have delivered professional HVAC solutions
            to respected companies, schools, and organizations.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6 lg:gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={220}
                height={100}
                className="h-14 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:scale-110 hover:grayscale-0 hover:opacity-100 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}