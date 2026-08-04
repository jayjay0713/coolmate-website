import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/#home" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Coolmate Maintenance & Solutions Co."
            width={600}
            height={200}
            priority
            className="h-30 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll
              className="
                relative
                text-lg
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:text-[#005BAC]
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-[#005BAC]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}