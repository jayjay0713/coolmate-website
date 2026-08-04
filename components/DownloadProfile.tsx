export default function DownloadProfile() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-[#005BAC]">
          Company Profile
        </p>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Download Our Company Profile
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Learn more about Coolmate Maintenance & Solutions Co., our
          services, completed projects, capabilities, and expertise by
          downloading our latest company profile.
        </p>

        <div className="mt-12">
          <a
            href="/company-profile/Coolmate-Company-Profile.pdf"
            download
            className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-[#005BAC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005BAC] hover:shadow-xl"
          >
            📄 Download Company Profile
          </a>
        </div>
      </div>
    </section>
  );
}