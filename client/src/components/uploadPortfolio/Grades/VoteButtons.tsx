import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsDown, ThumbsUp } from "lucide-react";


export const VoteButtons = ({
  gradeId,
  upvotes,
  downvotes,
  isVoteDialogOpen,
  setIsVoteDialogOpen,
  openVoteDialog,
  voteType,
  handleVoteSubmit,
  voteComment,
  setVoteComment,
}: {
  gradeId: string;  
  isVoteDialogOpen: boolean;
  setIsVoteDialogOpen: (state: boolean) => void;
  upvotes: number;
  downvotes: number;
  voteType: "upvote" | "downvote";
  handleVoteSubmit: () => void;
  voteComment: string;
  setVoteComment: (comment: string) => void;
  openVoteDialog: (gradeId: string, voteType: "upvote" | "downvote") => void;
}) => (
  <div className="flex items-center gap-2">
    <Dialog open={isVoteDialogOpen} onOpenChange={setIsVoteDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => openVoteDialog(gradeId, "upvote")}
          className="text-green-600 hover:text-green-700"
        >
          <ThumbsUp className="w-4 h-4 mr-1" />
          {upvotes}
        </Button>
      </DialogTrigger>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => openVoteDialog(gradeId, "downvote")}
          className="text-red-600 hover:text-red-700"
        >
          <ThumbsDown className="w-4 h-4 mr-1" />
          {downvotes}
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="comment">
        <DialogHeader>
          <DialogTitle>
            {voteType === "upvote" ? "Upvote" : "Downvote"} Comment
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Comment *</label>
            <Textarea
              value={voteComment}
              onChange={(e) => setVoteComment(e.target.value)}
              placeholder={`Why are you ${
                voteType === "upvote" ? "upvoting" : "downvoting"
              } this comment?`}
              rows={3}
            />
          </div>
          <Button onClick={handleVoteSubmit} className="btn-responsive w-full">
            Submit {voteType === "upvote" ? "Upvote" : "Downvote"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
);
