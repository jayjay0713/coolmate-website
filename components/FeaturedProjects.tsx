import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "VRF Preventive Maintenance",
    category: "VRF SERVICE",
    location: "School • Malate, Manila",
    system: "Mitsubishi Electric VRF System",
    image: "/images/projects/vrf-pm.jpg",
  },
  {
    title: "Various Aircon Repairs",
    category: "AIRCON REPAIR",
    location: "Call Center • McKinley Hill, Taguig",
    system: "Split-Type & Commercial Systems",
    image: "/images/projects/aircon-repair.jpg",
  },
  {
    title: "HVAC System Diagnostics",
    category: "HVAC DIAGNOSTICS",
    location: "Office • Pasig, Metro Manila",
    system: "HVAC Diagnostic Tools & Software",
    image: "/images/projects/laptop-repair.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[#25282D] bg-[#090A0C] py-16 lg:scroll-mt-32 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#1683FF] lg:text-xl">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#F8FAFC] lg:mt-4 lg:text-4xl">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#94A3B8] lg:mt-6 lg:text-lg lg:leading-8">
            Every completed project reflects our commitment to quality,
            reliability, and professional workmanship across residential,
            commercial, and industrial air conditioning systems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group overflow-hidden
                rounded-3xl
                border border-[#25282D]
                bg-[#15171A]
                shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#1683FF]/60
                hover:shadow-[0_20px_50px_rgba(22,131,255,0.12)]
              "
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden lg:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C]/60 via-transparent to-transparent opacity-60" />

                {/* Category Badge */}
                <div
                  className="
                    absolute left-5 top-5
                    rounded-full
                    border border-[#1683FF]/30
                    bg-[#090A0C]/80
                    px-4 py-2
                    text-xs font-bold
                    tracking-wide
                    text-[#F8FAFC]
                    shadow-lg
                    backdrop-blur-md
                  "
                >
                  <span className="text-[#1683FF]">●</span>{" "}
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Accent */}
                <div
                  className="
                    mb-4 h-1 w-12
                    rounded-full
                    bg-[#1683FF]
                    shadow-[0_0_10px_rgba(22,131,255,0.4)]
                    transition-all duration-300
                    group-hover:w-20
                  "
                />

                {/* Title */}
                <h3 className="text-xl font-bold leading-7 text-[#F8FAFC]">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="mt-4 flex items-start gap-2 text-[#CBD5E1]">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1683FF]" />

                  <span>{project.location}</span>
                </div>

                {/* System */}
                <p className="mt-4 text-sm leading-6 text-[#94A3B8]">
                  {project.system}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}