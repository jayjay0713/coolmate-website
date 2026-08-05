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
      className="scroll-mt-32 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
            We take pride in delivering reliable air conditioning
            solutions across residential, commercial, and industrial
            projects.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden lg:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 lg:p-6">
                <h3 className="text-lg font-semibold text-slate-900 lg:text-xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-slate-600 lg:mt-3">
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