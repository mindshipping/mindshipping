import type { User } from "@/types/user";
import { Avatar } from "@/components/ui/Avatar";
import { formatNumber } from "@/lib/utils";

export function ProfileHeader({ user, isOwner }: { user: User; isOwner?: boolean }) {
  return (
  <section className="glass-surface rounded-[32px] p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <Avatar src={user.avatarUrl} name={user.name} size={72} />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">@{user.username}</p>
            <h1 className="text-3xl font-semibold">{user.name}</h1>
            <p className="text-white/70">{user.headline}</p>
          </div>
        </div>
        {isOwner && <span className="rounded-full border border-brand/40 px-4 py-1 text-sm text-brand">Edit profile</span>}
      </div>
      <p className="mt-6 max-w-2xl text-white/70">
        {user.bio} They share technical insights and connect with the MindShipping community to advance the tech ecosystem together.
      </p>
      <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/60">
        <span>{formatNumber(user.stats.followers)} followers</span>
        <span>{formatNumber(user.stats.following)} following</span>
        <span>{user.stats.posts} articles</span>
        {user.social?.location && <span>{user.social.location}</span>}
        {user.social?.website && (
          <a href={user.social.website} target="_blank" rel="noreferrer" className="text-brand">
            {user.social.website}
          </a>
        )}
      </div>
    </section>
  );
}
