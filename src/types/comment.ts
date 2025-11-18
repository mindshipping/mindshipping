import type { User } from "./user";

export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  likes: number;
  author: Pick<User, "id" | "username" | "name" | "avatarUrl">;
};
