import Image from "next/image";
import { getInitials } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  name: string;
  size?: number;
};

export function Avatar({ src, name, size = 48 }: AvatarProps) {
  if (!src) {
    return (
      <div
        className="flex items-center justify-center rounded-full bg-white/10 text-sm font-semibold uppercase text-white"
        style={{ width: size, height: size }}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div className="relative rounded-full border border-white/10" style={{ width: size, height: size }}>
      <Image src={src} alt={name} fill className="rounded-full object-cover" sizes={`${size}px`} />
    </div>
  );
}
