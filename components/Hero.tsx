import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-white scroll-mt-32">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[0.2em] text-[#005BAC]">
            Coolmate Maintenance & Solutions Co.
          </p>

          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Reliable Air Conditioning
            <span className="block text-[#005BAC]">
              Solutions
            </span>
            for Homes & Businesses
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Professional installation, preventive maintenance,
            repair, and troubleshooting of VRF & Split-Type air
            conditioning systems for residential and commercial
            clients throughout the Philippines.
          </p>

          {/* Call to Action */}
          <div className="mt-10">
            <a
              href="https://m.me/61580222981185"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl bg-[#005BAC] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Request a Free Quote
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-col gap-4 text-slate-700">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#005BAC]" />
              <span>Certified Technicians</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#005BAC]" />
              <span>Residential & Commercial</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#005BAC]" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4">
          {/* Main Image */}
          <div className="col-span-2 overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero/hero-main.jpg"
              alt="Coolmate Air Conditioning Services"
              width={900}
              height={500}
              priority
              className="h-[320px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Air Conditioning Installation"
              width={400}
              height={300}
              className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/hero-2.jpg"
              alt="Preventive Maintenance"
              width={400}
              height={300}
              className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/hero-3.jpg"
              alt="VRF System Service"
              width={400}
              height={300}
              className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/hero-4.jpg"
              alt="Commercial Air Conditioning"
              width={400}
              height={300}
              className="h-[180px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}