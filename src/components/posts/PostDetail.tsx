import Image from "next/image";
import { notFound } from "next/navigation";
import type { Post } from "@/types/post";
import { PostActions } from "@/components/posts/PostActions";
import { CommentList } from "@/components/posts/CommentList";
import { CommentForm } from "@/components/posts/CommentForm";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { formatDate } from "@/lib/utils";

export function PostDetail({ post }: { post?: Post }) {
  if (!post) {
    notFound();
  }

  return (
    <article className="glass-surface rounded-[32px] p-8 text-white">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar src={post.author.avatarUrl} name={post.author.name} size={56} />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-white/60">
                {post.author.headline} · {formatDate(post.publishedAt)} · {post.readingTime}
              </p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold leading-tight">{post.title}</h1>
          <p className="text-lg text-white/70">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="relative h-[360px] overflow-hidden rounded-3xl">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>
      </header>

      <section className="mt-8 space-y-4 text-lg leading-relaxed text-white/80">
        {post.content}
      </section>

      <div className="mt-10">
        <PostActions
          postId={post.id}
          initialLikes={post.likes}
          initialLiked={post.isLiked}
          commentCount={post.comments.length}
        />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <CommentForm postId={post.id} />
        <CommentList comments={post.comments} />
      </div>
    </article>
  );
}
