import { MOCK_POSTS, MOCK_USERS } from "@/lib/constants";
import type { Post } from "@/types/post";
import type { User } from "@/types/user";

const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchTopPosts(limit = 5): Promise<Post[]> {
  await delay();
  return MOCK_POSTS.slice(0, limit);
}

export async function fetchPostById(postId: string): Promise<Post | undefined> {
  await delay();
  return MOCK_POSTS.find((post) => post.id === postId);
}

export async function fetchPostsByUsername(username: string): Promise<Post[]> {
  await delay();
  return MOCK_POSTS.filter((post) => post.author.username === username);
}

export async function fetchUserProfile(username: string): Promise<User | undefined> {
  await delay();
  return MOCK_USERS.find((user) => user.username === username);
}

export async function searchPosts(term: string): Promise<Post[]> {
  await delay();
  const normalized = term.toLowerCase();
  return MOCK_POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(normalized) ||
      post.tags.some((tag) => tag.toLowerCase().includes(normalized)),
  );
}
