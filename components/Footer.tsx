import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-[#25282D] bg-[#090A0C]"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">

          {/* Company */}
          <div>
            <Image
              src="/images/logo/coolmate-dark.png"
              alt="Coolmate Maintenance & Solutions Co."
              width={420}
              height={140}
              priority
              className="h-auto w-full max-w-[180px] object-contain lg:max-w-[220px]"
            />

            <p className="mt-4 leading-7 text-[#94A3B8]">
              Keeping Every Space Cool,
              <br />
              Comfortable & Efficient.
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#1683FF] shadow-[0_0_12px_rgba(22,131,255,0.5)]" />
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#F8FAFC]">
              Our Services
            </h3>

            <ul className="space-y-3 text-[#94A3B8]">
              <li className="transition-colors hover:text-[#1683FF]">
                Preventive Maintenance
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Aircon Repair
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Troubleshooting
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Chemical Cleaning
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                VRF Services
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                System Diagnostics
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#F8FAFC]">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#1683FF]" />

                <div>
                  <p className="text-sm text-[#64748B]">
                    Mobile
                  </p>

                  <a
                    href="tel:+639959279906"
                    className="text-[#CBD5E1] transition hover:text-[#1683FF]"
                  >
                    0995 927 9906
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#1683FF]" />

                <div>
                  <p className="text-sm text-[#64748B]">
                    Email
                  </p>

                  <a
                    href="mailto:info@coolmateco.com"
                    className="break-all text-[#CBD5E1] transition hover:text-[#1683FF]"
                  >
                    info@coolmateco.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#1683FF]" />

                <div>
                  <p className="text-sm text-[#64748B]">
                    Address
                  </p>

                  <a
                    href="https://maps.google.com/?q=Coolmate+Maintenance+and+Solutions+Co."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#CBD5E1] transition hover:text-[#1683FF]"
                  >
                    Block 9 Lot 28 Atis St.
                    <br />
                    The Legian 1 Phase A
                    <br />
                    Carsadang Bago II
                    <br />
                    Imus City, Cavite
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#1683FF]" />

                <div>
                  <p className="text-sm text-[#64748B]">
                    Business Hours
                  </p>

                  <p className="text-[#CBD5E1]">
                    Monday – Saturday
                    <br />
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-[#F8FAFC]">
              Find Us
            </h3>

            <div className="overflow-hidden rounded-2xl border border-[#25282D] bg-[#15171A] shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.195182657073!2d120.92333267573902!3d14.415909181570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3c4d5360743%3A0x399bede7bbfbff40!2sCoolmate%20Maintenance%20and%20Solutions%20Co.!5e0!3m2!1sen!2sph!4v1785851783508!5m2!1sen!2sph"
                className="h-[200px] w-full lg:h-[220px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Coolmate Maintenance & Solutions Co. Location"
              />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-[#25282D] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-[#64748B] md:flex-row md:text-left">

            <p>
              © 2026 Coolmate Maintenance & Solutions Co. All rights reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <span className="text-[#94A3B8]">
                Coolmate
              </span>
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}