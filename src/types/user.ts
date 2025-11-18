export type UserStats = {
  followers: number;
  following: number;
  posts: number;
};

export type UserSocial = {
  website?: string;
  location?: string;
  twitter?: string;
};

export type User = {
  id: string;
  username: string;
  name: string;
  avatarUrl: string;
  headline: string;
  bio: string;
  stats: UserStats;
  social?: UserSocial;
};
