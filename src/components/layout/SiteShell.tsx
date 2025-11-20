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
        href="/login"
        className="group fixed bottom-8 right-8 z-30 flex items-center gap-3 rounded-full bg-[#373643] px-7 py-4 text-base font-semibold text-[#18cb96] shadow-[0_8px_30px_rgba(24,203,150,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] active:scale-95"
      >
        <svg 
          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          viewBox="0 0 24 24"
        >
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <span>Write</span>
      </Link>
    </div>
  );
}
