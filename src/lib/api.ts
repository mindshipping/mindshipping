import { MOCK_POSTS, MOCK_USERS } from "@/lib/constants";
import type { Post } from "@/types/post";
import type { User } from "@/types/user";

const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

type HealthCheckResponse = {
  status: string;
  service?: string;
  timestamp?: string;
  [key: string]: unknown;
};

type PlaceholderInfoResponse = Record<string, unknown>;

type RuntimeEnv = Record<string, string | undefined>;

function getRuntimeEnvVar(key: string) {
  const runtimeProcess = (globalThis as { process?: { env?: RuntimeEnv } }).process;
  return runtimeProcess?.env?.[key];
}

let cachedApiBaseUrl: string | null = null;

function resolveApiBaseUrl() {
  if (cachedApiBaseUrl) {
    return cachedApiBaseUrl;
  }

  const rawBaseUrl = getRuntimeEnvVar("NEXT_PUBLIC_BACKEND_ROOT_URL")?.trim();
  if (!rawBaseUrl) {
    throw new Error("NEXT_PUBLIC_BACKEND_ROOT_URL is not configured. Update your .env to point at the desired MindShipping backend namespace.");
  }

  cachedApiBaseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
  return cachedApiBaseUrl;
}

function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${resolveApiBaseUrl()}${normalizedPath}`;
}

async function requestJson<T>(path: string, init?: RequestInit) {
  const response = await fetch(buildApiUrl(path), {
    ...init,
    cache: init?.cache ?? "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const fallbackMessage = `Request failed with status ${response.status}`;
    const errorMessage = await response.text().catch(() => fallbackMessage);
    throw new Error(errorMessage || fallbackMessage);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export async function fetchMindShippingHealth() {
  return requestJson<HealthCheckResponse>("/health");
}

export async function fetchMindShippingInfo() {
  return requestJson<PlaceholderInfoResponse>("/info");
}

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
