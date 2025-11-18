import { notFound } from "next/navigation";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { UserPosts } from "@/components/profile/UserPosts";
import { fetchPostsByUsername, fetchUserProfile } from "@/lib/api";
import { MOCK_USERS } from "@/lib/constants";
import { isOwner } from "@/lib/auth";

export async function generateStaticParams() {
  return MOCK_USERS.map((user) => ({ username: user.username }));
}

export default async function ProfilePage({ params }: { params: { username: string } }) {
  const [user, posts] = await Promise.all([
    fetchUserProfile(params.username),
    fetchPostsByUsername(params.username),
  ]);

  if (!user) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <ProfileHeader user={user} isOwner={isOwner(user.username)} />
      <UserPosts posts={posts} />
    </div>
  );
}
