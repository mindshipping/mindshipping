import type { Comment } from "./comment";
import type { User } from "./user";

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  likes: number;
  isLiked?: boolean;
  comments: Comment[];
  author: Pick<User, "id" | "username" | "name" | "avatarUrl" | "headline">;
};
