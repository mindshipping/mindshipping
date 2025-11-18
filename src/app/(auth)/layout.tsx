import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--background)] px-4 py-10 text-white">
      <Link href="/" className="mb-6 text-2xl font-semibold">
        Mind<span className="text-brand">Shipping</span>
      </Link>
      <div className="glass-surface w-full max-w-md rounded-[32px] p-8">{children}</div>
    </div>
  );
}
