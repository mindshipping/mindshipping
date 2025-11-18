import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Studio settings</h1>
      <Card className="flex flex-col gap-4">
        <label className="text-sm text-white/70">
          Display name
          <Input placeholder="Sarah Chen" className="mt-2" />
        </label>
        <label className="text-sm text-white/70">
          Headline
          <Input placeholder="Designing mindful experiences" className="mt-2" />
        </label>
        <label className="text-sm text-white/70">
          Bio
          <TextArea placeholder="Tell readers about your work" className="mt-2" />
        </label>
        <Button className="self-start">Save changes</Button>
      </Card>
    </div>
  );
}
