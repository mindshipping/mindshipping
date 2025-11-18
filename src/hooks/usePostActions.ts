import { useState } from "react";
import { getRealtimeClient } from "@/lib/ws";

export function usePostActions({
  postId,
  initialLikes,
  initialLiked,
  onShare,
}: {
  postId: string;
  initialLikes: number;
  initialLiked?: boolean;
  onShare?: () => void;
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(Boolean(initialLiked));
  const client = getRealtimeClient();

  const toggleLike = () => {
    setLikes((prev) => {
      const next = isLiked ? prev - 1 : prev + 1;
      client.emit("like", { postId, likes: next });
      return next;
    });
    setIsLiked((prev) => !prev);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ url: `/posts/${postId}` });
    }
    onShare?.();
  };

  return {
    likes,
    isLiked,
    toggleLike,
    handleShare,
  };
}
