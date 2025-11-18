import { notFound } from "next/navigation";
import { PostDetail } from "@/components/posts/PostDetail";
import { fetchPostById } from "@/lib/api";
import { MOCK_POSTS } from "@/lib/constants";

export const dynamicParams = true;

export async function generateStaticParams() {
  return MOCK_POSTS.map((post) => ({ postId: post.id }));
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await fetchPostById(params.postId);
  if (!post) {
    notFound();
  }
  return <PostDetail post={post} />;
}
