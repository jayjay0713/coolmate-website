import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 bg-[#090A0C] lg:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-16 lg:py-20">

        {/* LEFT */}
        <div className="max-w-xl">
          {/* Company Name */}
          <p className="mb-4 text-xl font-bold tracking-wide text-[#1683FF] lg:mb-5 lg:text-2xl">
            Coolmate Maintenance & Solutions Co.
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.1] text-[#F8FAFC] md:text-5xl lg:text-6xl">
            Reliable Air Conditioning
            <span className="block text-[#1683FF]">
              Solutions
            </span>
            for Homes & Businesses
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-[#94A3B8] lg:mt-8 lg:text-lg lg:leading-8">
            Professional preventive maintenance, repair, and
            troubleshooting of VRF and Split-Type air conditioning
            systems for residential, commercial, and industrial
            clients throughout the Philippines.
          </p>

          {/* Call to Action */}
          <div className="mt-8 lg:mt-10">
            <a
              href="mailto:info@coolmateco.com?subject=Request%20for%20Air%20Conditioning%20Quotation&body=Hello%20Coolmate,%0A%0AI%20would%20like%20to%20request%20a%20quotation.%0A%0AName:%0ACompany:%0ALocation:%0AContact%20Number:%0A%0AThank%20you."
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#1683FF] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(22,131,255,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F8FFF] hover:shadow-[0_0_40px_rgba(22,131,255,0.40)] lg:w-auto"
            >
              Request a Free Quote

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col gap-4 text-[#CBD5E1] lg:mt-10 lg:gap-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1683FF]" />
              <span>Certified Technicians</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1683FF]" />
              <span>Residential & Commercial</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1683FF]" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-3 lg:gap-4">

          {/* Main Image */}
          <div className="group col-span-2 overflow-hidden rounded-3xl border border-[#25282D] bg-[#15171A] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Coolmate Air Conditioning Services"
              width={900}
              height={500}
              priority
              className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[300px] lg:h-[320px]"
            />
          </div>

          {/* Image 1 */}
          <div className="group overflow-hidden rounded-2xl border border-[#25282D] bg-[#15171A] shadow-lg">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Air Conditioning Maintenance"
              width={400}
              height={300}
              className="h-[120px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[150px] lg:h-[180px]"
            />
          </div>

          {/* Image 2 */}
          <div className="group overflow-hidden rounded-2xl border border-[#25282D] bg-[#15171A] shadow-lg">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Preventive Maintenance"
              width={400}
              height={300}
              className="h-[120px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[150px] lg:h-[180px]"
            />
          </div>

          {/* Image 3 */}
          <div className="group overflow-hidden rounded-2xl border border-[#25282D] bg-[#15171A] shadow-lg">
            <Image
              src="/images/hero/hero-3.jpg"
              alt="VRF System Troubleshooting"
              width={400}
              height={300}
              className="h-[120px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[150px] lg:h-[180px]"
            />
          </div>

          {/* Image 4 */}
          <div className="group overflow-hidden rounded-2xl border border-[#25282D] bg-[#15171A] shadow-lg">
            <Image
              src="/images/hero/hero-4.jpg"
              alt="Commercial Air Conditioning Repair"
              width={400}
              height={300}
              className="h-[120px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[150px] lg:h-[180px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}