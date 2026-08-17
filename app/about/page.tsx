import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Wrench,
  Award,
  Building2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
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

          {/* Background */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
            "
            style={{
              backgroundImage:
                'url("/images/about/about-hero.jpg")',
            }}
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-[#061A31]/65" />

          {/* Left Gradient */}

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

          {/* Hero Content */}

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

                <div
                  className="
                    mb-6
                    h-1
                    w-14
                    rounded-full
                    bg-[#1683FF]
                  "
                />

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
                  About Coolmate
                </p>

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
                  Reliable Air Conditioning

                  <span className="block text-[#1683FF]">
                    Solutions You Can Trust
                  </span>
                </h1>

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
                  Professional air conditioning maintenance,
                  repair, troubleshooting, and installation services
                  for residential, commercial, and industrial clients.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* COMPANY STORY */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-10
              px-6
              lg:grid-cols-2
              lg:items-center
              lg:gap-16
              lg:px-10
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                  lg:text-xl
                "
              >
                Our Story
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  text-slate-900
                  lg:mt-4
                  lg:text-4xl
                "
              >
                Built on Experience,

                <span className="block text-[#1683FF]">
                  Driven by Quality
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
                Coolmate Maintenance and Solutions Co. was founded
                on January 18, 2024, and is your go-to partner for
                maintaining the longevity and best possible
                performance of your air conditioning systems.
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600
                  lg:text-lg
                  lg:leading-8
                "
              >
                Coolmate has rapidly established itself as a name
                in the market for dependability and knowledge because
                of its unwavering dedication to quality and client
                happiness.
              </p>

              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600
                  lg:text-lg
                  lg:leading-8
                "
              >
                We provide professional air conditioning services
                designed to help our customers maintain reliable,
                efficient, and properly operating systems throughout
                their service life.
              </p>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div
                className="
                  absolute
                  -inset-4
                  rounded-[2rem]
                  bg-[#1683FF]/10
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#08213D]
                  p-8
                  shadow-[0_20px_60px_rgba(8,33,61,0.25)]
                  lg:p-10
                "
              >

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    rounded-full
                    bg-[#1683FF]/10
                    blur-2xl
                  "
                />

                <Building2
                  className="
                    relative
                    h-12
                    w-12
                    text-[#4EA8FF]
                  "
                />

                <p
                  className="
                    relative
                    mt-6
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#4EA8FF]
                  "
                >
                  Established
                </p>

                <h3
                  className="
                    relative
                    mt-2
                    text-5xl
                    font-extrabold
                    text-white
                  "
                >
                  2024
                </h3>

                <p
                  className="
                    relative
                    mt-5
                    leading-7
                    text-slate-300
                  "
                >
                  Providing professional air conditioning
                  maintenance and solutions with a strong focus
                  on quality, reliability, and customer satisfaction.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* MISSION & VISION */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Header */}

            <div className="text-center">

              <p
                className="
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                  lg:text-xl
                "
              >
                Our Direction
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:mt-4
                  lg:text-4xl
                "
              >
                Our Mission & Vision
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
                We are committed to providing dependable air
                conditioning solutions while building lasting
                relationships with our customers.
              </p>

            </div>

            {/* Cards */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-2
              "
            >

              {/* MISSION */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                  lg:p-10
                "
              >

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-[#1683FF]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#1683FF]/30
                    bg-[#1683FF]/10
                  "
                >
                  <Target className="h-7 w-7 text-[#4EA8FF]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Our Mission
                </h3>

                <p
                  className="
                    mt-4
                    text-base
                    leading-7
                    text-slate-300
                    lg:text-lg
                    lg:leading-8
                  "
                >
                  To provide reliable, professional, and high-quality
                  air conditioning maintenance and solutions that
                  help our customers achieve comfortable, efficient,
                  and properly functioning spaces. We strive to
                  deliver excellent workmanship, dependable service,
                  and customer satisfaction in every project we
                  undertake.
                </p>

              </div>

              {/* VISION */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                  lg:p-10
                "
              >

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-0
                    bg-[#1683FF]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#1683FF]/30
                    bg-[#1683FF]/10
                  "
                >
                  <Eye className="h-7 w-7 text-[#4EA8FF]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Our Vision
                </h3>

                <p
                  className="
                    mt-4
                    text-base
                    leading-7
                    text-slate-300
                    lg:text-lg
                    lg:leading-8
                  "
                >
                  To become a trusted and respected air conditioning
                  solutions provider in the Philippines, recognized
                  for our technical expertise, reliability, quality
                  workmanship, and commitment to customer satisfaction.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* CORE VALUES */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="text-center">

              <p
                className="
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                  lg:text-xl
                "
              >
                What We Stand For
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-slate-900
                  lg:mt-4
                  lg:text-4xl
                "
              >
                Our Core Values
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
                Our commitment to quality and customer satisfaction
                guides every service we provide.
              </p>

            </div>

            {/* Value Cards */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {/* QUALITY */}

              <div
                className="
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                "
              >

                <Award className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Quality
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  We are committed to delivering quality
                  workmanship and dependable service.
                </p>

              </div>

              {/* RELIABILITY */}

              <div
                className="
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                "
              >

                <ShieldCheck className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Reliability
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Our customers can rely on us for professional
                  and dependable air conditioning services.
                </p>

              </div>

              {/* CUSTOMER FOCUS */}

              <div
                className="
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                "
              >

                <Users className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Customer Focus
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  We put customer needs and satisfaction at the
                  center of every project.
                </p>

              </div>

              {/* PROFESSIONALISM */}

              <div
                className="
                  rounded-3xl
                  bg-[#08213D]
                  p-7
                  shadow-[0_10px_35px_rgba(8,33,61,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-[#061A31]
                "
              >

                <Wrench className="h-8 w-8 text-[#4EA8FF]" />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Professionalism
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  We approach every job with technical knowledge,
                  care, and professionalism.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* WHAT WE DO */}
        {/* ===================================================== */}

        <section className="bg-slate-50 py-16 lg:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="text-center">

              <p
                className="
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                  lg:text-xl
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
                  lg:mt-4
                  lg:text-4xl
                "
              >
                Complete Air Conditioning Solutions
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                  lg:mt-6
                  lg:text-lg
                  lg:leading-8
                "
              >
                From routine maintenance to repairs and installation,
                Coolmate provides professional air conditioning
                services for a wide range of applications.
              </p>

            </div>

            {/* Service Cards */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {[
                "Air Conditioning Preventive Maintenance",
                "Air Conditioning General Cleaning",
                "Air Conditioning Repair",
                "Air Conditioning Troubleshooting",
                "Air Conditioning Sales & Installation",
                "VRF Air Conditioning Services",
              ].map((service) => (

                <div
                  key={service}
                  className="
                    group
                    flex
                    min-h-[100px]
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#08213D]
                    px-6
                    py-6
                    shadow-[0_10px_30px_rgba(8,33,61,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#4EA8FF]/60
                    hover:bg-[#061A31]
                    hover:shadow-[0_15px_35px_rgba(8,33,61,0.28)]
                  "
                >

                  <CheckCircle2
                    className="
                      h-6
                      w-6
                      shrink-0
                      text-[#4EA8FF]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <span
                    className="
                      text-base
                      font-semibold
                      text-white
                      lg:text-lg
                    "
                  >
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* FINAL CTA */}
        {/* ===================================================== */}

        <section className="bg-[#08213D] py-16 lg:py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <div className="mx-auto max-w-4xl text-center">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#4EA8FF]
                "
              >
                Work With Coolmate
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
                Reliable Air Conditioning Starts With the Right Partner
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
                Whether you need preventive maintenance, cleaning,
                repair, troubleshooting, or installation, Coolmate
                is ready to provide professional air conditioning
                solutions for your property.
              </p>

              <div className="mt-8">

                <a
                  href="mailto:info@coolmateco.com?subject=Air%20Conditioning%20Service%20Inquiry"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1683FF]
                    px-8
                    py-4
                    font-bold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#0B72E5]
                    hover:shadow-[0_10px_40px_rgba(22,131,255,0.35)]
                  "
                >
                  Get in Touch
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}