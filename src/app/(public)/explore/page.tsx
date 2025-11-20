import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { PostCard } from "@/components/posts/PostCard";
import { FEATURED_TAGS, MOCK_POSTS } from "@/lib/constants";

const QUICK_FILTERS = ["Deep Work", "AI Agents", "System Design", "Career Growth", "Open Source"];
const TRENDING_QUERIES = ["Latency budgets", "Edge deployments", "Learning in public", "Rust vs Go"];

export const metadata = {
  title: "Explore — MindShipping",
};

export default function ExplorePage() {
  return (
    <div className="flex flex-col gap-10 text-white">
      <section className="glass-surface space-y-6 rounded-[32px] border border-white/10 bg-[#373643] p-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-[#18cb96]">Explore</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Search the community signal.</h1>
          <p className="text-white/70">
            Discover posts, creators, and learning paths across the MindShipping network. Start typing to surface
            focused threads, walkthroughs, and people to follow.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <Input
              placeholder="Search posts, builders, or topics"
              className="bg-[#2f2e3a] pl-12 text-base placeholder:text-white/40"
              aria-label="Search posts, builders, or topics"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 sm:flex">
              <span>⌘</span>
              <span>K</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {FEATURED_TAGS.concat(QUICK_FILTERS).map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 transition hover:border-[#18cb96]/60 hover:bg-[#18cb96]/15"
              >
                #{filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {TRENDING_QUERIES.map((query) => (
            <Card key={query} className="glass-surface flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#2c2b37] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Trending</p>
              <p className="text-lg font-semibold">{query}</p>
              <p className="text-sm text-white/60">People are sharing fresh perspectives about {query.toLowerCase()}.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold">Community drops</h2>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-[#18cb96]/50 hover:text-white md:inline-flex"
            >
              <span className="h-2 w-2 rounded-full bg-[#18cb96]"></span>
              Live now
            </button>
          </div>
          <p className="text-white/60">
            Fresh writing, architectural notes, and learning journals from builders you follow and new voices across the platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
