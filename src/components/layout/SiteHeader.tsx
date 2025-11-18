"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Feed" },
  { href: "/posts/focus-rituals", label: "Posts" },
  { href: "/sarah-chen", label: "Profiles" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => setIsMenuOpen(false);
  return (
    <>
      <header className="glass-surface sticky top-4 z-30 mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white">
          <Image src="/logo-mindshipping.svg" alt="MindShipping logo" width={28} height={28} />
          <span>
            Mind<span className="text-brand">Shipping</span>
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm text-white/60 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors",
                pathname === item.href ? "text-white" : "hover:text-white",
              )}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-2xl px-5 py-2.5 text-sm font-medium text-white/80 transition hover:text-white md:inline-flex"
          >
            Sign in
          </Link>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center gap-1 rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                isMenuOpen && "translate-y-1.5 rotate-45 bg-brand",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                isMenuOpen && "-translate-y-1.5 -rotate-45 bg-brand",
              )}
            />
          </button>
        </div>
      </header>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-gradient-to-br from-[#03030a]/85 via-[#050616]/80 to-[#04140f]/85 backdrop-blur-md transition-opacity duration-300 md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      />
      <div
        className={cn(
          "fixed top-24 left-1/2 z-50 w-[90vw] max-w-sm -translate-x-1/2 transform rounded-[32px] border border-white/10 bg-gradient-to-br from-[#11152a]/95 via-[#0c1722]/95 to-[#04231a]/95 p-6 shadow-[0_35px_80px_rgba(3,3,6,0.55)] ring-1 ring-white/5 transition-all duration-300 md:hidden",
          isMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-4 text-lg text-white/85">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-white/10" />
          <Link
            href="/login"
            onClick={handleNavClick}
            className="rounded-2xl bg-[#18cb96] px-4 py-2 text-center text-sm font-semibold text-[#04150f] shadow-[0_18px_35px_rgba(24,203,150,0.45)] transition hover:bg-[#13b484]"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </>
  );
}
