"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "subtle";
type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-brand text-background hover:bg-brand/90",
    ghost: "bg-transparent text-white/80 hover:text-white",
    subtle: "bg-white/10 text-white hover:bg-white/20",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
