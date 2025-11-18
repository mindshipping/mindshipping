import Link from "next/link";
import { fetchTopPosts } from "@/lib/api";
import { FEATURED_TAGS, MOCK_POSTS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PostCard } from "@/components/posts/PostCard";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await fetchTopPosts(5);
  return (
    <div className="flex flex-col gap-10">
      <section className="glass-surface grid gap-6 rounded-[32px] p-8 text-white lg:grid-cols-[2fr,1fr]">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Open writing platform</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Publish long-form ideas for everyone—not just your followers.
          </h1>
          <p className="text-white/70">
            MindShipping is a public blog collective where builders draft in public, readers respond with depth,
            and every story can spark the next product idea.
          </p>
          <div className="flex flex-wrap gap-2 pt-3">
            {FEATURED_TAGS.map((tag) => (
              <Badge key={tag} className="bg-white/5 text-white/80">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Card className="gradient-ring relative flex flex-col gap-3">
          <p className="text-sm text-white/60">Trending on MindShipping</p>
          <h3 className="text-2xl font-semibold text-white">{MOCK_POSTS[0]?.title}</h3>
          <p className="text-sm text-white/70">
            {MOCK_POSTS[0]?.excerpt} Keep reading for tactics straight from working makers.
          </p>
          <Link href={`/posts/${MOCK_POSTS[0]?.id}`} className="text-sm font-semibold text-brand">
            Continue the story →
          </Link>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
