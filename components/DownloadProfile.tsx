import { Download, ArrowRight } from "lucide-react";

export default function DownloadProfile() {
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
          max-w-4xl
          px-6
          text-center
        "
      >

        {/* ===================================================== */}
        {/* LABEL */}
        {/* ===================================================== */}

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
          Company Profile
        </p>

        {/* ===================================================== */}
        {/* HEADING */}
        {/* ===================================================== */}

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
          Learn More About

          <span className="block text-[#1683FF]">
            Coolmate
          </span>
        </h2>

        {/* ===================================================== */}
        {/* DESCRIPTION */}
        {/* ===================================================== */}

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            lg:mt-6
            lg:text-lg
            lg:leading-8
          "
        >
          Learn more about Coolmate Maintenance & Solutions Co., our
          services, completed projects, capabilities, and technical
          expertise by downloading our latest company profile.
        </p>

        {/* ===================================================== */}
        {/* DOWNLOAD BUTTON */}
        {/* ===================================================== */}

        <div className="mt-8 lg:mt-12">

          <a
            href="/company-profile/Coolmate-Company-Profile.pdf"
            download
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-[#1683FF]
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-[0_0_30px_rgba(22,131,255,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#2F8FFF]
              hover:shadow-[0_0_40px_rgba(22,131,255,0.40)]
              lg:w-auto
            "
          >

            <Download
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-y-0.5
              "
            />

            Download Company Profile

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </a>

        </div>

      </div>
    </section>
  );
}