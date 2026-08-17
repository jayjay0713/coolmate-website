import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  Sparkles,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Air Conditioning Preventive Maintenance",
    description:
      "Keep your air conditioning systems running efficiently, reliably, and safely with professional preventive maintenance.",
    image: "/images/services/preventive-maintenance-hero.jpg",
    href: "/services/preventive-maintenance",
    icon: Settings,
  },
  {
    title: "Air Conditioning General Cleaning",
    description:
      "Professional cleaning to help maintain cleaner air conditioning systems, proper airflow, and reliable drainage.",
    image: "/images/services/cleaning-hero.jpg",
    href: "/services/cleaning",
    icon: Sparkles,
  },
  {
    title: "Air Conditioning Repair",
    description:
      "Professional repair services for air conditioning systems experiencing cooling, electrical, mechanical, and operating problems.",
    image: "/images/services/repair-hero.jpg",
    href: "/services/repair",
    icon: Wrench,
  },
  {
    title: "Air Conditioning Troubleshooting",
    description:
      "System troubleshooting and diagnostics to help identify the causes of cooling, electrical, drainage, control, and operating problems.",
    image: "/images/services/troubleshooting-hero.jpg",
    href: "/services/troubleshooting",
    icon: Search,
  },
  {
    title: "Air Conditioning Sales & Installation",
    description:
      "Professional air conditioning sales and installation services for residential, commercial, and industrial applications.",
    image: "/images/services/installation-hero.jpg",
    href: "/services/installation",
    icon: ShoppingCart,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

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
          {/* Background Photo */}

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

          {/* Dark Navy Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[#08213D]/55
            "
          />

          {/* Gradient */}

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

          {/* Hero Content */}

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

                {/* Blue Accent */}

                <div
                  className="
                    mb-6
                    h-1
                    w-12
                    rounded-full
                    bg-[#1683FF]
                  "
                />

                {/* Heading */}

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

                {/* Description */}

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
        {/* SERVICES */}
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

            {/* ================================================= */}
            {/* FIRST ROW - 3 CARDS */}
            {/* ================================================= */}

            <div
              className="
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {services.slice(0, 3).map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.href}
                    className="
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-[#1683FF]/40
                      hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]
                    "
                  >

                    {/* ========================================= */}
                    {/* IMAGE */}
                    {/* ========================================= */}

                    <div
                      className="
                        relative
                        h-[250px]
                        overflow-hidden
                      "
                    >

                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#08213D]/75
                          via-[#08213D]/10
                          to-transparent
                        "
                      />

                      {/* Icon */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#1683FF]
                          text-white
                          shadow-lg
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                    </div>

                    {/* ========================================= */}
                    {/* CONTENT */}
                    {/* ========================================= */}

                    <div className="p-7">

                      <h3
                        className="
                          text-xl
                          font-bold
                          leading-snug
                          text-slate-900
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          min-h-[96px]
                          text-base
                          leading-7
                          text-slate-600
                        "
                      >
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="
                          mt-6
                          inline-flex
                          items-center
                          gap-2
                          font-bold
                          text-[#1683FF]
                          transition-all
                          duration-300
                          hover:gap-3
                          hover:text-[#0B72E5]
                        "
                      >
                        Learn More

                        <ArrowRight className="h-5 w-5" />
                      </Link>

                    </div>

                  </article>
                );
              })}

            </div>

            {/* ================================================= */}
            {/* SECOND ROW - 2 CENTERED CARDS */}
            {/* ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-8
                md:flex-row
              "
            >

              {services.slice(3, 5).map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.href}
                    className="
                      group
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-[#1683FF]/40
                      hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]
                      md:w-[calc(33.333%-1rem)]
                    "
                  >

                    {/* ========================================= */}
                    {/* IMAGE */}
                    {/* ========================================= */}

                    <div
                      className="
                        relative
                        h-[250px]
                        overflow-hidden
                      "
                    >

                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#08213D]/75
                          via-[#08213D]/10
                          to-transparent
                        "
                      />

                      {/* Icon */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#1683FF]
                          text-white
                          shadow-lg
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                    </div>

                    {/* ========================================= */}
                    {/* CONTENT */}
                    {/* ========================================= */}

                    <div className="p-7">

                      <h3
                        className="
                          text-xl
                          font-bold
                          leading-snug
                          text-slate-900
                        "
                      >
                        {service.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          min-h-[96px]
                          text-base
                          leading-7
                          text-slate-600
                        "
                      >
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="
                          mt-6
                          inline-flex
                          items-center
                          gap-2
                          font-bold
                          text-[#1683FF]
                          transition-all
                          duration-300
                          hover:gap-3
                          hover:text-[#0B72E5]
                        "
                      >
                        Learn More

                        <ArrowRight className="h-5 w-5" />
                      </Link>

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

        <section className="bg-white py-16 lg:py-20">

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
                  text-slate-900
                  lg:text-4xl
                "
              >
                Professional Service for Every Stage of Your System
              </h2>

            </div>

            <div
              className="
                mx-auto
                mt-12
                grid
                max-w-5xl
                gap-5
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
                    border-white/10
                    bg-[#08213D]
                    p-5
                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#061A31]
                  "
                >
                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-[#4EA8FF]
                    "
                  />

                  <span
                    className="
                      font-semibold
                      text-white
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

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </>
  );
}