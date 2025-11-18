import { useEffect, useState } from "react";
import { fetchPostsByUsername, fetchUserProfile } from "@/lib/api";
import type { Post } from "@/types/post";
import type { User } from "@/types/user";

export function useProfile(username: string) {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function loadProfile() {
      setIsLoading(true);
      const [profile, authoredPosts] = await Promise.all([
        fetchUserProfile(username),
        fetchPostsByUsername(username),
      ]);
      if (mounted) {
        setUser(profile ?? null);
        setPosts(authoredPosts);
        setIsLoading(false);
      }
    }

    loadProfile();
    return () => {
      mounted = false;
    };
  }, [username]);

  return { user, posts, isLoading };
}
