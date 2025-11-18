import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#18cb96]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#18cb96]">
          Welcome back
        </span>
        <div>
          <h1 className="text-3xl font-semibold">Log back into the stream</h1>
          <p className="text-sm text-white/60">Pick up drafts, respond to readers, and keep the MindShipping feed alive.</p>
        </div>
      </div>
      <label className="text-sm text-white/70">
        Email
        <Input type="email" placeholder="you@studio.com" className="mt-2" />
      </label>
      <label className="text-sm text-white/70">
        Password
        <Input type="password" placeholder="••••••••" className="mt-2" />
      </label>
      <Button
        type="submit"
        className="bg-[#18cb96] text-[#04150f] shadow-[0_20px_45px_rgba(24,203,150,0.4)] hover:bg-[#13b484]"
      >
        Enter MindShipping
      </Button>
      <p className="text-sm text-white/60">
        Need an account? <Link href="/register" className="font-semibold text-[#18cb96] hover:text-[#13b484]">Create one</Link>
      </p>
    </form>
  );
}
