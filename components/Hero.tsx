export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#005BAC]">
            Coolmate Maintenance & Solutions Co.
          </p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Professional Air Conditioning Solutions
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide preventive maintenance, repair, installation, and
            troubleshooting services for residential and commercial air
            conditioning systems.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-[#005BAC] px-6 py-3 font-semibold text-white hover:bg-blue-700 transition">
              Request a Quote
            </button>

            <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100 transition">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center">
          <div className="flex h-[450px] w-full items-center justify-center rounded-2xl bg-slate-100">
            <span className="text-slate-400">
              Hero Image Coming Soon
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}