import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Image
              src="/images/logo/logo.png"
              alt="Coolmate Maintenance & Solutions Co."
              width={420}
              height={140}
              priority
              className="h-auto w-full max-w-[180px] object-contain lg:max-w-[220px]"
            />

            <p className="mt-3 leading-7 text-slate-600">
              Keeping Every Space Cool,
              <br />
              Comfortable & Efficient.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Our Services
            </h3>

            <ul className="space-y-2 text-slate-600">
              <li>Preventive Maintenance</li>
              <li>Aircon Repair</li>
              <li>Installation</li>
              <li>Chemical Cleaning</li>
              <li>VRF Services</li>
              <li>Troubleshooting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-3 lg:space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#005BAC]" />

                <div>
                  <p className="text-sm text-slate-500">Mobile</p>

                  <a
                    href="tel:+639959279906"
                    className="text-slate-700 transition hover:text-[#005BAC]"
                  >
                    0995 927 9906
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#005BAC]" />

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:info@coolmateco.com"
                    className="break-all text-slate-700 transition hover:text-[#005BAC]"
                  >
                    info@coolmateco.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#005BAC]" />

                <div>
                  <p className="text-sm text-slate-500">Address</p>

                  <a
                    href="https://maps.google.com/?q=Coolmate+Maintenance+and+Solutions+Co."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 transition hover:text-[#005BAC]"
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
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Find Us
            </h3>

            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.195182657073!2d120.92333267573902!3d14.415909181570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3c4d5360743%3A0x399bede7bbfbff40!2sCoolmate%20Maintenance%20and%20Solutions%20Co.!5e0!3m2!1sen!2sph!4v1785851783508!5m2!1sen!2sph"
                className="h-[180px] w-full lg:h-[220px]"
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
        <div className="mt-8 border-t border-slate-200 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row md:text-left">
            <p>
              © 2024 Coolmate Maintenance & Solutions Co. All rights reserved.
            </p>

            <p>Designed & Developed by Coolmate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}