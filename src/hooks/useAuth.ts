import { useState } from "react";
import { getCurrentUser, setCurrentUser } from "@/lib/auth";
import type { User } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => getCurrentUser());

  const switchUser = (username: string) => {
    setCurrentUser(username);
    setUser(getCurrentUser());
  };

  return {
    user,
    isAuthenticated: Boolean(user),
    switchUser,
  };
}
