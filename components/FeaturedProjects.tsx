import Image from "next/image";

const projects = [
  {
    title: "VRF Preventive Maintenance",
    location: "School • Malate, Manila",
    image: "/images/projects/vrf-pm.jpg",
  },
  {
    title: "Various Aircon Repairs",
    location: "Call Center • McKinley Hill, Taguig",
    image: "/images/projects/aircon-repair.jpg",
  },
  {
    title: "Laptop Diagnosing & Repair",
    location: "Office • Pasig, Metro Manila",
    image: "/images/projects/laptop-repair.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-32 bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600">
            We take pride in delivering reliable air conditioning solutions
            across residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}