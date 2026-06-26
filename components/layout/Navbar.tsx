"use client";

import Link from "next/link";
import { Menu, MapPinned, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Places", href: "/places" },
  { name: "Food", href: "/food" },
  { name: "Hotels", href: "/hotels" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl shadow-xl">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
  <MapPinned className="text-sky-400" />
  <span>Namma Mangaluru</span>
</Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-sky-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

         <Link
  href="/trip-planner"
  className="hidden md:block rounded-full bg-sky-500 px-5 py-2 text-white transition hover:bg-sky-600"
>
  Plan Trip
</Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 rounded-3xl bg-slate-900/95 backdrop-blur-xl p-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}