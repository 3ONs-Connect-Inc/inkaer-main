import { Card, CardContent } from "@/components/ui/card";
import type { Grade } from "@/types/types";
import { RatingStars } from "./RatingStars";
import { VoteButtons } from "./VoteButtons";
import { VoteItem } from "./VoteItem";
import GradeHeader from "./GradeHeader";

interface GradeComponentProps {
  grades: Grade[];
  openVoteDialog: (gradeId: string, voteType: "upvote" | "downvote") => void;
  voteType: "upvote" | "downvote";
  handleVoteSubmit: () => void;
  voteComment: string;
  setVoteComment: (comment: string) => void;
  isVoteDialogOpen: boolean;
  setIsVoteDialogOpen: (state: boolean) => void;
  isGradeDialogOpen: boolean;
  setIsGradeDialogOpen: (state: boolean) => void;
  newGrade: { rating: number; comment: string };
  setNewGrade: (newGrade: { rating: number; comment: string }) => void;
  handleGradeSubmit: () => void;
}

const index = ({
  grades,
  voteType,
  handleVoteSubmit,
  voteComment,
  setVoteComment,
  openVoteDialog,
  isVoteDialogOpen,
  setIsVoteDialogOpen,
  isGradeDialogOpen,
  setIsGradeDialogOpen,
  newGrade,
  setNewGrade,
  handleGradeSubmit,
}: GradeComponentProps) => {
  // Sample function for vote counts
  const getVoteCounts = (votes: any[]) => {
    const upvotes = votes.filter((vote) => vote.type === "upvote").length;
    const downvotes = votes.filter((vote) => vote.type === "downvote").length;
    return { upvotes, downvotes };
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
      <GradeHeader
        isGradeDialogOpen={isGradeDialogOpen}
        setIsGradeDialogOpen={setIsGradeDialogOpen}
        newGrade={newGrade}
        setNewGrade={setNewGrade}
        handleGradeSubmit={handleGradeSubmit}
      />
      <CardContent>
        <div className="space-y-6">
          {grades.map((grade) => {
            const { upvotes, downvotes } = getVoteCounts(grade.votes);
            return (
              <div
                key={grade.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-2 sm:mb-0">
                    <RatingStars rating={grade.rating} />
                    <span className="author">{grade.author}</span>
                    <span className="date">{grade.timestamp}</span>
                  </div>
                  <VoteButtons
                    gradeId={grade.id}
                    upvotes={upvotes}
                    downvotes={downvotes}
                    openVoteDialog={openVoteDialog}
                    isVoteDialogOpen={isVoteDialogOpen}
                    setIsVoteDialogOpen={setIsVoteDialogOpen}
                    voteType={voteType}
                    handleVoteSubmit={handleVoteSubmit}
                    voteComment={voteComment}
                    setVoteComment={setVoteComment}
                  />
                </div>
                <p className="section-comment mb-3">{grade.comment}</p>
                {/* Votes/Replies */}
                {grade.votes.length > 0 && (
                  <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-3">
                    {grade.votes.map((vote) => (
                      <VoteItem key={vote.id} vote={vote} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default index;
