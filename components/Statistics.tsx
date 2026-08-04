const stats = [
  {
    value: "EST. 2024",
    label: "Established",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "Residential & Commercial",
    label: "Service Coverage",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index !== stats.length - 1
                  ? "md:border-r md:border-slate-700"
                  : ""
              }`}
            >
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white lg:text-5xl">
                {stat.value}
              </h2>

              <p className="mt-4 text-lg text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}