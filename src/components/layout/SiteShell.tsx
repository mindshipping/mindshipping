import { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen px-4 py-6 md:px-8">
      <SiteHeader />
      <main className="mx-auto mt-8 flex w-full max-w-5xl flex-col gap-8">{children}</main>
      <div className="mx-auto mt-16 max-w-5xl">
        <SiteFooter />
      </div>
      <Link
        href="/settings"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-[#111] shadow-[0_15px_35px_rgba(24,203,150,0.35)] transition hover:bg-brand/90"
      >
        ✍️ Write
      </Link>
    </div>
  );
}
