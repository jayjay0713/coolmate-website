import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-slate-200 bg-white"
    >
      {/* ===================================================== */}
      {/* MAIN FOOTER CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          w-full
          px-5
          py-10
          sm:px-8
          lg:px-10
          xl:px-12
          lg:py-14
        "
      >

        {/* ===================================================== */}
        {/* FOOTER CONTENT */}
        {/* ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">

          {/* ===================================================== */}
          {/* COMPANY */}
          {/* ===================================================== */}

          <div>

            <Image
              src="/images/logo/logo2.png"
              alt="Coolmate Maintenance & Solutions Co."
              width={500}
              height={180}
              priority
              className="
                h-auto
                w-full
                max-w-[220px]
                object-contain
              "
            />

            <p className="mt-4 leading-7 text-slate-600">
              Keeping Every Space Cool,
              <br />
              Comfortable & Efficient.
            </p>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#1683FF]" />

          </div>

          {/* ===================================================== */}
          {/* SERVICES */}
          {/* ===================================================== */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-600">

              <li className="transition-colors hover:text-[#1683FF]">
                Preventive Maintenance
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Air Conditioning Repair
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Troubleshooting
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                General Cleaning
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                Air Conditioning Sales & Installation
              </li>

              <li className="transition-colors hover:text-[#1683FF]">
                VRF Services
              </li>

            </ul>

          </div>

          {/* ===================================================== */}
          {/* CONTACT */}
          {/* ===================================================== */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* PHONE */}
              <div className="flex items-start gap-3">

                <Phone
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-[#1683FF]
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Mobile
                  </p>

                  <a
                    href="tel:+639959279906"
                    className="
                      text-slate-700
                      transition
                      hover:text-[#1683FF]
                    "
                  >
                    0995 927 9906
                  </a>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">

                <Mail
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-[#1683FF]
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:info@coolmateco.com"
                    className="
                      break-all
                      text-slate-700
                      transition
                      hover:text-[#1683FF]
                    "
                  >
                    info@coolmateco.com
                  </a>

                </div>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">

                <MapPin
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-[#1683FF]
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Address
                  </p>

                  <a
                    href="https://maps.google.com/?q=Coolmate+Maintenance+and+Solutions+Co."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-slate-700
                      transition
                      hover:text-[#1683FF]
                    "
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

              {/* BUSINESS HOURS */}
              <div className="flex items-start gap-3">

                <Clock
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-[#1683FF]
                  "
                />

                <div>

                  <p className="text-sm text-slate-500">
                    Business Hours
                  </p>

                  <p className="text-slate-700">
                    Monday – Saturday
                    <br />
                    8:00 AM – 5:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* GOOGLE MAP */}
          {/* ===================================================== */}

          <div>

            <h3 className="mb-5 text-lg font-bold text-slate-900">
              Find Us
            </h3>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                shadow-sm
              "
            >

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.195182657073!2d120.92333267573902!3d14.415909181570548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3c4d5360743%3A0x399bede7bbfbff40!2sCoolmate%20Maintenance%20and%20Solutions%20Co.!5e0!3m2!1sen!2sph!4v1785851783508!5m2!1sen!2sph"
                className="
                  h-[200px]
                  w-full
                  lg:h-[220px]
                "
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Coolmate Maintenance & Solutions Co. Location"
              />

            </div>

          </div>

        </div>

        {/* ===================================================== */}
        {/* BOTTOM COPYRIGHT */}
        {/* ===================================================== */}

        <div className="mt-10 border-t border-slate-200 pt-6">

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-3
              text-center
              text-sm
              text-slate-500
              md:flex-row
              md:text-left
            "
          >

            <p>
              © 2026 Coolmate Maintenance & Solutions Co.
              All rights reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <span className="font-medium text-slate-700">
                Coolmate
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}