import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  return (
    <form className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Join the public studio</h1>
        <p className="text-sm text-white/60">Claim your byline, publish openly, and inspire other builders.</p>
      </div>
      <label className="text-sm text-white/70">
        Name
        <Input placeholder="Maya Rojas" className="mt-2" />
      </label>
      <label className="text-sm text-white/70">
        Email
        <Input type="email" placeholder="you@studio.com" className="mt-2" />
      </label>
      <label className="text-sm text-white/70">
        Password
        <Input type="password" placeholder="••••••••" className="mt-2" />
      </label>
  <Button type="submit">Start writing</Button>
      <p className="text-sm text-white/60">
        Already have an account? <Link href="/login" className="text-brand">Sign in</Link>
      </p>
    </form>
  );
}
