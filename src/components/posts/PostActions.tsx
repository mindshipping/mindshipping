"use client";

import { Button } from "@/components/ui/Button";
import { usePostActions } from "@/hooks/usePostActions";

export function PostActions({ postId, initialLikes, commentCount, initialLiked }: {
  postId: string;
  initialLikes: number;
  commentCount: number;
  initialLiked?: boolean;
}) {
  const { likes, isLiked, toggleLike, handleShare } = usePostActions({
    postId,
    initialLikes,
    initialLiked,
  });

  return (
    <div className="flex items-center gap-2 text-sm text-white/70">
      <Button variant="ghost" onClick={toggleLike} className={isLiked ? "text-brand" : undefined}>
        {isLiked ? "♥" : "♡"} {likes}
      </Button>
      <Button variant="ghost">💬 {commentCount}</Button>
      <Button variant="ghost" onClick={handleShare}>
        ↗ Share
      </Button>
    </div>
  );
}
