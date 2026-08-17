import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function ClientsPage() {
  return (
    <>
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      <main className="bg-white">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section
          className="
            relative
            min-h-[500px]
            overflow-hidden
            lg:min-h-[600px]
          "
        >

          {/* ================================================= */}
          {/* HERO BACKGROUND PHOTO */}
          {/* ================================================= */}

          <Image
            src="/images/clients/clients-hero.jpg"
            alt="Professional business partnership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* ================================================= */}
          {/* DARK OVERLAY */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-[#061A31]/65
            "
          />

          {/* ================================================= */}
          {/* LEFT GRADIENT */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061A31]/90
              via-[#08213D]/60
              to-transparent
            "
          />

          {/* ================================================= */}
          {/* HERO CONTENT */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[500px]
              items-center
              lg:min-h-[600px]
            "
          >

            <div
              className="
                mx-auto
                w-full
                max-w-7xl
                px-6
                lg:px-10
              "
            >

              <div className="max-w-4xl">

                {/* Blue Accent */}

                <div
                  className="
                    mb-6
                    h-1
                    w-14
                    rounded-full
                    bg-[#1683FF]
                  "
                />

                {/* Label */}

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#4EA8FF]
                    sm:text-base
                  "
                >
                  Our Clients & Partners
                </p>

                {/* Heading */}

                <h1
                  className="
                    mt-4
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                  "
                >
                  Trusted by Clients

                  <span className="block text-[#1683FF]">
                    & Strategic Partners
                  </span>
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-base
                    leading-7
                    text-slate-200
                    sm:text-lg
                    sm:leading-8
                    lg:text-xl
                  "
                >
                  We are proud to work with leading companies,
                  educational institutions, organizations, and
                  air conditioning contractors across the
                  Philippines.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* INTRODUCTION */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-20">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            <div className="mx-auto max-w-3xl text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Our Network
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                Building Long-Term Professional Relationships
              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Coolmate Maintenance & Solutions Co. is committed
                to building strong and lasting relationships with
                clients and industry partners through dependable
                service, professional workmanship, and quality
                air conditioning solutions.
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* OUR CLIENTS */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            {/* Header */}

            <div className="text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Our Clients
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                Companies & Organizations We Serve
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:text-lg
                  lg:leading-8
                "
              >
                We provide professional HVAC preventive
                maintenance, troubleshooting, repair, and VRF
                services to a growing network of clients.
              </p>

            </div>

            {/* Client Logos */}

            <div
              className="
                mt-14
                grid
                grid-cols-2
                items-center
                justify-items-center
                gap-8
                sm:grid-cols-3
                lg:grid-cols-4
                lg:gap-x-10
                lg:gap-y-12
              "
            >

              {clients.map((client) => (
                <div
                  key={client.name}
                  className="
                    group
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    p-6
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:scale-105
                    hover:shadow-[0_15px_40px_rgba(22,131,255,0.15)]
                    sm:h-40
                    sm:w-40
                    lg:h-44
                    lg:w-44
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

        </section>

        {/* ===================================================== */}
        {/* STRATEGIC PARTNERS */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            {/* Header */}

            <div className="text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Strategic Partners
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:text-4xl
                "
              >
                Working Together for Better Service
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:text-lg
                  lg:leading-8
                "
              >
                We work alongside trusted air conditioning
                contractors and engineering service providers for
                subcontracted preventive maintenance,
                troubleshooting, repair, and specialized VRF
                services.
              </p>

            </div>

            {/* Partner Logos */}

            <div
              className="
                mx-auto
                mt-14
                grid
                max-w-6xl
                grid-cols-1
                gap-8
                md:grid-cols-3
              "
            >

              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="
                    group
                    flex
                    h-40
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#1683FF]/40
                    hover:shadow-[0_15px_40px_rgba(22,131,255,0.15)]
                  "
                >

                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={340}
                    height={160}
                    className="
                      max-h-28
                      max-w-[90%]
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

        </section>

        {/* ===================================================== */}
        {/* CTA - NO BUTTON */}
        {/* ===================================================== */}

        <section className="bg-[#08213D] py-16 lg:py-20">

          <div
            className="
              mx-auto
              max-w-4xl
              px-6
              text-center
            "
          >

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#4EA8FF]
              "
            >
              Work With Us
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-white
                lg:text-4xl
              "
            >
              Looking for a Reliable HVAC Partner?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              Whether you need preventive maintenance,
              troubleshooting, repair, or specialized VRF
              services, Coolmate Maintenance & Solutions Co. is
              ready to work with you.
            </p>

          </div>

        </section>

      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </>
  );
}