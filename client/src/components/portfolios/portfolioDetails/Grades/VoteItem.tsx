import { formatDistanceToNow } from "date-fns";
import { ThumbsDown, ThumbsUp } from "lucide-react";

  export const VoteItem = ({ vote }: { vote: any }) => (
    <>
      <div key={vote.id} className="flex flex-col sm:flex-row items-center justify-between text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-1">
          {vote.type === 'upvote' ? (
            <ThumbsUp className="w-3 h-3 text-green-600" />
          ) : (
            <ThumbsDown className="w-3 h-3 text-red-600" />
          )}
          <span className="author">{vote.author}</span>
          <span className="date">
             {formatDistanceToNow(new Date(vote.timestamp), { addSuffix: true })}
          </span>
        </div>
      </div>
      <p className="section-p">{vote.comment}</p>  
    </>
  ); 