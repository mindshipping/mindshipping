import { ReactNode } from "react";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

const nav = [
  { href: "/settings", label: "Settings" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <div className="flex flex-col gap-6">
        <nav className="flex gap-4 text-sm text-white/60">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </SiteShell>
  );
}
