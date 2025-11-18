import type { Comment } from "@/types/comment";
import { Avatar } from "@/components/ui/Avatar";
import { formatDate } from "@/lib/utils";

export function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return <p className="text-sm text-white/60">Be the first to add your thoughts.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {comments.map((comment) => (
  <li key={comment.id} className="glass-surface rounded-3xl p-5">
          <div className="flex items-center gap-3">
            <Avatar src={comment.author.avatarUrl} name={comment.author.name} size={44} />
            <div>
              <p className="text-sm font-semibold">{comment.author.name}</p>
              <p className="text-xs text-white/50">{formatDate(comment.createdAt)}</p>
            </div>
          </div>
          <p className="mt-3 text-white/80">{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}
