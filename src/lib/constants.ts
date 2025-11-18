import type { Post } from "@/types/post";
import type { User } from "@/types/user";
import type { Comment } from "@/types/comment";

export const THEME = {
  background: "#373643",
  brand: "#18cb96",
  muted: "#5c5b68",
  surface: "#444353",
};

const baseUsers: Record<string, User> = {
  "sarah-chen": {
    id: "u1",
    username: "sarah-chen",
    name: "Sarah Chen",
  avatarUrl: "/images/avatar-sarah.svg",
    headline: "Designing mindful experiences",
    bio: "Product designer writing about focus, deep work, and mindful productivity.",
    stats: {
      followers: 18400,
      following: 320,
      posts: 42,
    },
    social: {
      website: "https://mindfulpixels.com",
      location: "Amsterdam, NL",
    },
  },
  "lucas-adebayor": {
    id: "u2",
    username: "lucas-adebayor",
    name: "Lucas Adebayo",
  avatarUrl: "/images/avatar-lucas.svg",
    headline: "Engineering calm systems",
    bio: "Building calm software teams. I write about DX, leadership, and humane processes.",
    stats: {
      followers: 22100,
      following: 410,
      posts: 57,
    },
    social: {
      website: "https://lucasbuilds.dev",
      location: "Lagos, NG",
    },
  },
  "maya-rojas": {
    id: "u3",
    username: "maya-rojas",
    name: "Maya Rojas",
  avatarUrl: "/images/avatar-maya.svg",
    headline: "Stories about learning in public",
    bio: "Indie hacker documenting the long road to sustainable products.",
    stats: {
      followers: 9700,
      following: 180,
      posts: 31,
    },
    social: {
      website: "https://mayarojas.com",
      location: "Austin, TX",
    },
  },
};

const comments: Comment[] = [
  {
    id: "c1",
    content: "Loved the cadence section—especially the rituals you use to protect deep work.",
    createdAt: "2025-11-10T09:00:00.000Z",
    likes: 42,
    author: {
      id: baseUsers["maya-rojas"].id,
      username: baseUsers["maya-rojas"].username,
      name: baseUsers["maya-rojas"].name,
      avatarUrl: baseUsers["maya-rojas"].avatarUrl,
    },
  },
  {
    id: "c2",
    content: "I adopted the reflection prompts. Immediate clarity boost, thank you!",
    createdAt: "2025-11-11T14:20:00.000Z",
    likes: 18,
    author: {
      id: baseUsers["lucas-adebayor"].id,
      username: baseUsers["lucas-adebayor"].username,
      name: baseUsers["lucas-adebayor"].name,
      avatarUrl: baseUsers["lucas-adebayor"].avatarUrl,
    },
  },
];

export const MOCK_POSTS: Post[] = [
  {
    id: "focus-rituals",
    title: "Focus Rituals For Teams That Build Calmly",
    excerpt:
      "How our studio keeps momentum without sacrificing deep work or team wellbeing.",
    content:
      "Designing calm software requires deliberate rituals. In this playbook you'll find the exact async rhythms, reflection prompts, and goal-setting cadences our studio runs every quarter...",
  coverImage: "/images/post-focus.svg",
    publishedAt: "2025-11-07T08:00:00.000Z",
    readingTime: "6 min read",
    tags: ["process", "teams", "focus"],
    likes: 482,
    isLiked: true,
    comments,
    author: {
      id: baseUsers["sarah-chen"].id,
      username: baseUsers["sarah-chen"].username,
      name: baseUsers["sarah-chen"].name,
      avatarUrl: baseUsers["sarah-chen"].avatarUrl,
      headline: baseUsers["sarah-chen"].headline,
    },
  },
  {
    id: "calm-roadmaps",
    title: "Calm Roadmaps: Less Demos, More Clarity",
    excerpt:
      "A lighter alternative to sprint reviews that still keeps leadership aligned.",
    content:
      "Roadmaps can either be anxiety machines or clarity amplifiers. By reducing demo thrash and focusing on narrative updates, we've unlocked better async alignment...",
  coverImage: "/images/post-roadmap.svg",
    publishedAt: "2025-11-02T15:30:00.000Z",
    readingTime: "4 min read",
    tags: ["leadership", "strategy"],
    likes: 301,
    comments: comments.slice(0, 1),
    author: {
      id: baseUsers["lucas-adebayor"].id,
      username: baseUsers["lucas-adebayor"].username,
      name: baseUsers["lucas-adebayor"].name,
      avatarUrl: baseUsers["lucas-adebayor"].avatarUrl,
      headline: baseUsers["lucas-adebayor"].headline,
    },
  },
  {
    id: "learning-out-loud",
    title: "Learning Out Loud Without The Burnout",
    excerpt:
      "Systems I use to share work-in-progress without feeling like a content machine.",
    content:
      "The algorithm rewards volume, but thoughtful cadence keeps you sane. Here's how I batch, repurpose, and protect my curiosity time while still publishing every week...",
  coverImage: "/images/post-learning.svg",
    publishedAt: "2025-10-28T10:15:00.000Z",
    readingTime: "7 min read",
    tags: ["creator", "indiehacking"],
    likes: 217,
    comments: [],
    author: {
      id: baseUsers["maya-rojas"].id,
      username: baseUsers["maya-rojas"].username,
      name: baseUsers["maya-rojas"].name,
      avatarUrl: baseUsers["maya-rojas"].avatarUrl,
      headline: baseUsers["maya-rojas"].headline,
    },
  },
];

export const MOCK_USERS: User[] = Object.values(baseUsers);

export const FEATURED_TAGS = ["focus", "productivity", "leadership", "mindful dev"];
