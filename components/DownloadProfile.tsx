export default function DownloadProfile() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-lg font-bold uppercase tracking-[0.2em] text-[#005BAC] lg:text-xl">
          Company Profile
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:mt-4 lg:text-4xl">
          Download Our Company Profile
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 lg:mt-6 lg:text-lg lg:leading-8">
          Learn more about Coolmate Maintenance & Solutions Co., our
          services, completed projects, capabilities, and expertise by
          downloading our latest company profile.
        </p>

        <div className="mt-8 lg:mt-12">
          <a
            href="/company-profile/Coolmate-Company-Profile.pdf"
            download
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-[#005BAC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005BAC] hover:shadow-xl lg:inline-flex lg:w-auto"
          >
            📄 Download Company Profile
          </a>
        </div>
      </div>
    </section>
  );
}