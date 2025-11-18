import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/post";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { PostActions } from "@/components/posts/PostActions";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="glass-surface flex flex-col gap-4">
      <Link href={`/posts/${post.id}`} className="relative h-48 w-full overflow-hidden rounded-2xl">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </Link>
      <div className="flex items-center gap-3">
        <Avatar src={post.author.avatarUrl} name={post.author.name} size={44} />
        <div>
          <p className="text-sm font-medium">{post.author.name}</p>
          <p className="text-xs text-white/60">{formatDate(post.publishedAt)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href={`/posts/${post.id}`} className="text-2xl font-semibold leading-tight">
          {post.title}
        </Link>
        <p className="text-white/70">{post.excerpt}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-white/60">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <PostActions
        postId={post.id}
        initialLikes={post.likes}
        commentCount={post.comments.length}
        initialLiked={post.isLiked}
      />
    </Card>
  );
}
