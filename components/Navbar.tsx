import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-3xl font-bold tracking-wide text-[#005BAC]">
            COOLMATE
          </span>

          <span className="text-sm text-gray-500">
            Maintenance & Solutions Co.
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-[#005BAC] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#005BAC] transition">
            About
          </Link>

          <Link href="/services" className="hover:text-[#005BAC] transition">
            Services
          </Link>

          <Link href="/projects" className="hover:text-[#005BAC] transition">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-[#005BAC] transition">
            Contact
          </Link>

          <button className="rounded-lg bg-[#005BAC] px-5 py-2 text-white hover:bg-blue-700 transition">
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
}