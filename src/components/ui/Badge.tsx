import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/70", className)}>
      {children}
    </span>
  );
}
