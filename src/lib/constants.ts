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
    headline: "Senior Frontend Architect",
    bio: "Building scalable React systems and sharing patterns for modern web development.",
    stats: {
      followers: 18400,
      following: 320,
      posts: 42,
    },
    social: {
      website: "https://sarahchen.dev",
      location: "San Francisco, CA",
    },
  },
  "lucas-adebayor": {
    id: "u2",
    username: "lucas-adebayor",
    name: "Lucas Adebayo",
  avatarUrl: "/images/avatar-lucas.svg",
    headline: "DevOps & Cloud Infrastructure",
    bio: "Automating deployments, optimizing cloud costs, and building resilient distributed systems.",
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
    headline: "Full-Stack Engineer & Tech Blogger",
    bio: "Building SaaS products and sharing lessons on scaling, architecture, and startup engineering.",
    stats: {
      followers: 9700,
      following: 180,
      posts: 31,
    },
    social: {
      website: "https://mayarojas.dev",
      location: "Austin, TX",
    },
  },
};

const comments: Comment[] = [
  {
    id: "c1",
    content: "Great breakdown of the async patterns—especially the parts on maintaining focus during code reviews.",
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
    title: "Building Focus Rituals for Deep Technical Work",
    excerpt:
      "How I structure my day for uninterrupted coding sessions and architectural thinking.",
    content:
      "Sustaining focus in complex technical work requires deliberate rituals. In this guide, you'll learn the exact async patterns, reflection prompts, and goal-setting frameworks I use every quarter...",
  coverImage: "/images/post-focus.svg",
    publishedAt: "2025-11-07T08:00:00.000Z",
    readingTime: "6 min read",
    tags: ["productivity", "engineering", "workflow"],
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
    title: "Scalable Architecture: From Monolith to Microservices",
    excerpt:
      "A practical guide to breaking down monoliths without disrupting production.",
    content:
      "Migrating architecture requires careful planning. By decomposing services gradually and focusing on domain boundaries, we've achieved better scalability without downtime...",
  coverImage: "/images/post-roadmap.svg",
    publishedAt: "2025-11-02T15:30:00.000Z",
    readingTime: "4 min read",
    tags: ["architecture", "microservices", "devops"],
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
    title: "Building in Public: A Developer's Journey",
    excerpt:
      "How documenting my projects publicly accelerated my learning and career growth.",
    content:
      "Sharing your work-in-progress builds credibility and attracts opportunities. Here's how I document projects, handle feedback, and balance transparency with shipping fast...",
  coverImage: "/images/post-learning.svg",
    publishedAt: "2025-10-28T10:15:00.000Z",
    readingTime: "7 min read",
    tags: ["career", "learning", "opensource"],
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

export const FEATURED_TAGS = ["web3", "ai/ml", "cloud", "devops", "frontend", "backend"];
