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
          "fixed inset-0 z-40 bg-[#07050d]/65 transition-opacity duration-300 md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      />
      <aside
        className={cn(
          "glass-surface fixed inset-y-0 left-0 z-50 flex w-[82vw] max-w-xs flex-col rounded-r-[32px] border border-white/15 border-l-transparent bg-[#373643]/90 px-6 pb-8 pt-10 shadow-[0_25px_80px_rgba(8,14,20,0.45)] backdrop-blur-2xl transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleNavClick} className="flex flex-col text-sm uppercase tracking-[0.3em] text-white/60">
            Mind<span className="text-lg tracking-normal text-white">Shipping</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            Close
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-2 text-base text-white/85">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={cn(
                "rounded-2xl px-4 py-3 transition",
                pathname === item.href ? "bg-white/30 text-[#0c1018]" : "hover:bg-white/20 hover:text-[#0c1018]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/70">
          <p>Short on time? Hop back into your studio.</p>
          <Link
            href="/login"
            onClick={handleNavClick}
            className="rounded-2xl bg-[#18cb96] px-4 py-2 text-center text-sm font-semibold text-[#04150f] shadow-[0_18px_35px_rgba(24,203,150,0.45)] transition hover:bg-[#13b484]"
          >
            Sign in
          </Link>
        </div>
      </aside>
    </>
  );
}
