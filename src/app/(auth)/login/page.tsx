import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Log back into the stream</h1>
        <p className="text-sm text-white/60">Pick up drafts, respond to readers, and keep the MindShipping feed alive.</p>
      </div>
      <label className="text-sm text-white/70">
        Email
        <Input type="email" placeholder="you@studio.com" className="mt-2" />
      </label>
      <label className="text-sm text-white/70">
        Password
        <Input type="password" placeholder="••••••••" className="mt-2" />
      </label>
  <Button type="submit">Enter MindShipping</Button>
      <p className="text-sm text-white/60">
        Need an account? <Link href="/register" className="text-brand">Create one</Link>
      </p>
    </form>
  );
}
