import type { Post } from "@/types/post";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export function UserPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <Card>
        <p className="text-sm text-white/60">No posts yet. Draft your first essay!</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">{post.readingTime}</p>
          <Link href={`/posts/${post.id}`} className="text-2xl font-semibold">
            {post.title}
          </Link>
          <p className="text-white/70">{post.excerpt}</p>
          <div className="text-sm text-white/50">{post.tags.join(" · ")}</div>
        </Card>
      ))}
    </div>
  );
}
