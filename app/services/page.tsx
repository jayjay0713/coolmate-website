import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Wrench,
  Sparkles,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Air Conditioning Preventive Maintenance",
    description:
      "Planned servicing that keeps failures from ever happening.",
    image: "/images/services/preventive-maintenance-hero.jpg",
    href: "/services/preventive-maintenance",
    icon: ShieldCheck,
    points: [
      "Scheduled quarterly or monthly servicing",
      "Full electrical and refrigerant diagnostics",
      "Digital service report per unit after every visit",
      "Extends equipment life by up to 40%",
    ],
    duration: "Half to full day, depending on unit count",
    warranty: "30-day workmanship warranty on every serviced unit",
  },

  {
    number: "02",
    title: "Air Conditioning General Cleaning",
    description:
      "Deep chemical cleaning for fresher air and lower bills.",
    image: "/images/services/cleaning-hero.jpg",
    href: "/services/cleaning",
    icon: Sparkles,
    points: [
      "Foaming coil cleaner and antibacterial treatment",
      "Noticeably colder air and lower power draw",
      "High-pressure blower wheel and drain cleaning",
      "Ideal before turnover, audits or peak summer",
    ],
    duration: "45 – 90 minutes per unit",
    warranty: "14-day cleanliness and performance guarantee",
  },

  {
    number: "03",
    title: "Air Conditioning Repair",
    description:
      "Fast, honest diagnosis and repairs that actually last.",
    image: "/images/services/repair-hero.jpg",
    href: "/services/repair",
    icon: Wrench,
    points: [
      "Same-day response for Metro Manila sites",
      "Transparent quotation before any work begins",
      "Certified technicians with years of experience",
      "Genuine or OEM-equivalent replacement parts",
    ],
    duration: "Same or next business day",
    warranty: "90-day parts and labor warranty on major repairs",
  },

  {
    number: "04",
    title: "Air Conditioning Troubleshooting",
    description:
      "Find the hidden problem before it becomes a replacement.",
    image: "/images/services/troubleshooting-hero.jpg",
    href: "/services/troubleshooting",
    icon: Search,
    points: [
      "Instrument-based diagnostics, not trial and error",
      "Whole-system review including ducting and power supply",
      "Error code interpretation for all major brands",
      "Root-cause report with prioritized fix list",
    ],
    duration: "1 – 2 hours per system",
    warranty: "Diagnostic fee credited toward approved repairs",
  },

  {
    number: "05",
    title: "Air Conditioning Sales & Installation",
    description:
      "Right-sized units, installed cleanly and commissioned properly.",
    image: "/images/services/installation-hero.jpg",
    href: "/services/installation",
    icon: ShoppingCart,
    points: [
      "Heat load computation and unit sizing",
      "Clean routing of piping, drain and electrical lines",
      "Split, window, cassette, floor-mounted and VRF systems",
      "Commissioning, testing and user orientation",
    ],
    duration: "1 day for residential, project-based for commercial",
    warranty: "1-year installation warranty plus manufacturer coverage",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* ===================================================== */}
        {/* SERVICES HERO */}
        {/* ===================================================== */}

        <section
          className="
            relative
            min-h-[430px]
            overflow-hidden
            lg:min-h-[520px]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                'url("/images/services/services-hero.png")',
            }}
          />

          <div
            className="
              absolute
              inset-0
              bg-[#08213D]/55
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061A31]/80
              via-[#08213D]/45
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              flex
              min-h-[430px]
              items-center
              lg:min-h-[520px]
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

                <div
                  className="
                    mb-6
                    h-1
                    w-12
                    rounded-full
                    bg-[#1683FF]
                  "
                />

                <h1
                  className="
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Our Air Conditioning

                  <span className="block text-[#1683FF]">
                    Services
                  </span>
                </h1>

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-200
                    sm:text-xl
                  "
                >
                  Professional air conditioning solutions for
                  homes, businesses, and industrial facilities.
                  From preventive maintenance and cleaning to
                  troubleshooting, repair, sales, and installation.
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
                What We Do
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
                Complete Air Conditioning Solutions
              </h2>

              <p
                className="
                  mt-5
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                From regular maintenance and cleaning to
                troubleshooting, repair, sales, and installation,
                Coolmate Maintenance & Solutions Co. provides air
                conditioning services designed around the needs
                of your property and equipment.
              </p>

            </div>
          </div>

        </section>


        {/* ===================================================== */}
        {/* SERVICES - REFERENCE STYLE */}
        {/* ===================================================== */}

        <section className="bg-white py-8 pb-20 lg:py-12 lg:pb-28">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            <div className="space-y-10 lg:space-y-12">

              {services.map((service, index) => {
                const Icon = service.icon;
                const imageLeft = index % 2 === 0;

                return (
                  <article
                    key={service.href}
                    className="
                      group
                      overflow-hidden
                      rounded-3xl
                      bg-white
                    "
                  >

                    <div
                      className={`
                        grid
                        items-center
                        gap-8
                        lg:grid-cols-2
                        lg:gap-10
                        xl:gap-12
                        ${
                          imageLeft
                            ? ""
                            : "lg:[&>div:first-child]:order-2"
                        }
                      `}
                    >

                      {/* ================================================= */}
                      {/* IMAGE */}
                      {/* ================================================= */}

                      <div
                        className="
                          relative
                          h-[300px]
                          overflow-hidden
                          rounded-2xl
                          sm:h-[360px]
                          lg:h-[385px]
                          xl:h-[420px]
                        "
                      >

                        <img
                          src={service.image}
                          alt={service.title}
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-[1.03]
                          "
                        />

                        {/* Soft image overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#08213D]/25
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* Floating icon */}

                        <div
                          className="
                            absolute
                            left-5
                            top-5
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                            lg:left-6
                            lg:top-6
                          "
                        >
                          <Icon
                            className="
                              h-6
                              w-6
                              text-[#1683FF]
                            "
                          />
                        </div>

                      </div>


                      {/* ================================================= */}
                      {/* CONTENT */}
                      {/* ================================================= */}

                      <div className="py-2 lg:py-4">

                        {/* SERVICE NUMBER */}

                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.24em]
                            text-[#1683FF]
                          "
                        >
                          Service {service.number}
                        </p>


                        {/* TITLE */}

                        <h3
                          className="
                            mt-4
                            text-3xl
                            font-extrabold
                            leading-[1.15]
                            text-[#08213D]
                            sm:text-4xl
                            lg:text-[2.35rem]
                            xl:text-4xl
                          "
                        >
                          {service.title}
                        </h3>


                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            text-[#31537A]
                            lg:text-lg
                            lg:leading-8
                          "
                        >
                          {service.description}
                        </p>


                        {/* ================================================= */}
                        {/* CHECKLIST */}
                        {/* ================================================= */}

                        <div
                          className="
                            mt-6
                            grid
                            gap-x-8
                            gap-y-4
                            sm:grid-cols-2
                          "
                        >

                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="
                                flex
                                items-start
                                gap-3
                                text-sm
                                leading-6
                                text-[#31537A]
                              "
                            >

                              <CheckCircle2
                                className="
                                  mt-0.5
                                  h-4
                                  w-4
                                  shrink-0
                                  text-[#1683FF]
                                "
                              />

                              <span>
                                {point}
                              </span>

                            </div>
                          ))}

                        </div>


                        {/* ================================================= */}
                        {/* DURATION + WARRANTY */}
                        {/* ================================================= */}

                        <div className="mt-6 space-y-3">

                          <div
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              text-[#31537A]
                            "
                          >

                            <Clock3
                              className="
                                mt-0.5
                                h-4
                                w-4
                                shrink-0
                                text-[#31537A]
                              "
                            />

                            <span>
                              {service.duration}
                            </span>

                          </div>


                          <div
                            className="
                              flex
                              items-start
                              gap-3
                              text-sm
                              text-[#31537A]
                            "
                          >

                            <ShieldCheck
                              className="
                                mt-0.5
                                h-4
                                w-4
                                shrink-0
                                text-[#31537A]
                              "
                            />

                            <span>
                              {service.warranty}
                            </span>

                          </div>

                        </div>


                        {/* ================================================= */}
                        {/* BUTTON */}
                        {/* ================================================= */}

                        <Link
                          href={service.href}
                          className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-[#1683FF]
                            px-7
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_8px_25px_rgba(22,131,255,0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#0B72E5]
                            hover:gap-3
                            hover:shadow-[0_12px_30px_rgba(22,131,255,0.30)]
                          "
                        >
                          View service details

                          <ArrowRight className="h-4 w-4" />
                        </Link>

                      </div>

                    </div>

                  </article>
                );
              })}

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* SERVICE HIGHLIGHTS */}
        {/* ===================================================== */}

        <section className="bg-[#F3F6FA] py-16 lg:py-20">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            <div className="mx-auto max-w-4xl text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Why Choose Coolmate
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-[#08213D]
                  lg:text-4xl
                "
              >
                Professional Service for Every Stage of Your System
              </h2>

            </div>

            <div
              className="
                mx-auto
                mt-10
                grid
                max-w-5xl
                gap-4
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {[
                "Experienced Air Conditioning Technicians",
                "Residential & Commercial Service",
                "VRF & Split-Type Systems",
                "Professional Workmanship",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-[0_8px_25px_rgba(8,33,61,0.05)]
                  "
                >

                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-[#1683FF]
                    "
                  />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* FINAL SECTION */}
        {/* ===================================================== */}

        <section
          className="
            bg-[#08213D]
            py-16
            lg:py-20
          "
        >

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
              Coolmate Maintenance & Solutions Co.
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
              Reliable Air Conditioning Solutions
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
              Professional air conditioning services for homes,
              businesses, and industrial facilities throughout
              the Philippines.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}