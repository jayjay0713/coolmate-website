"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const heroImages = [
  "/images/hero/hero-main.jpg",
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % heroImages.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[650px]
        overflow-hidden
        lg:min-h-[760px]
      "
    >
      {/* ================= BACKGROUND IMAGES ================= */}

      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            transition-all
            duration-[5000ms]
            ease-out
            ${
              index === currentImage
                ? "scale-110 opacity-100"
                : "scale-100 opacity-0"
            }
          `}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      {/* ================= LIGHTER BLUE OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#08213D]/35" />

      {/* ================= GRADIENT FOR TEXT READABILITY ================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#061A31]/45 via-[#08213D]/30 to-[#08213D]/15" />

      {/* ================= HERO CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[650px]
          items-start
          pt-20
          pb-20
          sm:items-center
          sm:py-0
          lg:min-h-[760px]
        "
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">

          <div
            className="
              mx-auto
              max-w-5xl
              text-center
            "
          >

            {/* ================= COMPANY NAME ================= */}

            <p
              className="
                mb-4
                text-sm
                font-extrabold
                uppercase
                tracking-[0.22em]
                text-[#4EA8FF]
                sm:mb-5
                sm:text-base
                sm:tracking-[0.25em]
                lg:text-lg
              "
            >
              Coolmate Maintenance & Solutions Co.
            </p>

            {/* ================= MAIN HEADING ================= */}

            <h1
              className="
                text-4xl
                font-bold
                leading-[1.08]
                text-white
                sm:text-5xl
                sm:leading-tight
                lg:text-6xl
                xl:text-7xl
              "
            >
              Reliable Air Conditioning

              <span className="block text-[#1683FF]">
                Solutions
              </span>

              for Homes & Businesses
            </h1>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mx-auto
                mt-5
                max-w-4xl
                text-sm
                leading-6
                text-slate-200
                sm:mt-6
                sm:text-lg
                sm:leading-8
                lg:mt-8
                lg:text-xl
              "
            >
              Professional preventive maintenance, repair, and
              troubleshooting of VRF and Split-Type air conditioning
              systems for residential, commercial, and industrial
              clients throughout the Philippines.
            </p>

            {/* ================= CTA BUTTONS ================= */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:gap-4
                lg:mt-10
              "
            >

              {/* PRIMARY CTA */}

              <a
                href="mailto:info@coolmateco.com?subject=Request%20for%20Air%20Conditioning%20Quotation"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#1683FF]
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0B72E5]
                  hover:shadow-[0_10px_40px_rgba(22,131,255,0.35)]
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Request a Free Quote

                <ArrowRight className="h-5 w-5" />
              </a>

              {/* SECONDARY CTA */}

              <a
                href="/#contact"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white/80
                  bg-white/5
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-[#08213D]
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >
                Get a Free Consultation
              </a>

            </div>

            {/* ================= TRUST INDICATORS ================= */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-2
                text-xs
                text-slate-200
                sm:mt-10
                sm:gap-x-6
                sm:gap-y-3
                sm:text-sm
                lg:mt-12
              "
            >

              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2
                  className="
                    h-4
                    w-4
                    text-[#1683FF]
                    sm:h-5
                    sm:w-5
                  "
                />

                <span>
                  Certified Technicians
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2
                  className="
                    h-4
                    w-4
                    text-[#1683FF]
                    sm:h-5
                    sm:w-5
                  "
                />

                <span>
                  Residential & Commercial
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2
                  className="
                    h-4
                    w-4
                    text-[#1683FF]
                    sm:h-5
                    sm:w-5
                  "
                />

                <span>
                  Quality Workmanship
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= SLIDE INDICATORS ================= */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          flex
          -translate-x-1/2
          gap-2
          sm:bottom-7
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show hero image ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                index === currentImage
                  ? "w-8 bg-[#1683FF]"
                  : "w-2 bg-white/50 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}