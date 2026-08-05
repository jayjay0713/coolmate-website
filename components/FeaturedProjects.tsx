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
    title: "Laptop Diagnosing & Repair",
    category: "HVAC DIAGNOSTICS",
    location: "Office • Pasig, Metro Manila",
    system: "HVAC Service Laptop & Diagnostic Software",
    image: "/images/projects/laptop-repair.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            Every completed project reflects our commitment to quality,
            reliability, and professional workmanship across residential,
            commercial, and industrial air conditioning systems.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#005BAC] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute left-5 top-5 rounded-full bg-[#005BAC] px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="mb-4 h-1 w-14 rounded-full bg-[#005BAC]" />

                <h3 className="text-xl font-bold leading-7 text-slate-900">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-600">
                  <MapPin className="h-5 w-5 text-[#005BAC]" />

                  <span>{project.location}</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
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