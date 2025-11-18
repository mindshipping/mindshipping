import { MOCK_USERS } from "@/lib/constants";
import type { User } from "@/types/user";

let currentUser: User | null = MOCK_USERS[0] ?? null;

export function getCurrentUser(): User | null {
  return currentUser;
}

export function setCurrentUser(username: string) {
  const next = MOCK_USERS.find((user) => user.username === username) ?? null;
  currentUser = next;
}

export function isOwner(username: string) {
  return currentUser?.username === username;
}
