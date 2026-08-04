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
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Trusted By
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted by Leading Companies & Institutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We're proud to have delivered professional HVAC solutions
            to respected companies, schools, and organizations.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-20 grid grid-cols-2 items-center gap-12 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={220}
                height={100}
                className="h-20 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}