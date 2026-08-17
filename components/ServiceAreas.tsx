import { MapPin, ArrowUpRight } from "lucide-react";

const areas = [
  "Imus",
  "Bacoor",
  "Dasmariñas",
  "General Trias",
  "Silang",
  "Trece Martires",
  "Cavite",
  "Metro Manila",
  "Laguna",
  "Batangas",
];

export default function ServiceAreas() {
  return (
    <section
      className="
        border-t
        border-slate-200
        bg-white
        py-16
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

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
            Service Areas
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-4xl
            "
          >
            Serving Cavite, Metro Manila

            <span className="block text-[#1683FF]">
              & Nearby Areas
            </span>
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
            Coolmate Maintenance & Solutions Co. provides professional
            air conditioning preventive maintenance, repair, chemical
            cleaning, troubleshooting, and VRF services for residential,
            commercial, and industrial clients across Southern Luzon and
            Metro Manila.
          </p>

        </div>

        {/* ===================================================== */}
        {/* SERVICE AREAS */}
        {/* ===================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
            lg:grid-cols-5
            lg:gap-5
          "
        >

          {areas.map((area) => (

            <div
              key={area}
              className="
                group
                flex
                items-center
                justify-between
                gap-3
                rounded-2xl
                border
                border-[#0E355D]
                bg-[#08213D]
                p-4
                shadow-[0_8px_25px_rgba(8,33,61,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#1683FF]/70
                hover:bg-[#061A31]
                hover:shadow-[0_12px_30px_rgba(22,131,255,0.18)]
              "
            >

              {/* Area Name */}

              <div className="flex items-center gap-3">

                <MapPin
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-[#4EA8FF]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    font-medium
                    text-white
                  "
                >
                  {area}
                </span>

              </div>

              {/* Arrow */}

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-[#64748B]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-[#4EA8FF]
                  group-hover:opacity-100
                "
              />

            </div>

          ))}

        </div>

        {/* ===================================================== */}
        {/* SEO SUPPORT TEXT */}
        {/* ===================================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-center
          "
        >

          <p
            className="
              text-sm
              leading-6
              text-slate-500
            "
          >
            Our service coverage includes Imus, Bacoor, Dasmariñas,
            General Trias, Silang, Trece Martires, and other areas
            throughout Cavite, Metro Manila, Laguna, and Batangas.
          </p>

        </div>

      </div>
    </section>
  );
}