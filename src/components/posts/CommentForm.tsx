"use client";

import { useState } from "react";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";

export function CommentForm({ postId }: { postId: string }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setValue("");
      setTimeout(() => setStatus("idle"), 2000);
    }, 600);
  };

  return (
    <form
      aria-label={`Add a comment to post ${postId}`}
      onSubmit={handleSubmit}
      className="glass-surface flex flex-col gap-3 rounded-3xl p-5"
    >
      <TextArea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Drop a thoughtful reflection"
      />
      <div className="flex items-center gap-3 text-sm text-white/60">
        <Button type="submit" disabled={status === "loading" || !value.trim()}>
          {status === "loading" ? "Posting…" : "Comment"}
        </Button>
        {status === "success" && <span>Appreciate you sharing! 🙌</span>}
      </div>
    </form>
  );
}
